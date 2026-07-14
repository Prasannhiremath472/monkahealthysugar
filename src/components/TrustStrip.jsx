import { motion } from "framer-motion";

const ITEMS = [
  "No Insulin Spikes",
  "No Chemicals",
  "No Artificial Sweeteners",
  "Non-GMO",
  "Zero Calories",
  "1:1 Sugar Replacement",
];

export default function TrustStrip() {
  const loop = [...ITEMS, ...ITEMS];
  return (
    <div className="relative bg-red text-cream overflow-hidden border-y-2 border-ink/10">
      <motion.div
        className="flex gap-8 whitespace-nowrap py-4 px-6"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 26, ease: "linear", repeat: Infinity }}
      >
        {[...loop, ...loop].map((item, i) => (
          <span key={i} className="flex items-center gap-8 shrink-0">
            <span className="font-sans font-black uppercase tracking-tight text-2xl md:text-3xl italic">
              {item}
            </span>
            <span className="text-cream/70 text-xl">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
