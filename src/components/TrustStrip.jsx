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
    <div className="relative bg-ink text-cream overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-ink to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-ink to-transparent z-10" />
      <motion.div
        className="flex gap-10 whitespace-nowrap py-3.5 px-6 text-sm font-medium"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 22, ease: "linear", repeat: Infinity }}
      >
        {[...loop, ...loop].map((item, i) => (
          <span key={i} className="flex items-center gap-2 shrink-0">
            <svg viewBox="0 0 20 20" className="w-4 h-4 fill-red">
              <path d="M7.5 13.5 4 10l-1.5 1.5L7.5 16.5 17 7l-1.5-1.5z" />
            </svg>
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
