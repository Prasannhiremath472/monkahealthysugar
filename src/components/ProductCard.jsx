import { motion, useMotionValue, useSpring } from "framer-motion";

export const PRODUCTS = [
  {
    tag: "Best Seller",
    title: "Monk Fruit O'Calorie Sweetener",
    detail: "400g pouch · Granulated 1:1 sugar replacer",
    price: "₹699",
    img: "/monka.co.in/product-pouch-clean.png",
    imgScale: 1,
  },
  {
    tag: "Powdered",
    title: "Allulose Powdered Sweetener",
    detail: "400g · Fine texture for baking & desserts",
    price: "₹749",
    img: "/monka.co.in/Gemini_Generated_Image_io5nsdio5nsdio5n.png",
    imgScale: 1.35,
  },
  {
    tag: "Gift Box",
    title: "Monk Fruit O'Calorie Box",
    detail: "400g box · Rebalanced flavor, made with monk fruit",
    price: "₹699",
    img: "/monka.co.in/monkwhitebox.png",
    imgScale: 1.55,
  },
  {
    tag: "Granulated",
    title: "Monk Fruit Sugar Replacer",
    detail: "400g pouch · 1:1 substitute for baking & desserts",
    price: "₹699",
    img: "/monka.co.in/monkawhitepouch.png",
    imgScale: 1.4,
  },
];

export const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function ProductCard({ product, i }) {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springRotateX = useSpring(rotateX, { stiffness: 200, damping: 20 });
  const springRotateY = useSpring(rotateY, { stiffness: 200, damping: 20 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rotateY.set(px * 14);
    rotateX.set(py * -14);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.article
      custom={i}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
      variants={cardVariants}
      className="group flex flex-col"
    >
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ perspective: 800 }}
        className="relative aspect-square overflow-hidden rounded-3xl bg-blush"
      >
        <span className="absolute top-4 left-4 z-10 text-[11px] font-semibold tracking-[0.15em] uppercase text-red bg-cream/90 rounded-full px-3 py-1.5 shadow-sm">
          {product.tag}
        </span>
        <motion.img
          style={{
            rotateX: springRotateX,
            rotateY: springRotateY,
            scale: product.imgScale ?? 1,
          }}
          whileHover={{ scale: (product.imgScale ?? 1) * 1.06 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          src={product.img}
          alt={product.title}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="mt-6 flex flex-1 flex-col">
        <h3 className="font-display text-lg leading-snug">{product.title}</h3>
        <p className="text-sm text-ink/60 mt-1.5">{product.detail}</p>
        <div className="mt-4 flex flex-1 items-end justify-between border-t border-ink/10 pt-4">
          <span className="font-hero italic text-xl">{product.price}</span>
          <a
            href="#shop"
            className="group/cta inline-flex items-center gap-1.5 text-sm font-semibold text-ink hover:text-red transition-colors"
          >
            Shop now
            <span className="transition-transform group-hover/cta:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </motion.article>
  );
}
