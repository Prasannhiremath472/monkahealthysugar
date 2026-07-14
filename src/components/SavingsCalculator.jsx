import { useState } from "react";
import { motion } from "framer-motion";

const KCAL_PER_TSP = 16;
const GLYCEMIC_PER_TSP = 16;

export default function SavingsCalculator() {
  const [teaspoons, setTeaspoons] = useState(4);

  const dailyKcal = teaspoons * KCAL_PER_TSP;
  const dailyGlycemic = teaspoons * GLYCEMIC_PER_TSP;
  const yearlyKcal = dailyKcal * 365;
  const yearlySugarKg = ((teaspoons * 4) * 365) / 1000;

  return (
    <section className="relative bg-ink text-cream overflow-hidden">
      <div className="glow top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[36rem] h-[36rem] bg-red/15" aria-hidden />

      <div className="relative mx-auto max-w-5xl px-6 md:px-10 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-red mb-4">
            See Your Savings
          </span>
          <h2 className="font-display text-3xl md:text-5xl leading-[1.1] tracking-tight">
            How much sugar do you <em className="italic">really</em> take?
          </h2>
          <p className="mt-4 text-cream/60 max-w-lg mx-auto">
            Slide to match your daily sugar habit — tea, coffee, desserts — and
            see what switching to Monka actually saves you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl bg-cream/5 border border-cream/10 backdrop-blur p-8 md:p-12"
        >
          <div className="flex items-center justify-between mb-4">
            <label htmlFor="tsp" className="text-sm font-semibold tracking-wide uppercase text-cream/70">
              Teaspoons of sugar per day
            </label>
            <span className="font-display text-3xl text-red">{teaspoons}</span>
          </div>
          <input
            id="tsp"
            type="range"
            min="1"
            max="20"
            value={teaspoons}
            onChange={(e) => setTeaspoons(Number(e.target.value))}
            className="w-full accent-red h-2 rounded-full cursor-pointer"
            data-cursor-hover
          />

          <div className="mt-12 grid sm:grid-cols-3 gap-8 text-center">
            {[
              { value: `${dailyKcal}`, label: "Calories saved / day", suffix: "kcal" },
              { value: `${dailyGlycemic}`, label: "Blood-sugar spike avoided / day", suffix: "mg/dl" },
              { value: `${Math.round(yearlyKcal / 1000)}k`, label: "Calories saved / year", suffix: "kcal" },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5 }}
              >
                <p className="font-display text-4xl md:text-5xl text-cream">
                  {stat.value}
                  <span className="text-lg text-cream/50 ml-1">{stat.suffix}</span>
                </p>
                <p className="mt-2 text-xs tracking-widest uppercase text-cream/50">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

          <p className="mt-10 text-center text-cream/50 text-sm">
            That's roughly <span className="text-red font-semibold">{yearlySugarKg.toFixed(1)} kg</span> of
            sugar replaced every year — with zero calories, zero glycemic
            impact, 0 aftertaste.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
