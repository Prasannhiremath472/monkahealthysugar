import { motion } from "framer-motion";

const STEPS = [
  {
    step: "01",
    title: "Grown on the vine",
    detail:
      "Monk fruit is hand-picked at peak ripeness from farms cultivated for natural sweetness — no synthetic inputs.",
    img: "/monka.co.in/monk-fruit-vine.webp",
  },
  {
    step: "02",
    title: "Extracted, not synthesized",
    detail:
      "The fruit is processed into a pure extract and blended with allulose — a natural sugar rare enough to have almost zero calorie impact.",
    img: "/monka.co.in/hero-lifestyle-2.jpeg",
  },
  {
    step: "03",
    title: "Ready for your table",
    detail:
      "From our facility in Kolhapur to your kitchen — the same sweetness, texture, and browning as sugar, without the cost to your body.",
    img: "/monka.co.in/hero-lifestyle-1.jpeg",
  },
];

export default function Provenance() {
  return (
    <section id="story-journey" className="bg-cream">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-red mb-4">
            Our Process
          </span>
          <h2 className="font-display text-3xl md:text-5xl leading-[1.1] tracking-tight">
            From the vine to your <em className="italic">table.</em>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-6">
          {STEPS.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: i * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_8px_30px_-14px_rgba(32,19,18,0.2)]">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-display text-5xl text-red/20 absolute -top-4 -left-2">
                {s.step}
              </span>
              <h3 className="mt-6 font-display text-xl leading-snug">{s.title}</h3>
              <p className="mt-2 text-sm text-ink/60 leading-relaxed">{s.detail}</p>

              {i < STEPS.length - 1 && (
                <div className="hidden md:block absolute top-1/3 -right-6 text-red/30 text-2xl">
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
