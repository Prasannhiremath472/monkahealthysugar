import { motion } from "framer-motion";

export default function Comparison() {
  return (
    <section className="relative bg-ink text-cream overflow-hidden">
      <div className="glow top-0 right-0 w-[28rem] h-[28rem] bg-red/20" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-32 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-red mb-4">
            The Difference
          </span>
          <h2 className="font-display text-4xl md:text-5xl leading-[1.1] tracking-tight">
            Sweetness without
            <br />
            <em className="italic">calories or guilt.</em>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-cream/70 max-w-md">
            2 teaspoons of refined sugar cost you 32 kcal and a 32 mg/dl
            blood-sugar spike. The same 2 teaspoons of Monka cost you
            nothing — 0 kcal, 0 mg/dl.
          </p>

          <div className="mt-10 flex gap-10">
            {[
              { value: "0", label: "Calories" },
              { value: "0", label: "Glycemic Impact" },
              { value: "1:1", label: "Sugar Ratio" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <p className="text-3xl font-display text-red">{stat.value}</p>
                <p className="text-xs tracking-widest uppercase text-cream/50 mt-1">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          whileHover={{ y: -6 }}
          className="rounded-3xl overflow-hidden bg-cream shadow-2xl"
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
