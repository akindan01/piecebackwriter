import React, { useEffect, useState } from "react";
import { Feather, Menu, X, CloudRain, Heart, Sun, Sunrise, Quote, BookOpen, ArrowRight } from "lucide-react";
import { FaEnvelope, FaWhatsapp, FaTelegramPlane, FaPenNib, FaComments, FaGlobe, FaBook, FaUsers } from "react-icons/fa";
import Poems from "./Poems";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", title: "", content: "" });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slideUp");
            entry.target.classList.remove("opacity-0");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Community signup:", form);
    setForm({ name: "", email: "", title: "", content: "" });
    setSubmitted(true);
  };

  const navLinks = ["Home", "About", "Poems", "Community"];

  return (
    <div className="font-sans text-gray-900 bg-white">
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled || menuOpen ? "bg-white/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Feather className={`w-8 h-8 ${scrolled || menuOpen ? "text-black" : "text-white"} transition-colors`} />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8">
            {navLinks.map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  className={`text-sm tracking-widest uppercase font-medium hover:text-gray-400 transition-colors ${scrolled ? "text-gray-800" : "text-white"
                    }`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Toggle */}
          <button
            className={`md:hidden ${scrolled || menuOpen ? "text-black" : "text-white"}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg py-8 px-6 flex flex-col items-center space-y-6 md:hidden">
            {navLinks.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="text-xl font-serif text-black hover:text-gray-500"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="Home" className="relative h-screen flex flex-col items-center justify-center text-center px-6">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1470549638415-0a0755be0619?q=80&w=2070&auto=format&fit=crop')" }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center animate-slideUp">
          <h1 className="text-5xl md:text-8xl font-serif text-white font-bold leading-tight tracking-tight drop-shadow-lg">
            Piece Back Writer
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-gray-200 font-light italic max-w-2xl mx-auto drop-shadow-md">
            “Where words are not just written, but lived and breathed.”
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-5">
            <a href="#Poems" className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition-all transform hover:scale-105 shadow-lg">
              Read Poems
            </a>
            <a href="#Community" className="bg-transparent border border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-black transition-all transform hover:scale-105 shadow-lg">
              Join Community
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 animate-bounce text-white/70">
          <span className="text-sm tracking-widest uppercase">Scroll Down</span>
        </div>
      </section>

      {/* About Section */}
      <section id="About" className="py-24 px-6 md:px-20 bg-white text-center">
        <div className="max-w-4xl mx-auto reveal opacity-0 transition-opacity duration-1000">
          <span className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-4 block">Our Story</span>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-8 leading-snug">
            A Sanctuary for the Soul
          </h2>
          <div className="w-16 h-1 bg-black mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light">
            Piece Back Writer is a haven for poetry lovers, dreamers, and
            storytellers. It is more than a collection of words; it is a
            gathering place where emotions are given form, where silence is
            translated into rhythm. Here, poetry is not confined to pages but lives in the
            hearts of those who read and write it.
          </p>
          <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed font-light">
            Every poem here carries a fragment of heart, a trace of memory.
            This is not just a site for poetry; it is a living archive of emotions.
          </p>
        </div>
      </section>

      {/* Categories Section - Explore by Mood */}
      <section className="py-24 bg-amber-50/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 reveal opacity-0 transition-opacity duration-1000">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">Explore by Mood</h2>
            <div className="w-16 h-1 bg-black mx-auto mb-6"></div>
            <p className="text-gray-500 max-w-2xl mx-auto">Find poems that resonate with your current state of being.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Melancholy", icon: CloudRain, desc: "Rainy days & reflection", color: "hover:bg-blue-50" },
              { title: "Romance", icon: Heart, desc: "Love in all forms", color: "hover:bg-red-50" },
              { title: "Nature", icon: Sun, desc: "The earth's whisper", color: "hover:bg-green-50" },
              { title: "Hope", icon: Sunrise, desc: "A new beginning", color: "hover:bg-yellow-50" }
            ].map((cat, idx) => (
              <div
                key={idx}
                className={`group cursor-pointer bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 text-center ${cat.color} reveal opacity-0 relative overflow-hidden`}
              >
                <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <cat.icon className="w-8 h-8 text-gray-800" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-gray-900 mb-2">{cat.title}</h3>
                <p className="text-gray-500 text-sm">{cat.desc}</p>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Poems Section */}
      <Poems />

      {/* Spotlight Feature Section */}
      <section className="py-24 px-6 md:px-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative reveal opacity-0">
            <div className="absolute inset-0 bg-black translate-x-3 translate-y-3 rounded-2xl"></div>
            <img
              src="https://i.pinimg.com/736x/8a/2f/f4/8a2ff4e6318a353a951f12b67985b9c3.jpg"
              alt="Poet"
              className="relative rounded-2xl z-10 w-full h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <div className="reveal opacity-0">
            <span className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-3 block">Featured Collection</span>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6 leading-tight">The Silence of <br /> Love</h2>
            <div className="w-20 h-1 bg-gray-200 mb-8"></div>
            <p className="text-lg text-gray-600 leading-relaxed font-light mb-6">
              "In the depth of cold, I finally learned that within me there lay an invincible summer."
            </p>
            <p className="text-gray-500 mb-8 leading-relaxed">
              This month, we explore the profound stillness of emotions. A curated collection of works that delve into isolation, reflection, and the quiet beauty.
            </p>
            <a href="#Poems" className="inline-flex items-center gap-2 text-black border-b border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition-all uppercase tracking-widest text-sm font-bold">
              Start Reading <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials / Quote Section */}
      <section className="py-32 bg-black text-white px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-[100px]"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500 rounded-full blur-[120px]"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20 reveal opacity-0">
            <Quote className="w-12 h-12 mx-auto text-white mb-6" />
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Voices from the Silence</h2>
            <p className="text-gray-400">Feedback from our community members.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { quote: "Weldone Daniel. It's a beautiful sanctuary.", author: "Jenkins", role: "Poet" },
              { quote: "An amazing writer. The words I find here speak to the deepest parts of my soul.", author: "Akinpelu Deborah", role: "Reader" },
              { quote: "I've found a space here. Daniel understands that poetry is more than just ink.", author: "Awotinde Racheal", role: "Reader" }
            ].map((testimonial, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-lg border border-white/10 p-10 rounded-2xl hover:bg-white/10 transition-colors reveal opacity-0">
                <div className="flex gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map(s => <Sun key={s} size={14} className="text-amber-200" />)}
                </div>
                <p className="text-gray-300 leading-relaxed italic mb-8 font-serif text-lg">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-gray-700 to-black rounded-full flex items-center justify-center font-serif font-bold border border-gray-600">
                    {testimonial.author[0]}
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-white">{testimonial.author}</h4>
                    <span className="text-xs text-gray-500 uppercase tracking-wider">{testimonial.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="Community" className="py-24 px-6 md:px-20 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center reveal opacity-0 transition-opacity duration-1000">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">Join Our Community</h2>
          <p className="text-gray-500 max-w-2xl mx-auto mb-16 text-lg">
            Be part of a growing family of writers and readers.
          </p>

          <div className="grid gap-8 md:grid-cols-3 mb-16">
            {[
              { icon: FaPenNib, title: "Share Your Poems", desc: "Post your works and inspire others." },
              { icon: FaComments, title: "Engage & Discuss", desc: "Exchange ideas and grow your craft." },
              { icon: FaGlobe, title: "Global Network", desc: "Connect with writers worldwide." }
            ].map((feature, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <feature.icon className="mx-auto text-4xl text-black mb-6" />
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-500">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Stats Bar */}
          <div className="bg-white py-10 px-6 rounded-2xl shadow-sm border border-gray-100 flex flex-wrap justify-center gap-12 md:gap-24 mb-16">
            <div className="text-center">
              <span className="block text-4xl font-serif font-bold text-black">500+</span>
              <span className="text-sm text-gray-400 uppercase tracking-widest">Poems</span>
            </div>
            <div className="text-center">
              <span className="block text-4xl font-serif font-bold text-black">200+</span>
              <span className="text-sm text-gray-400 uppercase tracking-widest">Members</span>
            </div>
            <div className="text-center">
              <span className="block text-4xl font-serif font-bold text-black">15+</span>
              <span className="text-sm text-gray-400 uppercase tracking-widest">Countries</span>
            </div>
          </div>

          {/* Signup Form */}
          <div className="max-w-2xl mx-auto bg-white rounded-2xl p-8 md:p-12 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-black"></div>
            {!submitted ? (
              <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                <h3 className="text-2xl font-serif font-bold mb-4">Start Your Journey</h3>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-5 py-4 focus:outline-none focus:border-black transition-colors"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-5 py-4 focus:outline-none focus:border-black transition-colors"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-black text-white py-4 rounded-lg font-bold hover:bg-gray-800 transition-colors tracking-wide"
                >
                  JOIN NOW
                </button>
              </form>
            ) : (
              <div className="text-center py-10">
                <Feather className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-serif font-bold mb-2">Welcome Aboard!</h3>
                <p className="text-gray-500 mb-8">We are thrilled to have you.</p>
                <div className="flex justify-center gap-4">
                  <a href="#" className="p-3 bg-gray-100 rounded-full hover:scale-110 transition-transform">
                    <FaWhatsapp className="text-2xl text-green-600" />
                  </a>
                  <a href="#" className="p-3 bg-gray-100 rounded-full hover:scale-110 transition-transform">
                    <FaTelegramPlane className="text-2xl text-blue-500" />
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-serif font-bold mb-4">Piece Back Writer</h2>
            <p className="text-gray-400 max-w-sm">Where words are not just written, but lived and breathed. A sanctuary for the soul.</p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Explore</h3>
            <ul className="space-y-3 text-gray-400">
              {navLinks.map(link => (
                <li key={link}><a href={`#${link}`} className="hover:text-white transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Connect</h3>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <FaEnvelope size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <FaWhatsapp size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <FaTelegramPlane size={18} />
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Piece Back Writer. All rights reserved.
          <p>Developed by Akinremi Daniel</p>
        </div>
      </footer>
    </div>
  );
}
