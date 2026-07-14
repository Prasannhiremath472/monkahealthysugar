import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BLOG_ENTRIES } from "./blogData";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

export default function Journal() {
  const entries = BLOG_ENTRIES.slice(0, 2);
  return (
    <section id="journal" className="bg-blush">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-14"
        >
          <h2 className="font-display text-3xl md:text-4xl tracking-tight">
            From the <em className="italic">journal.</em>
          </h2>
          <Link
            to="/blog"
            className="hidden sm:inline text-sm font-semibold underline underline-offset-4 decoration-ink/30 hover:decoration-red hover:text-red transition-colors"
          >
            View all posts
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {entries.map((entry, i) => (
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
              <Link to="/blog">
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
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
