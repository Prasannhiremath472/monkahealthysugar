import { motion } from "framer-motion";
import ProductCard, { PRODUCTS } from "./ProductCard";

export default function Product() {
  return (
    <section id="product" className="relative mx-auto max-w-7xl px-6 md:px-10 pt-12 pb-24 md:pt-16 md:pb-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
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
