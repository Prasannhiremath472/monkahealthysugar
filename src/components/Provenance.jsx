import { motion } from "framer-motion";

const STEPS = [
  {
    step: "01",
    title: "Grown on the vine",
    detail:
      "Monk fruit is hand-picked at peak ripeness from farms cultivated for natural sweetness — no synthetic inputs.",
    img: "/monka.co.in/monk-fruit-vine.webp",
    rotate: "-rotate-2",
  },
  {
    step: "02",
    title: "Extracted, not synthesized",
    detail:
      "The fruit is processed into a pure extract and blended with allulose — a natural sugar rare enough to have almost zero calorie impact.",
    img: "/monka.co.in/hero-lifestyle-2.jpeg",
    rotate: "rotate-1",
  },
  {
    step: "03",
    title: "Ready for your table",
    detail:
      "From our facility in Kolhapur to your kitchen — the same sweetness, texture, and browning as sugar, without the cost to your body.",
    img: "/monka.co.in/hero-lifestyle-1.jpeg",
    rotate: "-rotate-1",
  },
];

export default function Provenance() {
  return (
    <section id="story-journey" className="relative bg-cream overflow-hidden">
      <span className="font-hero italic text-[16rem] leading-none text-ink/[0.03] absolute -top-16 right-0 select-none pointer-events-none">
        02
      </span>

      <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-20"
        >
          <span className="inline-flex items-center gap-3 text-xs font-semibold tracking-[0.3em] uppercase text-red mb-5">
            <span className="h-px w-10 bg-red" />
            Our Process
          </span>
          <h2 className="font-hero text-4xl md:text-6xl leading-[1.02] tracking-tight">
            From the vine to your <em className="italic">table.</em>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-x-10 gap-y-16">
          {STEPS.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: i * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className={`absolute -inset-3 rounded-[2rem] bg-red/[0.06] ${s.rotate}`} />
              <motion.div
                whileHover={{ rotate: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className={`relative aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_20px_50px_-20px_rgba(32,19,18,0.3)] ${s.rotate}`}
              >
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <div className="mt-8 flex items-start gap-4">
                <span className="font-hero italic text-3xl text-red/50 tabular-nums shrink-0">
                  {s.step}
                </span>
                <div>
                  <h3 className="font-display text-xl leading-snug">{s.title}</h3>
                  <p className="mt-2 text-sm text-ink/60 leading-relaxed">{s.detail}</p>
                </div>
              </div>

              {i < STEPS.length - 1 && (
                <div className="hidden md:flex absolute top-1/3 -right-6 h-8 w-8 items-center justify-center rounded-full bg-cream shadow-md text-red text-sm">
                  →
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
