import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";

const REVIEWS = [
  {
    quote:
      "Being diabetic, I've struggled to find a sweetener that doesn't taste chemical. Monka feels like a miracle — it tastes like real sugar and doesn't spike my glucose levels.",
    name: "Ananya Sharma",
    verified: true,
  },
  {
    quote:
      "It truly performs like sugar. It browns and caramelizes beautifully in my cakes. My clients can't even tell they are eating sugar-free.",
    name: "Chef Rohan Mehra",
    verified: true,
  },
  {
    quote:
      "Sticking to a Keto diet is much easier when your coffee still tastes great. Zero net carbs and zero calories, but 100% sweetness.",
    name: "Vikram Singh",
    verified: true,
  },
  {
    quote:
      "They dissolve instantly in cold drinks and hot coffee. No mess, no bitter aftertaste, just pure sweetness wherever I go.",
    name: "Priya Iyer",
    verified: false,
  },
  {
    quote:
      "Monka is the first natural sweetener I've found that is actually clean. My family didn't even notice I switched the sugar.",
    name: "David G",
    verified: true,
  },
  {
    quote:
      "The powdered version is so fine! I used it for a sugar-free chocolate ganache and it was incredibly smooth. No graininess at all.",
    name: "Sneha Patil",
    verified: false,
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 text-red">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="w-4 h-4 fill-current">
          <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.2-5.4 3.2 1.3-6L1.3 7.7l6.1-.6z" />
        </svg>
      ))}
    </div>
  );
}

function Avatar({ name }) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
  return (
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red text-cream text-sm font-semibold">
      {initials}
    </div>
  );
}

function ReviewCard({ r }) {
  return (
    <div className="w-[340px] md:w-[380px] shrink-0 bg-cream rounded-2xl p-7 shadow-[0_8px_30px_-14px_rgba(32,19,18,0.15)] border border-ink/5">
      <Stars />
      <p className="mt-4 text-sm text-ink/80 leading-relaxed">"{r.quote}"</p>
      <div className="mt-5 flex items-center gap-3">
        <Avatar name={r.name} />
        <div>
          <p className="text-sm font-semibold">{r.name}</p>
          {r.verified && (
            <p className="text-[11px] font-medium text-red">✓ Verified Buyer</p>
          )}
        </div>
      </div>
    </div>
  );
}

const TRACK_WIDTH_PERCENT = -50;
const DURATION = 40;

export default function Testimonials() {
  const loop = [...REVIEWS, ...REVIEWS];
  const controls = useAnimationControls();

  useEffect(() => {
    controls.start({
      x: [`0%`, `${TRACK_WIDTH_PERCENT}%`],
      transition: { duration: DURATION, ease: "linear", repeat: Infinity },
    });
  }, [controls]);

  return (
    <section className="py-24 md:py-32 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 px-6"
      >
        <div className="flex justify-center">
          <Stars />
        </div>
        <h2 className="font-hero text-4xl md:text-6xl tracking-tight mt-5">
          Join 3,000+ customers <em className="italic text-red">living sweeter.</em>
        </h2>
      </motion.div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-cream to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-cream to-transparent z-10" />

        <div
          className="overflow-hidden"
          onMouseEnter={() => controls.stop()}
          onMouseLeave={() =>
            controls.start({
              x: [`0%`, `${TRACK_WIDTH_PERCENT}%`],
              transition: { duration: DURATION, ease: "linear", repeat: Infinity },
            })
          }
        >
          <motion.div className="flex gap-6 w-max" animate={controls}>
            {loop.map((r, i) => (
              <ReviewCard key={i} r={r} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
