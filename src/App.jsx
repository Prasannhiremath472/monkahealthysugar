import { motion } from "framer-motion";
import CustomCursor from "./components/CustomCursor";
import Header from "./components/Header";
import ScrollFrameSequence from "./components/ScrollFrameSequence";
import TrustStrip from "./components/TrustStrip";
import Philosophy from "./components/Philosophy";
import Provenance from "./components/Provenance";
import LifestyleGallery from "./components/LifestyleGallery";
import Product from "./components/Product";
import RecipeConverter from "./components/RecipeConverter";
import Comparison from "./components/Comparison";
import SavingsCalculator from "./components/SavingsCalculator";
import Testimonials from "./components/Testimonials";
import Journal from "./components/Journal";
import Footer from "./components/Footer";
import useLenis from "./lib/useLenis";

function App() {
  useLenis();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="min-h-screen bg-cream text-ink"
    >
      <CustomCursor />
      <div className="grain-overlay" aria-hidden />
      <Header />
      <main>
        <ScrollFrameSequence />
        <TrustStrip />
        <Philosophy />
        <Provenance />
        <LifestyleGallery />
        <Product />
        <RecipeConverter />
        <Comparison />
        <SavingsCalculator />
        <Testimonials />
        <Journal />
      </main>
      <Footer />
    </motion.div>
  );
}

export default App;
