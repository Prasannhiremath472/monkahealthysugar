import { motion } from "framer-motion";

const ENTRIES = [
  {
    tag: "Wellness",
    title: "Why Modern Sweetness Needs a Reset",
    date: "22 July 2025",
    img: "/monka.co.in/blog-1.jpg",
  },
  {
    tag: "Keto 101",
    title: "5 Sneaky Places Sugar Hides in Your Diet (and How to Swap It)",
    date: "22 July 2025",
    img: "/monka.co.in/blog-2.jpg",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

export default function Journal() {
  return (
    <section id="journal" className="bg-blush">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-14"
        >
          <h2 className="font-display text-3xl md:text-4xl tracking-tight">
            From the <em className="italic">journal.</em>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {ENTRIES.map((entry, i) => (
            <motion.article
              key={entry.title}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[16/10] rounded-3xl overflow-hidden mb-5 shadow-[0_8px_30px_-14px_rgba(32,19,18,0.2)] group-hover:shadow-[0_20px_40px_-16px_rgba(211,32,39,0.3)] transition-shadow duration-500">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  src={entry.img}
                  alt={entry.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-red">
                {entry.tag} · {entry.date}
              </span>
              <h3 className="mt-2 font-display text-xl leading-snug group-hover:text-red transition-colors">
                {entry.title}
              </h3>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
