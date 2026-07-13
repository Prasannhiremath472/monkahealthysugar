import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const PRODUCTS = [
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

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  }),
};

function ProductCard({ product, i }) {
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
      viewport={{ once: true, amount: 0.2 }}
      variants={cardVariants}
      className="group flex flex-col"
    >
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ perspective: 800 }}
        className="aspect-square overflow-hidden"
      >
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
      <div className="mt-5 flex flex-1 flex-col">
        <span className="inline-block text-[11px] font-semibold tracking-wide uppercase text-red mb-2">
          {product.tag}
        </span>
        <h3 className="font-display text-lg leading-snug">{product.title}</h3>
        <p className="text-sm text-ink/60 mt-1.5">{product.detail}</p>
        <div className="mt-3 flex flex-1 items-end justify-between">
          <span className="font-semibold">{product.price}</span>
          <a
            href="#shop"
            className="text-sm font-semibold underline underline-offset-4 decoration-ink/30 hover:decoration-red hover:text-red transition-colors"
          >
            Shop now
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default function Product() {
  return (
    <section id="product" className="relative mx-auto max-w-7xl px-6 md:px-10 pt-12 pb-24 md:pt-16 md:pb-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="flex items-end justify-between mb-12"
      >
        <div>
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-red">
            The Range
          </span>
          <h2 className="font-display text-3xl md:text-4xl tracking-tight mt-3">
            Shop Monka.
          </h2>
          <p className="mt-2 text-ink/60">
            Zero calorie, zero glycemic, guaranteed no aftertaste.
          </p>
        </div>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
        {PRODUCTS.map((product, i) => (
          <ProductCard key={product.title} product={product} i={i} />
        ))}
      </div>
    </section>
  );
}
