import { useState } from "react";
import { motion } from "framer-motion";

const UNITS = [
  { label: "Cups", singular: "cup", toGrams: 200 },
  { label: "Tablespoons", singular: "tablespoon", toGrams: 12.5 },
  { label: "Teaspoons", singular: "teaspoon", toGrams: 4 },
];

export default function RecipeConverter() {
  const [amount, setAmount] = useState(1);
  const [unitIndex, setUnitIndex] = useState(0);

  const unit = UNITS[unitIndex];
  const grams = amount * unit.toGrams;
  const monkaAmount = amount;

  return (
    <section id="recipe" className="bg-blush">
      <div className="mx-auto max-w-5xl px-6 md:px-10 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-red mb-4">
            Baking &amp; Cooking
          </span>
          <h2 className="font-display text-3xl md:text-5xl leading-[1.1] tracking-tight">
            Convert any recipe, <em className="italic">instantly.</em>
          </h2>
          <p className="mt-4 text-ink/60 max-w-lg mx-auto">
            Monka is a true 1:1 sugar replacement — the exact same amount your
            recipe calls for, no math, no ratios.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl bg-cream border border-ink/5 shadow-[0_8px_30px_-14px_rgba(32,19,18,0.15)] p-8 md:p-12"
        >
          <div className="grid sm:grid-cols-2 gap-8 items-end">
            <div>
              <label htmlFor="amount" className="block text-sm font-semibold tracking-wide uppercase text-ink/60 mb-3">
                Recipe calls for
              </label>
              <input
                id="amount"
                type="number"
                min="0"
                step="0.25"
                value={amount}
                onChange={(e) => setAmount(Math.max(0, Number(e.target.value)))}
                className="w-full rounded-xl border border-ink/15 bg-cream px-4 py-3 text-lg font-semibold focus:outline-none focus:border-red transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold tracking-wide uppercase text-ink/60 mb-3">
                Unit
              </label>
              <div className="flex gap-2">
                {UNITS.map((u, i) => (
                  <button
                    key={u.label}
                    type="button"
                    data-cursor-hover
                    onClick={() => setUnitIndex(i)}
                    className={`flex-1 rounded-xl px-3 py-3 text-sm font-semibold transition-colors ${
                      unitIndex === i
                        ? "bg-red text-cream"
                        : "bg-ink/5 text-ink/70 hover:bg-ink/10"
                    }`}
                  >
                    {u.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-ink/5 p-6 text-center">
              <p className="text-xs tracking-widest uppercase text-ink/50 mb-2">Refined Sugar</p>
              <p className="font-display text-3xl">
                {amount} {amount === 1 ? unit.singular : unit.label.toLowerCase()}
              </p>
              <p className="text-sm text-ink/50 mt-1">≈ {grams.toFixed(0)}g</p>
            </div>
            <div className="rounded-2xl bg-red text-cream p-6 text-center">
              <p className="text-xs tracking-widest uppercase text-cream/70 mb-2">Monka O'Calorie</p>
              <p className="font-display text-3xl">
                {monkaAmount} {monkaAmount === 1 ? unit.singular : unit.label.toLowerCase()}
              </p>
              <p className="text-sm text-cream/70 mt-1">Same amount, 0 calories</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
