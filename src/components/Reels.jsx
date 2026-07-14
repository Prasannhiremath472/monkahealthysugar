import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const REELS = [
  {
    id: "reel-1",
    title: "Pour & Stir",
    src: "/monka.co.in/reel-1.mp4",
    poster: "/monka.co.in/lifestyle-pour.jpeg",
  },
  {
    id: "reel-2",
    title: "Bake It Golden",
    src: "/monka.co.in/reel-2.mp4",
    poster: "/monka.co.in/lifestyle-kitchen.jpeg",
  },
  {
    id: "reel-3",
    title: "Everyday Sweetness",
    src: "/monka.co.in/reel-3.mp4",
    poster: "/monka.co.in/lifestyle-bowl.jpeg",
  },
  {
    id: "reel-4",
    title: "Straight from the Farm",
    src: "/monka.co.in/reel-4.mp4",
    poster: "/monka.co.in/lifestyle-waffles.jpeg",
  },
  {
    id: "reel-5",
    title: "Coffee Ritual",
    src: "/monka.co.in/reel-5.mp4",
    poster: "/monka.co.in/lifestyle-cafe.jpeg",
  },
  {
    id: "reel-6",
    title: "Fresh from the Vine",
    src: "/monka.co.in/reel-6.mp4",
    poster: "/monka.co.in/hero-lifestyle-1.jpeg",
  },
  {
    id: "reel-7",
    title: "The Extraction Process",
    src: "/monka.co.in/reel-7.mp4",
    poster: "/monka.co.in/hero-lifestyle-2.jpeg",
  },
  {
    id: "reel-8",
    title: "Ready to Ship",
    src: "/monka.co.in/reel-8.mp4",
    poster: "/monka.co.in/monk-fruit-vine.webp",
  },
];

function ReelCard({ reel }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    setPlaying(true);
    requestAnimationFrame(() => {
      videoRef.current?.play();
    });
  };

  return (
    <div className="relative h-full w-full rounded-3xl overflow-hidden shadow-[0_8px_30px_-14px_rgba(32,19,18,0.25)] bg-ink">
      <video
        ref={videoRef}
        src={reel.src}
        poster={reel.poster}
        playsInline
        controls={playing}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {!playing && (
        <button
          type="button"
          onClick={handlePlay}
          aria-label={`Play ${reel.title}`}
          className="group absolute inset-0 flex items-center justify-center bg-ink/25 hover:bg-ink/35 transition-colors"
        >
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-cream/90 shadow-lg transition-transform group-hover:scale-110">
            <span className="ml-1 border-y-[9px] border-y-transparent border-l-[14px] border-l-ink" />
          </span>
          <span className="absolute bottom-4 left-4 right-4 text-left text-cream text-sm font-semibold drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
            {reel.title}
          </span>
        </button>
      )}
    </div>
  );
}

function usePerPage() {
  const [perPage, setPerPage] = useState(4);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 640) setPerPage(1);
      else if (w < 1024) setPerPage(2);
      else setPerPage(4);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return perPage;
}

export default function Reels() {
  const perPage = usePerPage();
  const pageCount = Math.ceil(REELS.length / perPage);
  const [page, setPage] = useState(0);

  useEffect(() => {
    setPage((p) => Math.min(p, pageCount - 1));
  }, [pageCount]);

  const goTo = (next) => {
    setPage(Math.max(0, Math.min(pageCount - 1, next)));
  };

  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-7xl px-6 md:px-10 pb-16 md:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-10 gap-6"
        >
          <div>
            <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-red mb-4">
              See It In Action
            </span>
            <h2 className="font-display text-3xl md:text-5xl leading-[1.1] tracking-tight">
              Monka, in <em className="italic">real kitchens.</em>
            </h2>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <span className="text-xs tracking-widest text-ink/40 tabular-nums">
              {String(page + 1).padStart(2, "0")} / {String(pageCount).padStart(2, "0")}
            </span>
            <button
              type="button"
              onClick={() => goTo(page - 1)}
              disabled={page === 0}
              aria-label="Previous reels"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 text-ink hover:bg-ink hover:text-cream transition-colors disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-ink"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => goTo(page + 1)}
              disabled={page === pageCount - 1}
              aria-label="Next reels"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 text-ink hover:bg-ink hover:text-cream transition-colors disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-ink"
            >
              →
            </button>
          </div>
        </motion.div>

        <div className="overflow-hidden">
          <motion.div
            className="flex"
            animate={{ x: `-${page * 100}%` }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            {Array.from({ length: pageCount }).map((_, p) => (
              <div key={p} className="flex w-full shrink-0 gap-5">
                {REELS.slice(p * perPage, p * perPage + perPage).map((reel) => (
                  <div
                    key={reel.id}
                    className="aspect-[9/16]"
                    style={{ width: `calc(${100 / perPage}% - ${(20 * (perPage - 1)) / perPage}px)` }}
                  >
                    <ReelCard reel={reel} />
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
