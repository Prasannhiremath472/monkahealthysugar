import { motion } from "framer-motion";
import Magnetic from "./Magnetic";

export default function ScrollFrameSequence() {
  return (
    <section id="top" className="relative bg-ink h-screen w-full overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        ref={(el) => { if (el) el.playbackRate = 1.5; }}
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/monka.co.in/final_while_falling_monk_fruit_not_t.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-r from-ink/15 via-transparent to-ink/15" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/0 via-transparent to-ink/10" />
      <div className="absolute inset-y-0 left-0 w-full md:w-2/3 bg-gradient-to-r from-ink/45 via-ink/10 to-transparent" />

      <div className="absolute top-24 md:top-28 inset-x-0 z-10 hidden md:flex items-center justify-between px-6 md:px-16 text-[11px] font-semibold tracking-[0.25em] uppercase text-cream/70">
        <span>Est. Sweeter / 2026</span>
        <span className="flex items-center gap-2">
          Zero Calorie <span className="text-red">✦</span> Zero Aftertaste <span className="text-red">✦</span> 1:1 Sugar Swap
        </span>
        <span>Vol. 01</span>
      </div>

      <a
        href="#story"
        aria-label="Scroll to discover"
        className="group absolute -bottom-8 right-2 sm:-bottom-4 sm:right-8 flex h-32 w-32 sm:h-40 sm:w-40 flex-col items-center justify-center gap-2 rounded-full bg-ink/90 backdrop-blur-md shadow-lg mb-4 mr-4"
      >
        <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-cream/80">
          Discover
        </span>
        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/40 text-cream transition-transform group-hover:translate-y-1">
          ↓
        </span>
      </a>

      <div className="absolute inset-y-0 left-0 flex flex-col justify-center max-w-2xl px-6 md:px-16 text-left z-10">
        <span className="text-xs font-bold tracking-[0.3em] uppercase text-cream mb-5 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
          From the Vine to Your Table
        </span>

        <h1 className="font-sans font-black uppercase leading-[0.85] tracking-tight text-cream text-[3.2rem] sm:text-7xl md:text-8xl lg:text-9xl">
          <span className="block drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)]">Sweet,</span>
          <span className="block italic text-red -my-1 md:-my-3 -rotate-2 origin-left drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)]">
            but make it
          </span>
          <span className="block drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)]">
            Lux<em className="not-italic text-red">u</em>ry.
          </span>
        </h1>

        <p className="mt-7 text-cream text-sm tracking-widest uppercase animate-pulse drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
          Scroll to discover ↓
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-5">
          <Magnetic
            as={motion.a}
            href="#product"
            className="inline-block rounded-full bg-red text-cream text-sm font-semibold px-9 py-4 shadow-lg shadow-red/30 hover:bg-maroon transition-colors"
          >
            Shop the Pouch
          </Magnetic>
          <a
            href="#story"
            className="group inline-flex items-center gap-1.5 text-sm font-semibold text-cream/80 hover:text-red transition-colors"
          >
            Why Monka?
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
