"use client";

import Image from "next/image";

const BUY_LINK = "#";

const ingredients = [
  {
    name: "Carrot Juice",
    image: "/Carrots-painted.png",
    description:
      "Fresh organic cold pressed carrots bring a natural sweetness and silky body — no fillers, no thickeners.",
  },
  {
    name: "Agave",
    image: "/Agave-painted.png",
    description:
      "A slow drizzle of organic agave rounds out the heat without weighing the sauce down.",
  },
  {
    name: "Apple Cider Vinegar",
    image: "/Apple-Cider-painted.png",
    description:
      "Bright, raw, unfiltered acidity that lifts every bite and keeps things lively.",
  },
  {
    name: "Pink Salt",
    image: "/Pink-Salt-painted.png",
    description:
      "Mineral-rich Himalayan pink salt to anchor the flavor with a clean finish.",
  },
  {
    name: "Habanero",
    image: "/Habaneros-painted.png",
    description:
      "Sun-ripened habaneros for a glowing, fruit-forward burn — bold but never punishing.",
  },
];

const pricingTiers = [
  {
    name: "The Taster",
    bottles: "1 Bottle",
    price: "$20",
    perUnit: null,
    popular: false,
    paymentLink: "https://buy.stripe.com/test_6oUeVcgGGaGZ21r67n7AI00",
  },
  {
    name: "The Heat-Seeker",
    bottles: "3 Bottles",
    price: "$40",
    perUnit: "$13.33/ea",
    popular: true,
    paymentLink: "https://buy.stripe.com/test_8x23cu7669CV7lLbrH7AI01",
  },
  {
    name: "The Stockpile",
    bottles: "6 Bottles",
    price: "$75",
    perUnit: "$12.50/ea",
    popular: false,
    paymentLink: "https://buy.stripe.com/test_dRmbJ03TU8yR35v1R77AI02",
  },
];

/* Shared button classes — solid orange with heat glow */
const BTN =
  "font-sans font-bold tracking-wider rounded-full bg-[#ff6915] text-white shadow-[0_0_20px_rgba(255,105,21,0.6)] transition hover:bg-[#ff853b] hover:shadow-[0_0_25px_rgba(255,105,21,0.8)]";

/* Display serif font (Yeseva One via CSS var set in layout.tsx) */
const DISPLAY_FONT: React.CSSProperties = {
  fontFamily: "var(--font-display), serif",
};

export default function Page() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#390a68" }}>
      {/* ───────── HEADER / NAVBAR ───────── */}
      <header
        className="sticky top-0 z-50 flex flex-col items-center gap-6 p-6 backdrop-blur-md md:h-32 md:flex-row md:justify-between md:px-12"
        style={{ backgroundColor: "rgba(57,10,104,0.85)" }}
      >
        <a href="#ingredients" className={`${BTN} order-2 inline-block px-5 py-2 text-xs uppercase md:order-1`}>
          Ingredients
        </a>

        <a href="#top" className="order-1 shrink-0 md:order-2">
          <Image
            src="/Karuna-Website-Logo-Horizontal.png"
            alt="Karuna Hot Sauce"
            width={240}
            height={80}
            className="h-24 w-auto object-contain drop-shadow-lg md:h-32"
            priority
          />
        </a>

        <a href={BUY_LINK} className={`${BTN} order-3 inline-block px-5 py-2 text-xs uppercase md:order-3`}>
          Buy a Bottle
        </a>
      </header>

      {/* ───────── HERO SECTION ───────── */}
      <section id="top" className="relative overflow-hidden -mt-px">
        <div className="relative w-full" style={{ minHeight: "80vh" }}>
          <Image
            src="/Karuna website hero image.png"
            alt="Karuna hot sauce bottles"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />

          {/* Top gradient overlay */}
          <div
            className="absolute inset-x-0 top-0 z-10 h-48"
            style={{
              background: "linear-gradient(to bottom, #390a68, transparent)",
            }}
          />

          {/* Bottom gradient overlay */}
          <div
            className="absolute inset-x-0 bottom-0 z-10 h-64"
            style={{
              background: "linear-gradient(to top, #390a68, transparent)",
            }}
          />
        </div>

        {/* Hero text — kept at pt-[85px] as requested */}
        <div className="relative z-20 -mt-24 pb-16 pt-[85px] text-center">
          <p
            className="mb-3 text-sm font-bold uppercase tracking-[0.35em]"
            style={{ color: "#fec711" }}
          >
            Small Batch · Big Heat
          </p>
          <h1
            className="mx-auto max-w-3xl text-5xl font-black leading-tight text-white sm:text-7xl"
            style={DISPLAY_FONT}
          >
            Hot Sauce with{" "}
            <span style={{ color: "#fec711" }}>Soul.</span>
          </h1>
          <div className="mt-10 flex justify-center">
            <a href={BUY_LINK} className={`${BTN} inline-block px-10 py-4 text-base uppercase`}>
              Buy a Bottle
            </a>
          </div>
        </div>
      </section>

      {/* ───────── INGREDIENTS SECTION ───────── */}
      <section id="ingredients" className="py-24" style={{ backgroundColor: "#390a68" }}>
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <h2
              className="text-4xl font-black sm:text-6xl"
              style={{ ...DISPLAY_FONT, color: "#fec711" }}
            >
              Five Ingredients.
            </h2>
            <h3
              className="mt-5 text-3xl font-black sm:text-5xl"
              style={{ ...DISPLAY_FONT, color: "#ff6915" }}
            >
              Zero Shortcuts.
            </h3>
          </div>

          {/* Ingredient cards — tighter spacing, max-w-fit mx-auto, strict row layout */}
          <ul className="mx-auto mt-16 max-w-fit space-y-4">
            {ingredients.map((item) => (
              <li
                key={item.name}
                className="flex flex-row items-center gap-6 sm:gap-8 rounded-2xl p-4 sm:p-5"
              >
                <div
                  className="flex h-24 w-24 sm:h-28 sm:w-28 shrink-0 items-center justify-center rounded-xl"
                  style={{ backgroundColor: "#4a1380" }}
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={100}
                    height={100}
                    className="h-20 w-20 sm:h-24 sm:w-24 object-contain"
                  />
                </div>

                <div className="text-left">
                  <h4
                    className="text-2xl font-bold sm:text-3xl"
                    style={{ ...DISPLAY_FONT, color: "#ff6915" }}
                  >
                    {item.name}
                  </h4>
                  <p
                    className="mt-2 max-w-[350px] text-base leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.85)" }}
                  >
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ───────── PRICING SECTION ───────── */}
      <section id="pricing" className="py-24" style={{ backgroundColor: "#390a68" }}>
        <div className="mx-auto max-w-5xl px-6">
          <h2
            className="text-center text-4xl font-black sm:text-6xl"
            style={{ ...DISPLAY_FONT, color: "#fec711" }}
          >
            Stock Up &amp; Save
          </h2>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative flex flex-col items-center rounded-2xl border p-8 text-center ${tier.popular
                    ? "border-[#fec711]/40 scale-[1.03]"
                    : "border-white/10"
                  }`}
                style={{ backgroundColor: "#4a1380" }}
              >
                {/* Popular badge */}
                {tier.popular && (
                  <div
                    className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full px-5 py-1 text-xs font-bold uppercase tracking-widest"
                    style={{ backgroundColor: "#fec711", color: "#390a68" }}
                  >
                    Most Popular
                  </div>
                )}

                {/* Tier name */}
                <h3
                  className="mt-2 text-2xl font-bold"
                  style={{ ...DISPLAY_FONT, color: "#fec711" }}
                >
                  {tier.name}
                </h3>

                {/* Bottles */}
                <p
                  className="mt-3 text-sm font-medium uppercase tracking-widest"
                  style={{ color: "rgba(255,255,255,0.6)" }}
                >
                  {tier.bottles}
                </p>

                {/* Price */}
                <p className="mt-4 text-5xl font-black text-white">
                  {tier.price}
                </p>

                {/* Per-unit price */}
                {tier.perUnit && (
                  <p
                    className="mt-1 text-sm font-medium"
                    style={{ color: "#ff6915" }}
                  >
                    {tier.perUnit}
                  </p>
                )}

                {/* CTA */}
                <a
                  href={tier.paymentLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${BTN} mt-8 w-full px-6 py-3 text-sm uppercase text-center block`}
                >
                  Select Pack
                </a>
              </div>
            ))}
          </div>

          {/* Full Case Anchor */}
          <div className="mt-16 text-center">
            <p
              className="mb-3 text-sm font-bold uppercase tracking-widest"
              style={{ color: "#fec711" }}
            >
              BEST VALUE ($12/bottle)
            </p>
            <a
              href="https://buy.stripe.com/test_7sY4gyfCC16paxX9jz7AI03"
              target="_blank"
              rel="noopener noreferrer"
              className={`${BTN} inline-block px-10 py-5 text-lg uppercase`}
            >
              Buy a Full Case (12 Bottles) for $144
            </a>
          </div>
        </div>
      </section>

      {/* ───────── CONTACT FORM SECTION ───────── */}
      <section id="contact" className="py-24 bg-[#390a68] flex justify-center px-6">
        <div className="w-full max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-normal text-[#ff6915] font-[var(--font-display)] mb-4">
              Questions or Feedback?
            </h2>
            <p className="text-white/80 text-xl font-light">
              Drop us a line — we read every message.
            </p>
          </div>

          <form
            action="https://formspree.io/f/xwvynrkq"
            method="POST"
            className="space-y-8"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-bold text-white/60 uppercase tracking-widest mb-3">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                className="w-full bg-[#4a1380] border-none rounded-lg p-5 text-white placeholder-white/30 focus:ring-2 focus:ring-[#ff6915] transition-all"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-bold text-white/60 uppercase tracking-widest mb-3">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="you@example.com"
                className="w-full bg-[#4a1380] border-none rounded-lg p-5 text-white placeholder-white/30 focus:ring-2 focus:ring-[#ff6915] transition-all"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-bold text-white/60 uppercase tracking-widest mb-3">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                placeholder="Tell us what's on your mind..."
                className="w-full bg-[#4a1380] border-none rounded-lg p-5 text-white placeholder-white/30 focus:ring-2 focus:ring-[#ff6915] transition-all resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#ff6915] text-white font-sans font-bold py-5 rounded-full text-lg uppercase tracking-widest shadow-[0_0_20px_rgba(255,105,21,0.6)] hover:shadow-[0_0_30px_rgba(255,105,21,0.8)] hover:bg-[#ff853b] transition-all active:scale-[0.98]"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* ───────── FOOTER ───────── */}
      <footer style={{ backgroundColor: "#2a074c" }}>
        <div className="mx-auto max-w-4xl px-6 py-16 text-center">
          {/* Footer logo */}
          <div className="flex justify-center">
            <Image
              src="/Karuna-Website-Logo-Horizontal.png"
              alt="Karuna Hot Sauce"
              width={160}
              height={53}
              className="object-contain opacity-80"
            />
          </div>

          {/* Footer nav links */}
          <nav className="mt-8 flex flex-wrap items-center justify-center gap-8">
            {["Ingredients", "Buy a Bottle"].map((link) => (
              <a
                key={link}
                href={link === "Ingredients" ? "#ingredients" : BUY_LINK}
                className="font-sans text-sm font-medium uppercase tracking-widest text-white/70 transition hover:text-white"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Divider */}
          <div
            className="mx-auto my-8 h-px w-48"
            style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
          />

          {/* Copyright */}
          <p
            className="font-sans text-xs tracking-wide"
            style={{ color: "rgba(255,255,255,0.35)" }}
          >
            © {new Date().getFullYear()} Karuna Hot Sauce. Made with heat &amp;
            care.
          </p>
        </div>
      </footer>
    </div>
  );
}
