import { motion } from "framer-motion";

const STATS = [
  { value: "0", label: "Calories per Serving" },
  { value: "1:1", label: "Sugar Replacement" },
  { value: "0", label: "Bitter Aftertaste" },
  { value: "100%", label: "Naturally Sweet" },
];

export default function Comparison() {
  return (
    <section className="relative bg-ink text-cream overflow-hidden">
      <div className="glow top-0 right-0 w-[28rem] h-[28rem] bg-red/20" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-3 text-xs font-semibold tracking-[0.3em] uppercase text-red mb-6">
            <span className="h-px w-10 bg-red" />
            The Difference
          </span>
          <h2 className="font-sans font-black uppercase leading-[0.88] tracking-tight text-4xl sm:text-6xl md:text-7xl">
            <span className="block text-cream">Healthy.</span>
            <span
              className="block italic mt-1"
              style={{ WebkitTextStroke: "2px var(--color-red)", color: "transparent" }}
            >
              But it slaps.
            </span>
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-cream/70 max-w-xl">
            2 teaspoons of refined sugar cost you 32 kcal and a 32 mg/dl
            blood-sugar spike. The same 2 teaspoons of Monka cost you
            nothing — 0 kcal, 0 mg/dl.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
              className="rounded-2xl bg-cream/[0.04] border border-cream/10 px-6 py-8"
            >
              <p className="font-sans font-black text-5xl md:text-6xl text-cream leading-none">
                {stat.value}
              </p>
              <p className="mt-4 text-xs tracking-widest uppercase text-cream/50">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          whileHover={{ y: -6 }}
          className="mt-16 rounded-3xl overflow-hidden bg-cream shadow-2xl max-w-3xl mx-auto"
        >
          <img
            src="/monka.co.in/comparison-calories.png"
            alt="Sugar vs Monka: 32 kcal vs 0 kcal comparison"
            className="w-full h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}
