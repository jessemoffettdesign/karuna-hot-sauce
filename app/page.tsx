export default function LandingPage() {
  const products = [
    { name: "Single Bottle", price: "$20", link: "https://buy.stripe.com/test_6oUeVcgGGaGZ21r67n7AI00" },
    { name: "3-Bottle Pack", price: "$40", link: "https://buy.stripe.com/test_8x23cu7669CV7lLbrH7AI01" },
    { name: "6-Bottle Half Case", price: "$75", link: "https://buy.stripe.com/test_dRmbJ03TU8yR35v1R77AI02" },
    { name: "12-Bottle Full Case", price: "$144", link: "https://buy.stripe.com/test_7sY4gyfCC16paxX9jz7AI03" },
  ];

  const ingredients = [
    { name: "Carrot Juice", img: "/Carrots-painted.png", desc: "Fresh organic cold pressed carrots bring a natural sweetness and silky body — no fillers, no thickeners." },
    { name: "Agave", img: "/Agave-painted.png", desc: "A slow drizzle of organic agave rounds out the heat without weighing the sauce down." },
    { name: "Apple Cider Vinegar", img: "/Apple-Cider-painted.png", desc: "Bright, raw, unfiltered acidity that lifts every bite and keeps things lively." },
    { name: "Pink Salt", img: "/Pink-Salt-painted.png", desc: "Mineral-rich salt to anchor the flavor with a clean finish." },
    { name: "Habanero", img: "/Habaneros-painted.png", desc: "Sun-ripened habaneros for a glowing, fruit-forward burn." },
  ];

  return (
    <main className="min-h-screen bg-[#3C0862] text-white selection:bg-[#F28C28]/30 font-sans">
      
      {/* Starry Night Hero Area */}
      <div className="relative overflow-hidden bg-[url('/Starry-Night-Texture.jpg')] bg-cover bg-center pb-24">
        <div className="absolute inset-0 bg-gradient-to-b from-[#3C0862]/40 via-[#3C0862]/80 to-[#3C0862] backdrop-blur-[1px]" />
        
        {/* Navigation */}
        <header className="relative flex w-full items-center justify-between p-6 md:px-12 z-10">
          <a href="#ingredients" className="rounded-full bg-white/10 px-6 py-2 text-xs font-bold uppercase tracking-widest backdrop-blur-xl border border-white/10 hover:bg-white/20 transition-all">Ingredients</a>
          <img src="/Karuna-Logo-Illustration.png" alt="Karuna" className="h-16 md:h-28 object-contain drop-shadow-2xl" />
          <a href="#shop" className="rounded-full bg-[#F28C28] px-6 py-2 text-xs font-bold uppercase tracking-widest shadow-xl hover:scale-105 transition-transform">Buy A Bottle</a>
        </header>

        {/* Hero Content */}
        <section className="relative flex flex-col items-center px-6 pt-16 text-center z-10">
          <div className="relative group max-w-5xl mb-12">
            <img src="/Karuna-3-bottles.jpg" alt="Hot Sauce with Soul" className="rounded-[3rem] shadow-[0_0_100px_rgba(0,0,0,0.5)] transition-transform duration-1000 group-hover:scale-[1.01]" />
            <div className="absolute -inset-10 -z-10 rounded-full bg-[#F28C28]/20 blur-[120px] opacity-40 animate-pulse" />
          </div>
          <p className="text-[#F28C28] font-bold tracking-[0.4em] uppercase text-sm mb-6 drop-shadow-md">Small Batch • Big Heat</p>
          <h1 className="text-6xl font-black tracking-tighter md:text-9xl italic leading-none drop-shadow-2xl">
            HOT SAUCE WITH <span className="text-[#F28C28] not-italic">SOUL.</span>
          </h1>
        </section>
      </div>

      {/* Five Ingredients Section (The Vertical Layout) */}
      <section id="ingredients" className="max-w-5xl mx-auto px-6 py-32 relative">
        <div className="text-center mb-32">
          <h2 className="text-5xl md:text-7xl font-black uppercase text-[#F28C28] mb-4 tracking-tighter">Five Ingredients.</h2>
          <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-[0.3em] opacity-50">Zero Shortcuts.</h3>
        </div>
        
        <div className="space-y-40">
          {ingredients.map((item, index) => (
            <div key={item.name} className={`flex flex-col md:flex-row items-center gap-16 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="w-64 h-64 bg-gradient-to-br from-white/10 to-transparent border border-white/10 rounded-[4rem] p-10 backdrop-blur-md shadow-2xl flex items-center justify-center shrink-0 transition-transform hover:rotate-3">
                <img src={item.img} alt={item.name} className="w-full h-full object-contain drop-shadow-2xl" />
              </div>
              <div className="text-center md:text-left flex-1">
                <h4 className="text-4xl md:text-5xl font-black uppercase mb-6 text-[#F28C28] tracking-tight">{item.name}</h4>
                <p className="text-xl md:text-2xl text-white/70 max-w-xl leading-relaxed font-medium">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Shop Grid (The 4-Tier Pricing) */}
      <section id="shop" className="max-w-7xl mx-auto px-6 py-40">
        <div className="bg-black/30 border border-white/5 rounded-[5rem] p-12 md:p-24 backdrop-blur-3xl shadow-[0_0_100px_rgba(0,0,0,0.3)]">
          <h2 className="text-center text-4xl md:text-6xl font-black uppercase mb-20 tracking-tighter">Choose Your Batch</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div key={product.name} className="flex flex-col bg-white/5 border border-white/10 rounded-[3rem] p-10 text-center backdrop-blur-sm hover:border-[#F28C28]/50 transition-all hover:-translate-y-2 group">
                <h3 className="text-lg font-bold uppercase tracking-widest mb-2 opacity-50 group-hover:opacity-100 transition-opacity">{product.name}</h3>
                <p className="text-5xl font-black text-[#F28C28] mb-10 tracking-tighter">{product.price}</p>
                <div className="mt-auto">
                  <a href={product.link} className="inline-block w-full rounded-full bg-[#F28C28] py-5 text-sm font-bold uppercase tracking-widest text-white shadow-2xl transition-all hover:brightness-110 active:scale-95">Buy Now</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 text-center opacity-30 text-xs font-bold uppercase tracking-[0.5em]">
        Karuna Hot Sauce &copy; 2026 • Redding, CA
      </footer>
    </main>
  );
}
