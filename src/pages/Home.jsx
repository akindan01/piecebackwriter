import React, { useEffect, useState } from "react";
import { Feather, Menu, X } from "lucide-react"; 
import {  FaEnvelope,  FaWhatsapp,  FaTelegramPlane,  FaPenNib, FaComments,  FaGlobe,  FaBook,  FaUsers } from "react-icons/fa";
import Poems from "./Poems";

export default function Home() {
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slideUp");
          } else {
            entry.target.classList.remove("animate-slideUp");
          }
        });
      },
      { threshold: 0.2 }
    );

    reveals.forEach((el) => observer.observe(el));
  }, []);

  // form 
  const [form, setForm] = useState({
    name: "",
    email: "",
    title: "",
    content: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Community signup:", form);

  
    setForm({ name: "", email: "", title: "", content: "" });

    
    setSubmitted(true);
  };

  // mobile menu
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* animation CSS */}
      <style>{`
        @keyframes slideUp {
          0% { transform: translateY(40px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        .animate-slideUp {
          animation: slideUp 800ms ease-out forwards;
          will-change: transform, opacity;
        }
      `}</style>

      <div className="min-h-screen w-full bg-white">
        {/* Navbar */}
        <nav className="flex justify-between items-center px-8 py-4 bg-gray-50 shadow-sm sticky top-0 z-50">
          <Feather className="w-10 h-10" />

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 text-black text-lg">
            {["Home", "About", "Poems", "Community"].map((item, i) => (
              <li key={i}>
                <a
                  href={`#${item}`}
                  className="hover:text-gray-500 font-semibold transition-colors duration-200"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Button */}
          <button
            className="md:hidden text-black"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* Menu Dropdown */}
        {menuOpen && (
          <div className="md:hidden bg-gray-50 shadow-sm px-6 py-4 space-y-4 text-lg font-semibold">
            {["Home", "About", "Poems", "Community"].map((item, i) => (
              <a
                key={i}
                href={`#${item}`}
                className="block text-black hover:text-gray-500"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        )}

        {/* Hero Section */}
        <section
          id="Home"
          className="relative flex flex-col items-center justify-center min-h-[calc(100vh-64px)] 
                     px-6 text-center bg-[url('https://images.unsplash.com/photo-1575833947895-6c6223316549?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] 
                     bg-cover bg-center h-screen w-full"
        >
          <div className="absolute inset-0 bg-black/50"></div>

          <div className="relative z-10 flex flex-col items-center md:items-center justify-center h-full max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight reveal">
              Piece Back Writer
            </h1>

            <p className="text-2xl md:text-3xl font-medium mt-4 text-gray-200 italic reveal">
              “Where words are not just written, but lived and breathed.”
            </p>

            <p className="text-md md:text-lg text-gray-100 mt-3 max-w-xl reveal">
              Beyond mere words, this is a place where thought becomes rhythm,
              silence becomes song, and every stanza is a mirror held up to the soul.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start reveal">
              <a href="#Poems" className="bg-black hover:bg-gray-800 rounded-lg px-8 py-3 text-white font-semibold transition">
                Read Poems
              </a>
              <a href="#Community" className="bg-gray-200 hover:bg-gray-300 rounded-lg px-8 py-3 text-black font-semibold transition">
                Join Community
              </a>
            </div>

            {/* Scroll Indicator */}
            <div className="mt-16 animate-bounce text-gray-300">↓</div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="About"
          aria-label="About Me"
          className="bg-white min-h-screen w-full mt-4 px-6 md:px-20 text-center pt-12"
        >
          <div className="max-w-4xl mx-auto reveal">
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-black leading-tight mb-6">
              About
            </h2>
            <p
              className="text-lg md:text-xl text-gray-700 leading-relaxed italic reveal"
              style={{ fontFamily: "Inter, serif" }}
            >
           Piece Back Writer is a haven for poetry lovers, dreamers, and
              storytellers. It is more than a collection of words; it is a
              gathering place where emotions are given form, where silence is
              translated into rhythm, and where imagination is allowed to wander
              freely. Here, poetry is not confined to pages but lives in the
              hearts of those who read and write it. It is a place to read, to
              share, and to connect through the timeless art of verse — a bridge
              that links one soul to another.
              <br />
              <br />
              Every poem here carries a fragment of heart, a trace of memory, or a
              whisper of hope. Each line is a thread in a larger tapestry of human
              experience, woven together by voices across time and space. And
              every visitor, whether they come to seek inspiration, to rest in the
              comfort of words, or to leave behind their own, becomes part of this
              unfolding story — a story that grows with each verse, each voice,
              and each moment of reflection. This is not just a site for poetry;
              it is a living archive of emotions, a testament to the power of
              language, and a sanctuary for the soul.
            </p>
          </div>
        </section>

        {/* Poems Section */}
        <Poems />

        {/* Community Section */}
        <section id="Community" className="bg-gray-50 py-20 px-6 md:px-20 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
            Join Our Community
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-12">
            A space where poets, dreamers, and storytellers connect, share, and grow together.
          </p>

          {/* Benefits */}
          <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto mb-12">
            <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center hover:shadow-xl transition">
              <FaPenNib className="text-4xl text-black" />
              <h3 className="text-xl font-semibold mt-3">Share Your Poems</h3>
              <p className="text-gray-600 mt-2">Post your works and inspire others with your words.</p>
            </div>
            <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center hover:shadow-xl transition">
              <FaComments className="text-4xl text-black" />
              <h3 className="text-xl font-semibold mt-3">Engage & Discuss</h3>
              <p className="text-gray-600 mt-2">Get feedback, exchange ideas, and grow your craft.</p>
            </div>
            <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center hover:shadow-xl transition">
              <FaGlobe className="text-4xl text-black" />
              <h3 className="text-xl font-semibold mt-3">Global Network</h3>
              <p className="text-gray-600 mt-2">Connect with writers from different cultures worldwide.</p>
            </div>
          </div>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row justify-center gap-8 text-gray-700 font-medium mb-12">
            <div className="flex items-center gap-2">
              <FaBook className="text-2xl text-black" />
              <span>500+ Poems Shared</span>
            </div>
            <div className="flex items-center gap-2">
              <FaUsers className="text-2xl text-black" />
              <span>200+ Members</span>
            </div>
            <div className="flex items-center gap-2">
              <FaGlobe className="text-2xl text-black" />
              <span>15+ Countries</span>
            </div>
          </div>

          {/* Form */}
          {!submitted ? (
            <form className="max-w-3xl mx-auto flex flex-col gap-6 reveal" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
                required
              />

              <button
                type="submit"
                className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
              >
                Join Now
              </button>
            </form>
          ) : (
            <div className="mt-8 text-center">
              <h3 className="text-2xl font-semibold text-black mb-4">
                Thank you for joining Piece Back Writer!
              </h3>
              <p className="text-gray-600 mb-6">
                You'll now receive poems and updates in your inbox.  
                Meanwhile, connect with the community here:
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://chat.whatsapp.com/your-whatsapp-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition"
                >
                  Join WhatsApp
                </a>
                <a
                  href="https://t.me/your-telegram-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition"
                >
                  Join Telegram
                </a>
              </div>
            </div>
          )}
        </section>

        {/* Footer */}
        <footer className="bg-gray-100 text-gray-700 mt-12">
          <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h2 className="text-2xl font-serif font-bold text-black mb-2">
                Piece Back Writer
              </h2>
              <p className="text-gray-600 text-sm mt-2">Where words are not just written, but lived and breathed.</p>
            </div>

            <div>
      <h3 className="text-lg font-semibold text-black mb-4">Quick Links</h3>
      <ul className="space-y-2 text-gray-600">
        <li><a href="#Home" className="hover:text-black transition">Home</a></li>
        <li><a href="#About" className="hover:text-black transition">About</a></li>
        <li><a href="#Poems" className="hover:text-black transition">Poems</a></li>
        <li><a href="#Community" className="hover:text-black transition">Community</a></li>
      </ul>
    </div>
            <div>
              <h3 className="text-lg font-semibold text-black mb-4">Connect</h3>
              <div className="flex justify-center md:justify-start gap-6 text-2xl">
                <a href="mailto:your-email@example.com" className="hover:text-black transition">
                  <FaEnvelope />
                </a>
                <a href="https://chat.whatsapp.com/your-whatsapp-link" target="_blank" rel="noopener noreferrer" className="hover:text-green-600 transition">
                  <FaWhatsapp />
                </a>
                <a href="https://t.me/your-telegram-link" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
                  <FaTelegramPlane />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-300 text-center py-4 text-sm text-gray-500">
            © {new Date().getFullYear()} Piece Back Writer. All rights reserved.
          </div>
        </footer>
      </div>
    </>
  );
}

