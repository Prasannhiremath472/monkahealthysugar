import { motion } from "framer-motion";

const WHY_POINTS = [
  {
    n: "01",
    title: "No Added Preservatives or Chemicals",
    detail: "All-natural monk fruit extract, nothing synthetic.",
  },
  {
    n: "02",
    title: "No Artificial Sweeteners or Sugar Added",
    detail: "100% Monk Fruit Extract and Allulose — that's it.",
  },
  {
    n: "03",
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
    <section id="story" className="relative bg-ink text-cream overflow-hidden">
      <div
        className="pointer-events-none absolute -top-1/3 -left-1/4 h-[40rem] w-[40rem] rounded-full opacity-20 blur-[120px]"
        style={{ background: "radial-gradient(circle, var(--color-red), transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10 pt-24 pb-20 md:pt-32 md:pb-28 grid md:grid-cols-12 gap-10 md:gap-6 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-5 md:order-2 relative"
        >
          <div className="absolute -inset-4 md:-inset-6 rounded-[2.5rem] bg-red/15 -rotate-3" />
          <motion.div
            whileHover={{ rotate: 0, scale: 1.02 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)] rotate-2"
          >
            <img
              src="/monka.co.in/about.jpeg"
              alt="Monka O'Calorie sweetener revealed under a cloche"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <span className="font-hero italic text-[7rem] md:text-[9rem] leading-none text-cream/10 absolute -bottom-10 -left-6 md:-left-10 select-none pointer-events-none">
            m
          </span>
        </motion.div>

        <div className="md:col-span-7 md:order-1 md:pr-10">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            variants={{ show: { transition: { staggerChildren: 0.12 } } }}
          >
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-3 text-xs font-semibold tracking-[0.3em] uppercase text-red mb-6"
            >
              <span className="h-px w-10 bg-red" />
              Why Monka
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="font-hero text-5xl md:text-7xl leading-[0.95] tracking-tight"
            >
              Pure.
              <br />
              Authentic.
              <br />
              <em className="italic text-red">Balanced.</em>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-8 text-lg leading-relaxed text-cream/60 max-w-lg"
            >
              We specialize in crafting all-natural, plant-based sweeteners
              that deliver the authentic taste and texture of sugar without
              the calories, chemicals, or bitter aftertaste — every product
              is formulated to be a 1:1 replacement.
            </motion.p>

            <div className="mt-12 space-y-0 divide-y divide-cream/10 border-t border-cream/10">
              {WHY_POINTS.map((point) => (
                <motion.div
                  key={point.title}
                  variants={fadeUp}
                  className="group flex items-start gap-6 py-6"
                >
                  <span className="font-hero italic text-2xl text-red/70 shrink-0 tabular-nums transition-colors group-hover:text-red">
                    {point.n}
                  </span>
                  <div>
                    <h3 className="font-semibold text-cream">{point.title}</h3>
                    <p className="text-sm text-cream/50 mt-1">{point.detail}</p>
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
