import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isTouch, setIsTouch] = useState(true);
  const [hovering, setHovering] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 500, damping: 40, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 500, damping: 40, mass: 0.5 });

  useEffect(() => {
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    const hasTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    setIsTouch(coarse || hasTouch);

    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = e.target.closest("a, button, [data-cursor-hover]");
      setHovering(Boolean(target));
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isTouch) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[100] mix-blend-difference"
      style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
    >
      <motion.div
        animate={{
          width: hovering ? 56 : 16,
          height: hovering ? 56 : 16,
          opacity: 1,
        }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-full bg-cream"
      />
    </motion.div>
  );
}
