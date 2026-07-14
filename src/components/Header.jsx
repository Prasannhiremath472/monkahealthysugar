import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import Magnetic from "./Magnetic";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "About Us", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

export default function Header() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(!isHome);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!isHome) {
      setScrolled(true);
      return;
    }
    const onScroll = () => {
      const hero = document.getElementById("top");
      const heroHeight = hero ? hero.offsetHeight : window.innerHeight;
      setScrolled(window.scrollY > heroHeight - 80);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [isHome]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isDark = !scrolled && !menuOpen;

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div
        className={`transition-colors duration-300 ${
          scrolled ? "bg-cream/95 backdrop-blur border-b border-ink/10" : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img
              src="/monka.co.in/logo.png"
              alt="Monka — where sweeter living begins"
              className={`h-10 md:h-12 w-auto transition-all duration-300 ${
                isDark ? "drop-shadow-[0_2px_8px_rgba(255,255,255,0.9)]" : ""
              }`}
            />
          </Link>

          <nav
            className={`hidden md:flex items-center gap-1 text-sm font-medium rounded-full px-2 py-2 transition-all duration-300 ${
              isDark
                ? "bg-ink/35 backdrop-blur-md shadow-lg shadow-black/10 text-cream"
                : "text-ink/70"
            }`}
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={`rounded-full px-4 py-1.5 transition-colors ${
                  pathname === link.href
                    ? isDark
                      ? "bg-cream/20 text-cream"
                      : "text-red"
                    : ""
                } ${isDark ? "hover:bg-cream/15 hover:text-cream" : "hover:text-red"}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Magnetic
              as={motion(Link)}
              to="/shop"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="hidden sm:inline-block rounded-full bg-red text-cream text-sm font-semibold px-6 py-2.5 shadow-md shadow-red/20 hover:bg-maroon transition-colors"
            >
              Shop Now
            </Magnetic>

            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((v) => !v)}
              className={`md:hidden flex h-11 w-11 items-center justify-center rounded-full transition-colors ${
                isDark ? "bg-ink/35 text-cream" : "bg-ink/5 text-ink"
              }`}
            >
              <div className="relative h-4 w-5">
                <span
                  className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition-transform duration-300 ${
                    menuOpen ? "translate-y-[7px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-1/2 h-0.5 w-5 -translate-y-1/2 bg-current transition-opacity duration-300 ${
                    menuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 bottom-0 h-0.5 w-5 bg-current transition-transform duration-300 ${
                    menuOpen ? "-translate-y-[7px] -rotate-45" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden fixed inset-0 top-20 bg-cream z-40 flex flex-col"
          >
            <nav className="flex flex-col px-6 py-8 gap-1">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                >
                  <Link
                    to={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block py-4 text-2xl font-display border-b border-ink/10 ${
                      pathname === link.href ? "text-red" : "text-ink"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="mt-auto px-6 pb-10">
              <Link
                to="/shop"
                onClick={() => setMenuOpen(false)}
                className="block text-center rounded-full bg-red text-cream text-base font-semibold px-6 py-4 shadow-md shadow-red/20"
              >
                Shop Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
