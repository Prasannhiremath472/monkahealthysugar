import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative bg-ink text-cream overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-16 md:py-20">
        <div className="flex items-end justify-between mb-14 gap-6">
          <span className="font-sans font-black uppercase italic text-5xl md:text-7xl tracking-tight">
            monka<sup className="text-sm not-italic align-super">™</sup>
          </span>
          <a
            href="#top"
            className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-cream/70 hover:text-red transition-colors mb-2"
          >
            Back to top
            <span>↑</span>
          </a>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 border-t border-cream/10 pt-12">
          <div>
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-red mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-cream/70">
              <li><Link to="/" className="hover:text-red transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-red transition-colors">About Us</Link></li>
              <li><Link to="/shop" className="hover:text-red transition-colors">All Products</Link></li>
              <li><Link to="/blog" className="hover:text-red transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-red transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-red mb-4">Policies</h4>
            <ul className="space-y-2 text-sm text-cream/70">
              <li>Privacy Policy</li>
              <li>Refund & Return Policy</li>
              <li>Shipping Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-red mb-4">Contact</h4>
            <p className="text-sm text-cream/70">
              Plot No. 28,29, B-ward, Subhash Road,
              <br />
              Kolhapur, Maharashtra 416012, India
            </p>
            <p className="text-sm text-cream/70 mt-3">+91 826 104 4799</p>
            <p className="text-sm text-cream/70">customercare@monka.co.in</p>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-red mb-4">Certifications</h4>
            <div className="flex flex-wrap gap-2 text-[11px] font-semibold">
              <span className="border border-cream/20 rounded px-2 py-1">Non-GMO</span>
              <span className="border border-cream/20 rounded px-2 py-1">GMP Certified</span>
              <span className="border border-cream/20 rounded px-2 py-1">FSSAI</span>
            </div>
            <p className="text-xs text-cream/50 mt-3">
              FSSAI Lic. No.: 21524042001385
            </p>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-cream/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-cream/50">
          <p>© 2026 MONKA | All Rights Reserved</p>
          <p>Developed by Infinity Technology Hub</p>
        </div>
      </div>
    </footer>
  );
}
