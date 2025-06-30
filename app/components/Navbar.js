'use client';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll but keep same styling
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    // Navbar container - no scroll styling changes, smaller overall
    <nav className="fixed top-4 left-4 right-4 z-50 transition-all duration-500 rounded-2xl bg-black/20 backdrop-blur-md border border-white/10">
      {/* Outer padding container */}
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        {/* NAV CONTENT ROW - reduced height */}
        <div className="flex items-center justify-between h-16">
          
          {/* LOGO SECTION (LEFT) - smaller logo */}
          <div className="flex items-center">
            <img
              src="/logo-full.png"
              alt="Salt & Savannah"
              className="h-10 md:h-12 object-contain"
            />
          </div>

          {/* LINKS + ICONS (RIGHT SIDE) */}
          <div className="flex items-center space-x-4 ml-auto">
            
            {/* NAV LINKS - smaller text, added Contact Us */}
            {['Collections', 'Inspiration', 'Destinations', 'Contact Us'].map((item) => (
              <a
                key={item}
                href="#"
                className="relative group text-[#FAE1D8] text-sm lg:text-base font-medium hover:text-[#CBD5FF] transition-all duration-300 ease-in-out"
              >
                {item}
                {/* Underline animation */}
                <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-[#CBD5FF] group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}

            {/* SEARCH ICON - smaller */}
            <button className="text-[#CBD5FF] hover:scale-110 hover:brightness-110 transition-all duration-300 ease-in-out p-2 rounded-lg">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M21 21l-6-6M10 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z" />
              </svg>
            </button>

            {/* MENU ICON - smaller */}
            <button className="text-[#CBD5FF] hover:scale-110 hover:brightness-110 transition-all duration-300 ease-in-out p-2 rounded-lg">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}