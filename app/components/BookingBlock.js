"use client";

import React, { useState } from 'react';

const BookingBlock = ({ section }) => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', contactForm);
  };

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <div className="text-4xl mb-2">✈️</div>
        <h3 className="text-[#FAE1D8] text-2xl font-bold">Ready to Start Planning?</h3>
        <p className="text-[#FAE1D8]/90 leading-relaxed max-w-md mx-auto">
          {section.detail}
        </p>
      </div>

      {/* Main CTA Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <button 
          className="group relative overflow-hidden px-6 py-4 rounded-2xl text-base font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
          style={{
            background: 'rgba(203, 213, 255, 0.2)',
            backdropFilter: 'blur(15px)',
            border: '1px solid rgba(203, 213, 255, 0.3)',
          }}
        >
          <div className="flex items-center justify-center gap-3 text-[#FAE1D8]">
            <span className="text-xl">📞</span>
            <div className="text-left">
              <div>Call Our Experts</div>
              <div className="text-xs opacity-70">+1 (555) 123-4567</div>
            </div>
          </div>
        </button>
        
        <button 
          className="group relative overflow-hidden px-6 py-4 rounded-2xl text-base font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
          style={{
            background: 'rgba(250, 225, 216, 0.2)',
            backdropFilter: 'blur(15px)',
            border: '1px solid rgba(250, 225, 216, 0.3)',
          }}
        >
          <div className="flex items-center justify-center gap-3 text-[#FAE1D8]">
            <span className="text-xl">💬</span>
            <div className="text-left">
              <div>Start Live Chat</div>
              <div className="text-xs opacity-70">Available 24/7</div>
            </div>
          </div>
        </button>
      </div>

      {/* Quick Contact Form */}
      <div 
        className="p-6 rounded-2xl"
        style={{
          background: 'rgba(0, 0, 0, 0.25)',
          backdropFilter: 'blur(15px)',
          border: '1px solid rgba(250, 225, 216, 0.1)'
        }}
      >
        <h4 className="text-[#FAE1D8] text-lg font-semibold mb-4">Send Us a Message</h4>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={contactForm.name}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-[#FAE1D8] placeholder-[#FAE1D8]/50 focus:border-[#CBD5FF]/50 focus:outline-none transition-colors backdrop-blur-sm"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={contactForm.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-[#FAE1D8] placeholder-[#FAE1D8]/50 focus:border-[#CBD5FF]/50 focus:outline-none transition-colors backdrop-blur-sm"
            />
          </div>
          
          <textarea
            name="message"
            placeholder="Tell us about your dream trip..."
            value={contactForm.message}
            onChange={handleInputChange}
            rows={4}
            className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-[#FAE1D8] placeholder-[#FAE1D8]/50 focus:border-[#CBD5FF]/50 focus:outline-none transition-colors backdrop-blur-sm resize-none"
          />
          
          <button 
            type="submit"
            className="w-full py-3 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{
              background: 'rgba(203, 213, 255, 0.3)',
              backdropFilter: 'blur(15px)',
              border: '1px solid rgba(203, 213, 255, 0.4)',
            }}
          >
            <span className="text-[#FAE1D8]">Send Message</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingBlock;