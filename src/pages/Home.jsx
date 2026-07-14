import ScrollFrameSequence from "../components/ScrollFrameSequence";
import TrustStrip from "../components/TrustStrip";
import Philosophy from "../components/Philosophy";
import Provenance from "../components/Provenance";
import Reels from "../components/Reels";
import LifestyleGallery from "../components/LifestyleGallery";
import Product from "../components/Product";
import RecipeConverter from "../components/RecipeConverter";
import Comparison from "../components/Comparison";
import SavingsCalculator from "../components/SavingsCalculator";
import Testimonials from "../components/Testimonials";
import Journal from "../components/Journal";

export default function Home() {
  return (
    <>
      <ScrollFrameSequence />
      <TrustStrip />
      <Philosophy />
      <Provenance />
      <Reels />
      <LifestyleGallery />
      <Product />
      <RecipeConverter />
      <Comparison />
      <SavingsCalculator />
      <Testimonials />
      <Journal />
    </>
  );
}
