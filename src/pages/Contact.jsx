import { useState } from "react";
import { motion } from "framer-motion";

const FAQS = [
  {
    q: "Where do you ship?",
    a: "We ship across India!",
  },
  {
    q: "Is Monka safe for children?",
    a: "Yes — Monka is made from 100% natural monk fruit and allulose, with no artificial sweeteners or chemicals, making it safe for the whole family.",
  },
  {
    q: "How do I track my order?",
    a: "Once your order ships, you'll receive a tracking link by email so you can follow it every step of the way.",
  },
];

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-ink/10 py-5">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between text-left"
      >
        <span className="font-medium">{q}</span>
        <span className="text-xl leading-none">{open ? "–" : "+"}</span>
      </button>
      {open && <p className="mt-3 text-sm text-ink/60">{a}</p>}
    </div>
  );
}

export default function Contact() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 md:px-10 pt-32 pb-16 md:pt-40 md:pb-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl md:text-6xl tracking-tight"
        >
          Contact Us
        </motion.h1>
      </section>

      <section className="mx-auto max-w-7xl px-6 md:px-10 pb-20 md:pb-28 grid md:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-2xl md:text-3xl tracking-tight mb-8">
            Visit Our Store
          </h2>

          <div className="space-y-6 text-sm">
            <div>
              <p className="font-semibold">Address:</p>
              <p className="text-ink/60 mt-1">
                Plot No. 28,29, B-ward, Subhash Road,
                <br />
                Kolhapur, Maharashtra 416012, India
              </p>
            </div>
            <div>
              <p className="font-semibold">Email:</p>
              <ul className="text-ink/60 mt-1 space-y-1">
                <li>General Inquiries: customercare@monka.co.in</li>
                <li>Order Support: orders@monka.co.in</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold">Phone:</p>
              <p className="text-ink/60 mt-1">+91 826 104 4799</p>
            </div>
            <div>
              <p className="font-semibold">Opening Hours:</p>
              <p className="text-ink/60 mt-1">
                Mon – Sat: 9am to 7pm
                <br />
                Sun: Closed
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-2xl md:text-3xl tracking-tight mb-4">
            Get In Touch
          </h2>
          <p className="text-ink/60 mb-8">
            Have a question about our products or need help with an order?
            We're here to help you sweeten your journey.
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="rounded-xl border border-ink/15 bg-cream px-4 py-3 text-sm focus:outline-none focus:border-red transition-colors"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="rounded-xl border border-ink/15 bg-cream px-4 py-3 text-sm focus:outline-none focus:border-red transition-colors"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="tel"
                placeholder="Mobile Number"
                className="rounded-xl border border-ink/15 bg-cream px-4 py-3 text-sm focus:outline-none focus:border-red transition-colors"
              />
              <select className="rounded-xl border border-ink/15 bg-cream px-4 py-3 text-sm focus:outline-none focus:border-red transition-colors">
                <option>Order Inquiry</option>
                <option>Product Question</option>
                <option>Wholesale &amp; Partnerships</option>
                <option>Other</option>
              </select>
            </div>
            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full rounded-xl border border-ink/15 bg-cream px-4 py-3 text-sm focus:outline-none focus:border-red transition-colors"
            />
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-red text-cream text-sm font-semibold px-8 py-3.5 hover:bg-maroon transition-colors"
            >
              Submit
              <span>→</span>
            </button>
          </form>
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-6 md:px-10 pb-24 md:pb-32 grid md:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-2xl md:text-3xl tracking-tight mb-4">
            Wholesale &amp; Partnerships
          </h2>
          <p className="text-ink/60 leading-relaxed">
            Are you a gym owner, a dietitian, or a cafe owner looking to
            switch to natural sweeteners? We offer special bulk pricing and
            partnership opportunities for businesses committed to health.
          </p>
          <p className="mt-4 text-sm">
            Email:{" "}
            <span className="font-semibold text-red">
              partnerships@monka.co.in
            </span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="font-display text-2xl md:text-3xl tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <div>
            {FAQS.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
}
