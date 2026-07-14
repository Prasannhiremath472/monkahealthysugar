import { motion } from "framer-motion";
import { BLOG_ENTRIES } from "../components/blogData";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

export default function Blog() {
  return (
    <section className="mx-auto max-w-7xl px-6 md:px-10 pt-32 pb-24 md:pt-40 md:pb-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <span className="inline-flex items-center gap-3 text-xs font-semibold tracking-[0.3em] uppercase text-red mb-5">
          <span className="h-px w-10 bg-red" />
          The Journal
        </span>
        <h1 className="font-sans font-black uppercase leading-[0.88] tracking-tight text-5xl md:text-7xl">
          Our Blog.
        </h1>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-x-8 gap-y-14">
        {BLOG_ENTRIES.map((entry, i) => (
          <motion.article
            key={entry.slug}
            custom={i}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
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
            <h2 className="mt-3 font-display text-2xl leading-snug group-hover:text-red transition-colors">
              {entry.title}
            </h2>
            <p className="mt-2 text-sm text-ink/60 leading-relaxed">{entry.excerpt}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
