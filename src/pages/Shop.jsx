import { motion } from "framer-motion";
import ProductCard, { PRODUCTS } from "../components/ProductCard";

export default function Shop() {
  return (
    <section className="mx-auto max-w-7xl px-6 md:px-10 pt-32 pb-24 md:pt-40 md:pb-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <span className="inline-flex items-center gap-3 text-xs font-semibold tracking-[0.3em] uppercase text-red mb-5">
          <span className="h-px w-10 bg-red" />
          The Range
        </span>
        <h1 className="font-sans font-black uppercase leading-[0.88] tracking-tight text-5xl md:text-7xl">
          Shop Monka.
        </h1>
        <p className="mt-4 text-ink/60 text-lg">
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
