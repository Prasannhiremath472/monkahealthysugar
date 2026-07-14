import { motion } from "framer-motion";

export default function Manifesto() {
  return (
    <section className="relative bg-cream overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-20 md:py-28 grid md:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ rotate: 0 }}
          className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-[0_30px_60px_-20px_rgba(32,19,18,0.35)] rotate-2"
        >
          <img
            src="/monka.co.in/lifestyle-cafe.jpeg"
            alt="Monka pouches on a café counter"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-5 right-5 rotate-3 rounded-full bg-red text-cream text-xs font-bold tracking-widest uppercase px-4 py-2 shadow-lg">
            SS / 26 Drop
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.span
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.3em] uppercase text-red mb-6"
          >
            <span className="text-sm">✦</span> The Manifesto
          </motion.span>

          <motion.h2
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
            className="font-sans font-black uppercase leading-[0.86] tracking-tight text-4xl sm:text-6xl md:text-7xl"
          >
            <span className="block">We said no</span>
            <span className="block">
              to{" "}
              <span
                className="italic"
                style={{ WebkitTextStroke: "2px var(--color-ink)", color: "transparent" }}
              >
                boring
              </span>
            </span>
            <span className="block">wellness.</span>
          </motion.h2>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
            className="mt-8 text-lg leading-relaxed text-ink/70 max-w-md"
          >
            Wellness shouldn't whisper. It should walk into the room like it
            owns it. Monka is monk fruit and allulose reimagined for people
            who refuse to choose between feeling great and eating well.
          </motion.p>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
            className="font-script text-4xl md:text-5xl text-red mt-8 -rotate-2"
          >
            sweeter living, baby.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
