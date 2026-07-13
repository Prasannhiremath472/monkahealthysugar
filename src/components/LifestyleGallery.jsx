import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const PHOTOS = [
  {
    id: "pour",
    src: "/monka.co.in/lifestyle-pour.jpeg",
    alt: "Hot chocolate sweetened with Monka, poured fresh",
    rotation: -6,
  },
  {
    id: "kitchen",
    src: "/monka.co.in/lifestyle-kitchen.jpeg",
    alt: "Monka on the kitchen counter with coffee and biscotti",
    rotation: 4,
  },
  {
    id: "bowl",
    src: "/monka.co.in/lifestyle-bowl.jpeg",
    alt: "Fruit and yoghurt bowl sweetened with Monka",
    rotation: -3,
  },
  {
    id: "lineup",
    src: "/monka.co.in/imgi_20_Artboard-1.jpg",
    alt: "Monka product range with cake and monk fruit",
    rotation: 6,
  },
  {
    id: "waffles",
    src: "/monka.co.in/lifestyle-waffles.jpeg",
    alt: "Waffles with syrup at a warm breakfast table",
    rotation: -5,
  },
  {
    id: "cafe",
    src: "/monka.co.in/lifestyle-cafe.jpeg",
    alt: "Monka pouches on a café counter with fresh coffee",
    rotation: 5,
  },
];

export default function LifestyleGallery() {
  const [angles, setAngles] = useState(() => PHOTOS.map((_, i) => (360 / PHOTOS.length) * i));
  const [paused, setPaused] = useState(false);
  const pausedRef = useRef(paused);
  pausedRef.current = paused;

  useEffect(() => {
    const interval = setInterval(() => {
      if (pausedRef.current) return;
      setAngles((prev) => prev.map((a) => (a + 0.6) % 360));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-blush overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-20 md:py-28 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-red mb-4">
            Real Kitchens
          </span>
          <h2 className="font-display text-3xl md:text-5xl leading-[1.1] tracking-tight">
            Made for your <em className="italic">everyday.</em>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink/70 max-w-md">
            Monka isn't reserved for special occasions — stir it into your
            morning coffee, drizzle it over waffles, fold it into a fruit
            bowl, or bake it into a cake. Same sweetness you already love,
            in every cup, plate, and kitchen counter across the day.
          </p>
          <div className="mt-8 space-y-4">
            {[
              "Dissolves instantly — hot or cold",
              "Bakes and browns just like sugar",
              "Zero calories, every single time",
            ].map((point) => (
              <div key={point} className="flex items-center gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red text-cream text-xs">
                  ✓
                </span>
                <p className="text-sm text-ink/70">{point}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <div
          className="relative h-[34rem] sm:h-[40rem] flex items-center justify-center"
          style={{ perspective: 1000 }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {PHOTOS.map((photo, i) => {
            const angle = angles[i] * (Math.PI / 180);
            const radius = 210;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            return (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                animate={{ x, y, rotate: photo.rotation, opacity: 1, scale: 1 }}
                transition={{
                  x: { duration: 0.05, ease: "linear" },
                  y: { duration: 0.05, ease: "linear" },
                  rotate: { duration: 0.3 },
                  opacity: { duration: 0.6, delay: i * 0.1 },
                  scale: { duration: 0.6, delay: i * 0.1 },
                }}
                className="absolute w-44 h-56 sm:w-60 sm:h-72"
              >
                <motion.div
                  whileHover={{ scale: 1.08, rotate: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  data-cursor-hover
                  className="relative w-full h-full rounded-2xl overflow-hidden shadow-[0_20px_40px_-16px_rgba(32,19,18,0.35)] cursor-pointer"
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
