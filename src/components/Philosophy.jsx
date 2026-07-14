import { motion } from "framer-motion";

const WHY_POINTS = [
  {
    title: "No Added Preservatives or Chemicals",
    detail: "All-natural monk fruit extract, nothing synthetic.",
  },
  {
    title: "No Artificial Sweeteners or Sugar Added",
    detail: "100% Monk Fruit Extract and Allulose — that's it.",
  },
  {
    title: "No Insulin Spike",
    detail: "Zero glycemic impact, suitable for diabetics.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Philosophy() {
  return (
    <section id="story" className="bg-cream">
      <div className="mx-auto max-w-7xl px-6 md:px-10 pt-20 pb-12 md:pt-28 md:pb-16 grid md:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          whileHover={{ y: -6 }}
          className="relative aspect-square rounded-[2rem] overflow-hidden shadow-2xl"
        >
          <img
            src="/monka.co.in/about.jpeg"
            alt="Monka O'Calorie sweetener revealed under a cloche"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            variants={{ show: { transition: { staggerChildren: 0.12 } } }}
          >
            <motion.span
              variants={fadeUp}
              className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-red mb-4"
            >
              Why Monka
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="font-display text-4xl md:text-5xl leading-[1.1] tracking-tight"
            >
              Pure. Authentic.
              <br />
              <em className="italic">Balanced.</em>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-6 text-lg leading-relaxed text-ink/70"
            >
              We specialize in crafting all-natural, plant-based sweeteners
              that deliver the authentic taste and texture of sugar without
              the calories, chemicals, or bitter aftertaste — every product
              is formulated to be a 1:1 replacement.
            </motion.p>

            <div className="mt-10 space-y-6">
              {WHY_POINTS.map((point) => (
                <motion.div key={point.title} variants={fadeUp} className="flex gap-4">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red text-cream text-xs mt-0.5">
                    ✓
                  </span>
                  <div>
                    <h3 className="font-semibold">{point.title}</h3>
                    <p className="text-sm text-ink/60 mt-0.5">{point.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
