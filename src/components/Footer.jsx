export default function Footer() {
  return (
    <footer id="contact" className="bg-ink text-cream">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-16">
        <div className="flex items-center gap-3 mb-10">
          <span className="font-display text-2xl">
            monka<sup className="text-xs align-super">™</sup>
          </span>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-cream/70">
              <li><a href="#top" className="hover:text-red transition-colors">Home</a></li>
              <li><a href="#story" className="hover:text-red transition-colors">About Us</a></li>
              <li><a href="#product" className="hover:text-red transition-colors">All Products</a></li>
              <li><a href="#journal" className="hover:text-red transition-colors">Blog</a></li>
              <li><a href="#contact" className="hover:text-red transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Policies</h4>
            <ul className="space-y-2 text-sm text-cream/70">
              <li>Privacy Policy</li>
              <li>Refund & Return Policy</li>
              <li>Shipping Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-sm text-cream/70">
              Plot No. 28,29, B-ward, Subhash Road,
              <br />
              Kolhapur, Maharashtra 416012, India
            </p>
            <p className="text-sm text-cream/70 mt-3">+91 826 104 4799</p>
            <p className="text-sm text-cream/70">customercare@monka.co.in</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Certifications</h4>
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
          <p>Manufactured & Marketed by Winmark Wellness</p>
        </div>
      </div>
    </footer>
  );
}
