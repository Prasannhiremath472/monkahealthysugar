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
        className="flex items-end justify-between mb-16"
      >
        <div>
          <span className="inline-flex items-center gap-3 text-xs font-semibold tracking-[0.3em] uppercase text-red mb-5">
            <span className="h-px w-10 bg-red" />
            The Range
          </span>
          <h2 className="font-hero text-4xl md:text-6xl tracking-tight">
            Shop Monka.
          </h2>
          <p className="mt-3 text-ink/60 text-lg">
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
