import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Magnetic from "./Magnetic";

const FRAME_COUNT = 241;
const FRAME_PATH = (i) =>
  `/monka.co.in/ezgif-1590439f78dc4242-jpg/ezgif-frame-${String(i).padStart(3, "0")}.jpg`;
function useFrameImages() {
  const [images, setImages] = useState([]);
  const [loaded, setLoaded] = useState(0);

  useEffect(() => {
    let cancelled = false;
    const imgs = new Array(FRAME_COUNT);

    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      img.src = FRAME_PATH(i);
      img.onload = () => {
        if (cancelled) return;
        setLoaded((n) => n + 1);
      };
      imgs[i - 1] = img;
    }

    setImages(imgs);
    return () => {
      cancelled = true;
    };
  }, []);

  return { images, loaded, ready: loaded >= FRAME_COUNT };
}

export default function ScrollFrameSequence() {
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  const { images, loaded, ready } = useFrameImages();

  // Manually driven scroll progress (0-1) — bypasses Framer Motion's
  // native-scroll-timeline acceleration path, which was silently failing
  // to update against a sticky-child target on this layout.
  const progress = useMotionValue(0);

  useEffect(() => {
    const updateProgress = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      if (total <= 0) return;
      const scrolled = -rect.top;
      const p = Math.min(1, Math.max(0, scrolled / total));
      progress.set(p);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const frameIndex = useTransform(progress, [0, 1], [0, FRAME_COUNT - 1]);

  // Intro (left-aligned) fully visible 0-8%, gone by 18%.
  const introOpacity = useTransform(progress, [0, 0.08, 0.18], [1, 1, 0]);
  const introX = useTransform(progress, [0, 0.18], [0, -40]);

  // Outro (left-aligned) starts fading in only after intro is fully gone.
  const outroOpacity = useTransform(progress, [0.82, 0.94], [0, 1]);
  const outroX = useTransform(progress, [0.82, 0.94], [-40, 0]);

  const drawFrame = (index) => {
    const canvas = canvasRef.current;
    const img = images[Math.round(index)];
    if (!canvas || !img || !img.complete || img.naturalWidth === 0) return;

    const ctx = canvas.getContext("2d");
    const { width, height } = canvas;

    // Source frames carry a small sparkle watermark baked into the bottom-
    // right ~12% of every image. Crop it out of the *source* rectangle
    // (not shift the destination) so the fill-crop math still lines up
    // exactly, regardless of viewport aspect ratio.
    const wm = 0.14;
    const srcW = img.naturalWidth * (1 - wm);
    const srcH = img.naturalHeight * (1 - wm);

    const imgRatio = srcW / srcH;
    const canvasRatio = width / height;

    let drawWidth, drawHeight, offsetX, offsetY;
    if (imgRatio > canvasRatio) {
      drawHeight = height;
      drawWidth = height * imgRatio;
      offsetX = (width - drawWidth) / 2;
      offsetY = 0;
    } else {
      drawWidth = width;
      drawHeight = width / imgRatio;
      offsetX = 0;
      offsetY = (height - drawHeight) / 2;
    }

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";
    ctx.clearRect(0, 0, width, height);
    ctx.filter = "brightness(1.3) saturate(1.15) contrast(1.02)";
    ctx.drawImage(img, 0, 0, srcW, srcH, offsetX, offsetY, drawWidth, drawHeight);
    ctx.filter = "none";
  };

  useEffect(() => {
    const unsubscribe = frameIndex.on("change", (latest) => {
      if (ready) drawFrame(latest);
    });
    return unsubscribe;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ready, images]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const cssWidth = canvas.clientWidth;
      const cssHeight = canvas.clientHeight;
      canvas.width = cssWidth * dpr;
      canvas.height = cssHeight * dpr;
      drawFrame(frameIndex.get());
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ready]);

  useEffect(() => {
    if (ready) drawFrame(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ready]);

  return (
    <section ref={sectionRef} id="top" className="relative bg-ink" style={{ height: "250vh" }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />

        <div className="absolute inset-0 bg-gradient-to-r from-ink/15 via-transparent to-ink/15" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/0 via-transparent to-ink/10" />
        <div className="absolute inset-y-0 left-0 w-full md:w-2/3 bg-gradient-to-r from-ink/45 via-ink/10 to-transparent" />

        {!ready && (
          <div className="absolute inset-0 flex items-center justify-center bg-ink text-cream/60 text-sm">
            Loading {Math.round((loaded / FRAME_COUNT) * 100)}%
          </div>
        )}

        {/* Intro copy — left side */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          style={{ opacity: introOpacity, x: introX }}
          className="absolute inset-y-0 left-0 flex flex-col justify-center max-w-md px-6 md:px-16 text-left z-10"
        >
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-cream mb-5 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
            From the Vine to Your Table
          </span>
          <h1 className="font-hero font-bold text-6xl md:text-8xl text-cream leading-[0.98] tracking-tight max-w-2xl drop-shadow-[0_4px_24px_rgba(0,0,0,0.45)]">
            Where <em className="italic text-red">sweeter</em> living begins.
          </h1>
          <p className="mt-7 text-cream text-sm tracking-widest uppercase animate-pulse drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
            Scroll to discover ↓
          </p>
        </motion.div>

        {/* Outro copy — left side */}
        <motion.div
          style={{ opacity: outroOpacity, x: outroX }}
          className="absolute inset-y-0 left-0 flex flex-col justify-center items-start max-w-lg px-6 md:px-16 text-left"
        >
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-red mb-4">
            Pure Ingredients · Authentic Sweetness
          </span>
          <h2 className="font-display text-3xl md:text-5xl text-cream leading-[1.1] tracking-tight">
            Experience the finest all-natural sugar alternative.
          </h2>
          <p className="mt-4 text-cream/70 text-base md:text-lg max-w-md">
            Zero calories, zero compromise.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <Magnetic
              as={motion.a}
              href="#product"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-block rounded-full bg-red text-cream text-sm font-semibold px-9 py-4 shadow-lg shadow-red/30 hover:bg-maroon transition-colors"
            >
              Shop the Pouch
            </Magnetic>
            <a
              href="#story"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-cream/80 hover:text-red transition-colors"
            >
              Why Monka?
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
