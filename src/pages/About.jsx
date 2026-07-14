import { motion } from "framer-motion";

const PURITY_POINTS = [
  {
    label: "100% Plant-Based:",
    detail: "Sourced from Earth-grown ingredients.",
  },
  {
    label: "Zero Glycemic:",
    detail: "Formulated to keep blood sugar stable.",
  },
  {
    label: "Clean Label:",
    detail: "No hidden fillers, no artificial preservatives, and absolutely no synthetic chemicals.",
  },
];

const PROMISE_CARDS = [
  {
    title: "Health First",
    detail: "Zero calories and zero net carbs to support your fitness and wellness goals.",
  },
  {
    title: "Taste Always",
    detail: "A clean, sweet profile with zero bitter aftertaste or metallic finish.",
  },
  {
    title: "Simplicity Matters",
    detail: "A true 1:1 sugar replacement. One cup of sugar equals one cup of Monka.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function About() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 md:px-10 pt-32 pb-16 md:pt-40 md:pb-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl md:text-6xl tracking-tight"
        >
          About Us
        </motion.h1>
      </section>

      <section className="mx-auto max-w-7xl px-6 md:px-10 pb-20 md:pb-28 grid md:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="relative aspect-square rounded-[2rem] overflow-hidden shadow-2xl bg-red"
        >
          <img
            src="/monka.co.in/about.jpeg"
            alt="Monka O'Calorie sweetener"
            className="w-full h-full object-cover"
          />
        </motion.div>

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
            Our Story: Sweetness Without Compromise
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-display text-3xl md:text-4xl leading-[1.1] tracking-tight"
          >
            The Monka Journey
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-6 text-lg leading-relaxed text-ink/70">
            At Monka, we believe that the joy of a sweet moment should never
            be shadowed by health concerns. For too long, the choice has been
            binary: indulge in sugar and deal with the calories and spikes,
            or switch to artificial sweeteners and settle for a bitter,
            chemical aftertaste.
          </motion.p>
          <motion.p variants={fadeUp} className="mt-4 text-lg leading-relaxed text-ink/70">
            We decided to create a third way. Monka was founded on the
            principle that nature already holds the perfect recipe for
            sweetness. By harnessing the power of plant-based extracts like
            Monk Fruit and Allulose, we've crafted a range of sweeteners that
            mimic the soul of sugar — its taste, its texture, and its
            behavior in the kitchen — without any of the downsides.
          </motion.p>
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-6 md:px-10 pb-20 md:pb-28 grid md:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-display text-3xl md:text-4xl leading-[1.1] tracking-tight">
            Innovation in the Kitchen
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink/70">
            We aren't just another sugar substitute; we are a culinary
            upgrade. Our Allulose Series is a breakthrough in natural
            sweetening — it is one of the few natural alternatives that can
            actually brown and caramelize, allowing bakers to achieve that
            perfect golden crust on cakes and cookies that was previously
            impossible without real sugar.
          </p>
          <a
            href="/shop"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink text-cream text-sm font-semibold px-7 py-3.5 hover:bg-red transition-colors"
          >
            Shop all collections
            <span>→</span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl bg-red"
        >
          <img
            src="/monka.co.in/lifestyle-pour.jpeg"
            alt="Monka in the kitchen"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-4xl px-6 md:px-10 pb-16 md:pb-20 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl md:text-4xl tracking-tight"
          >
            The Purity Promise
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-lg leading-relaxed text-ink/70"
          >
            "Pure Ingredients. Authentic Sweetness." isn't just our tagline;
            it's our operational standard. Every batch of Monka is:
          </motion.p>
          <ul className="mt-6 space-y-2 text-left max-w-xl mx-auto">
            {PURITY_POINTS.map((point) => (
              <li key={point.label} className="text-ink/70">
                <span className="font-semibold text-ink">{point.label}</span>{" "}
                {point.detail}
              </li>
            ))}
          </ul>
        </div>

        <div className="mx-auto max-w-7xl px-6 md:px-10 pb-24 md:pb-32 grid md:grid-cols-3 gap-6">
          {PROMISE_CARDS.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="rounded-2xl bg-red text-cream p-10 text-center"
            >
              <h3 className="text-lg font-semibold tracking-wide uppercase">
                {card.title}
              </h3>
              <div className="mt-4 mb-4 h-px w-10 bg-cream/40 mx-auto" />
              <p className="text-sm text-cream/85 leading-relaxed">{card.detail}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
