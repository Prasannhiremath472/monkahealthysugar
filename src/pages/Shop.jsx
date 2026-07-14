import { motion } from "framer-motion";
import ProductCard, { PRODUCTS } from "../components/ProductCard";

export default function Shop() {
  return (
    <section className="mx-auto max-w-7xl px-6 md:px-10 pt-32 pb-24 md:pt-40 md:pb-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <span className="text-xs font-semibold tracking-[0.25em] uppercase text-red">
          The Range
        </span>
        <h1 className="font-display text-4xl md:text-5xl tracking-tight mt-3">
          Shop Monka.
        </h1>
        <p className="mt-2 text-ink/60">
          Zero calorie, zero glycemic, guaranteed no aftertaste.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
        {PRODUCTS.map((product, i) => (
          <ProductCard key={product.title} product={product} i={i} />
        ))}
      </div>
    </section>
  );
}
