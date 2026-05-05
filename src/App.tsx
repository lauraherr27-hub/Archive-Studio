/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Menu, Share2, Mail } from "lucide-react";
import { useState, useEffect } from "react";

const PRODUCTS = [
  {
    id: 1,
    name: "Hans J. Wegner CH24",
    material: "SOLID OAK",
    period: "Circa 1950",
    price: "€4,200",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCM_X2vNpERehbm2fpf_3d85EdCTBf6sB9yl7FUsK2XprCI7hZ-bKGasGS4Bp3RNof59NlZzGACcy_SS0jnHgFry_bEJY5kp5AlB7-fom53KofrsqmH0r6NtqlZgJR-2OYEWAQpMzKLA4YEiqSnHHd6ZOS59kK5uDCGl7L7MMHWk3nbzDBK2AOoP0X7WQLmmDSaYo71iBtS9fvc2LNK7zswrHXOWHHrBehDwJihPJb5y89ADfhVELv0RH-ygGcJZSQb2kc_-Uvx8HLU",
    offset: false
  },
  {
    id: 2,
    name: "Sori Yanagi Stool",
    material: "ROSEWOOD",
    period: "Circa 1954",
    price: "€1,850",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA4XQe_5sqTPH0hw7gS4xVy2N1AC-iyBnP0HU4glLUrkdLlHUTr-YpjdzkRkyjLLHal-8osoAPYNiR8e2C-49sNWGT7hCzs6W_ZYsqJLYNmiOME1s6JwctokfMxcbGiHhEyYJ9XZcO4UiPdH1GazZxoae8nozzzc_XSLkRsRTpwlGqQdyqe4bNEeKXWD7LI0FxhLz_L7oqmb3bkRhqlN9jLOPMj1pfjmJuUZS4lk9MuvCxjWCwbpnuTh4dYxnDkzAuSd1yYGxO4fMJ4",
    offset: true
  },
  {
    id: 3,
    name: "Peder Moos Settee",
    material: "MOHAIR",
    period: "Circa 1948",
    price: "€12,000",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDVarE5tr2v41kw_Urcb5rdFH8c-sHLXsQE0yECCtjmGvEiTFyhSZg2duqALXEV3nOSl32U7aJ_RtMjBezPCGj_OuKAv5poMuneYlz9q0TlX1DOjbtPTSCQ9oQpTuoAKXUrSq61PdobGIGAKBPl2waJX3F76uZvyhnf5U4qvAGI3pAkarr1s28ybj3JpHCtUYJhouNN3OhHgkWWSrFTTbLcn6f805JpA6Em16E5R8EW9x2Q2nzxrqYMPwFMwxBUVnHw_S4o9Q1LFwUf",
    offset: false
  }
];

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 px-8 md:px-16 py-8 flex justify-between items-end transition-all duration-500 border-b border-accent ${scrolled ? "bg-background/95 backdrop-blur-md py-6" : ""}`}>
        <div className="text-2xl font-black tracking-tighter text-accent">ARCHIVE</div>
        <div className="hidden md:block font-sans text-[10px] tracking-[3px] uppercase opacity-60 mb-1">Issue No. 01 / Collection 2026</div>
        <div className="hidden md:flex gap-12 label-caps text-accent/50 mb-1">
          <a href="#" className="text-accent border-b border-accent pb-0.5 transition-colors">Collection</a>
          <a href="#" className="hover:text-accent transition-colors">About</a>
          <a href="#" className="hover:text-accent transition-colors">Provenance</a>
          <a href="#" className="hover:text-accent transition-colors">Inquiry</a>
        </div>
      </nav>

      <main className="pt-48">
        {/* Hero Section */}
        <section className="px-8 md:px-16 mb-section-gap grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-7 image-container aspect-[4/5] relative"
          >
            <div className="absolute inset-0 border border-white/20 m-12 pointer-events-none z-10" />
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjv5VQx_PWRh9KUoJzQ7EGKe9mwLDB3PXtDixQF45mx6QBa4XWoN48U2Q1M2mrGc96fQMdcWTdHHEoC63aE3AnePwk0CMUmhGvjmsGhN9dn3h4IPhrc6xjnbVRh6_hOqGmnJRrlR6uISBPh1N-p0dbotUWOz9VEGWYowT0_up_W4P42rN4C5SGz4r6ltUHesk_A-tTRiTWy3MNy_bdvzkA9O8t-0ESTwx9Yx8ZJtxVQ4g1PgAHI5asljJEfj16i8BXqzLenmGcwksX" 
              className="w-full h-full object-cover grayscale-[20%]"
              alt="Sculptural wooden chair"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-5 md:pl-16"
          >
            <p className="label-caps text-gold mb-6 font-bold tracking-[5px]">Featured Selection</p>
            <h1 className="font-serif text-[80px] md:text-[100px] lg:text-[120px] mb-8 leading-[0.85] tracking-tight -ml-1">The<br/>Silence<br/>of Wood</h1>
            <p className="font-sans text-lg text-secondary-text mb-12 max-w-sm opacity-80 leading-relaxed">An exploration of monolithic architecture and the emotional resonance of raw materials in modern spaces.</p>
            <button className="flex items-center justify-center w-16 h-16 border border-accent rounded-full text-2xl hover:bg-accent hover:text-background transition-all duration-500">
              →
            </button>
          </motion.div>
        </section>

        {/* Curated Selection */}
        <section className="px-8 md:px-16 mb-section-gap">
          <div className="flex justify-between items-end mb-24 border-b border-accent/20 pb-8">
            <div className="flex items-center gap-12">
              <h2 className="font-serif text-[40px] tracking-tight">Curated Selection</h2>
              <div className="hidden md:block w-px h-12 bg-accent opacity-20" />
              <p className="hidden md:block font-sans text-xs uppercase tracking-[3px] opacity-40">Series 0.1</p>
            </div>
            <a href="#" className="label-caps border-b border-accent pb-1">Archive Entry</a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {PRODUCTS.map((product, index) => (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex flex-col relative ${product.offset ? "md:translate-y-24" : ""}`}
              >
                <div className="image-container aspect-square mb-8">
                  <img src={product.image} className="w-full h-full object-cover" alt={product.name} referrerPolicy="no-referrer" />
                </div>
                <p className="font-sans text-[10px] uppercase tracking-[3px] text-gold mb-4 font-bold flex items-center justify-between">
                  <span>0{index + 1}. MATERIAL</span>
                  <span className="opacity-30">{product.material}</span>
                </p>
                <h3 className="font-serif text-2xl mb-2">{product.name}</h3>
                <p className="font-sans text-secondary-text text-sm mb-4 leading-relaxed opacity-80">A testament to 20th-century craftsmanship, restored to original 1950s specifications.</p>
                <p className="font-sans text-xs tracking-widest text-accent/40 mb-2 uppercase">{product.period}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="px-8 md:px-16 py-48 bg-surface-low grid grid-cols-1 md:grid-cols-2 gap-24 md:gap-32 border-y border-accent/10">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <div className="label-caps text-gold mb-8 font-bold tracking-[5px]">Philosophy</div>
            <h2 className="font-serif text-5xl md:text-6xl mb-8 leading-tight tracking-tight">Quiet luxury is an echo, not a shout.</h2>
            <p className="font-sans text-lg text-secondary-text max-w-md leading-relaxed opacity-80">
              The tactile relationship between human and wood. We believe objects should carry the weight of history, curated not for trends but for legacies.
            </p>
            <div className="mt-12 flex items-center gap-8">
              <button className="px-10 py-5 border border-accent text-accent label-caps hover:bg-accent hover:text-background transition-all duration-500">
                Study Process
              </button>
            </div>
          </motion.div>
          <div className="relative flex justify-end">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="image-container aspect-[3/4] w-4/5"
            >
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuApjkUia8vfdUmC2qoyI13iQXxBID9JEoLmHw9LjUXW5dWFZTjc5GRQWmZOfXkrDgsZi6xl_lMc7Bvh01xg7vNARDd2YS-NFkOl9rL9pgXkWBZp5AFFJn1v6hZ8gWa2Aoj2ndCmI5_BOblmE3bBavPrITh4XOt59JN3cXp02hlnxqJSC0opKmWie-fTFgKBIK1buprrZ5EthqGQiOHZz5OVBoxwRdd_qMFkyT-d0oz-nUbSD2yP-VYkG6e3Y7KWddg4HuXoa0snIHAH" className="w-full h-full object-cover" alt="Craftsman at work" referrerPolicy="no-referrer" />
            </motion.div>
            <div className="absolute top-0 right-[-60px] h-full hidden lg:flex items-center">
              <span className="[writing-mode:vertical-rl] rotate-180 font-sans text-[10px] tracking-[10px] uppercase opacity-20 whitespace-nowrap">AUTHENTIC PROVENANCE 2026</span>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="px-8 md:px-16 py-48 text-center max-w-4xl mx-auto">
          <div className="label-caps text-gold mb-12 font-bold tracking-[8px]">The Registry</div>
          <h2 className="font-serif text-5xl md:text-7xl mb-8 leading-none tracking-tight">Join the Inner Circle.</h2>
          <p className="font-sans text-lg text-secondary-text mb-16 opacity-70 max-w-2xl mx-auto leading-relaxed">Receive private previews of new acquisitions and historical monographs before they reach the public catalogue.</p>
          <form className="flex flex-col md:flex-row gap-8 items-end" onSubmit={(e) => e.preventDefault()}>
            <div className="flex-grow border-b border-accent w-full group">
              <label className="label-caps text-[10px] opacity-40 block text-left mb-2 transition-opacity group-focus-within:opacity-100">Membership Email</label>
              <input 
                type="email" 
                className="w-full bg-transparent py-4 font-sans text-xl focus:outline-none placeholder:text-accent/10" 
                placeholder="email@reserve.archive" 
              />
            </div>
            <button className="flex items-center justify-center w-20 h-20 border border-accent rounded-full text-2xl hover:bg-accent hover:text-background transition-all duration-700">
              →
            </button>
          </form>
        </section>
      </main>

      {/* Footer */}
      <footer className="px-8 md:px-16 py-24 bg-background border-t border-accent">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-24 items-start">
          <div className="space-y-6">
            <div className="font-sans text-[10px] uppercase tracking-[3px] opacity-40 mb-4">01. Materials</div>
            <p className="font-sans text-sm leading-relaxed opacity-80">
              The tactile relationship between human and wood in Northern Europe. Preserving 20th-century craftsmanship.
            </p>
          </div>
          <div className="space-y-6">
            <div className="font-sans text-[10px] uppercase tracking-[3px] opacity-40 mb-4">02. Provenance</div>
            <p className="font-sans text-sm leading-relaxed opacity-80">
              Chasing the history of every corner. Ensuring the authenticity of every fragment of time.
            </p>
          </div>
          <div className="flex md:justify-end items-center h-full">
            <div className="flex flex-col items-end gap-12">
              <div className="text-4xl font-black tracking-tighter opacity-10">ARCHIVE</div>
              <div className="flex gap-8 text-accent/60">
                <Share2 className="w-4 h-4 cursor-pointer hover:text-accent transition-colors" />
                <Mail className="w-4 h-4 cursor-pointer hover:text-accent transition-colors" />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-24 pt-12 border-t border-accent/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] font-sans tracking-[4px] uppercase opacity-30 text-center md:text-left">
            © 2026 ARCHIVE. ALL RIGHTS RESERVED. SITE BY AIS.
          </p>
          <div className="flex gap-12 label-caps text-[10px] opacity-40">
            <a href="#" className="hover:opacity-100 transition-opacity">Privacy</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Terms</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Imprint</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
