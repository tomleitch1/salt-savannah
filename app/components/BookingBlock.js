"use client";

import React, { useState } from 'react';

const BookingBlock = ({ section }) => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: '',
    travelDates: '',
    groupSize: ''
  });

  const content = section.content || {};
  const contactInfo = content.contactInfo || {};
  const planningSteps = content.planningSteps || [];
  const trustIndicators = content.trustIndicators || [];
  const testimonial = content.testimonial || {};

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
    // Add form submission logic here
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
          onClick={() => window.open(`tel:${contactInfo.phone}`, '_self')}
        >
          <div className="flex items-center justify-center gap-3 text-[#FAE1D8]">
            <span className="text-xl">📞</span>
            <div className="text-left">
              <div>Call Our Experts</div>
              <div className="text-xs opacity-70">{contactInfo.phone || '+1 (555) 123-4567'}</div>
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
              <div className="text-xs opacity-70">{contactInfo.hours || 'Available 24/7'}</div>
            </div>
          </div>
        </button>
      </div>

      {/* Contact Form */}
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
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={contactForm.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-[#FAE1D8] placeholder-[#FAE1D8]/50 focus:border-[#CBD5FF]/50 focus:outline-none transition-colors backdrop-blur-sm"
              required
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="travelDates"
              placeholder="Preferred Travel Dates"
              value={contactForm.travelDates}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-[#FAE1D8] placeholder-[#FAE1D8]/50 focus:border-[#CBD5FF]/50 focus:outline-none transition-colors backdrop-blur-sm"
            />
            <input
              type="text"
              name="groupSize"
              placeholder="Group Size"
              value={contactForm.groupSize}
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

      {/* Planning Steps */}
      {planningSteps.length > 0 && (
        <div>
          <h4 className="text-[#FAE1D8] text-lg font-semibold mb-4">How It Works</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {planningSteps.map((item, index) => (
              <div 
                key={index}
                className="p-4 rounded-xl text-center transition-all duration-300 hover:scale-105"
                style={{
                  background: 'rgba(0, 0, 0, 0.25)',
                  backdropFilter: 'blur(15px)',
                  border: '1px solid rgba(250, 225, 216, 0.1)'
                }}
              >
                <div className="text-2xl mb-2">{item.icon}</div>
                <div className="text-[#FAE1D8] font-semibold mb-1">
                  Step {item.step}: {item.title}
                </div>
                <p className="text-[#FAE1D8]/70 text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Testimonial */}
      {testimonial.text && (
        <div 
          className="p-6 rounded-2xl text-center"
          style={{
            background: 'rgba(0, 0, 0, 0.25)',
            backdropFilter: 'blur(15px)',
            border: '1px solid rgba(250, 225, 216, 0.1)'
          }}
        >
          <div className="text-2xl mb-3">💬</div>
          <blockquote className="text-[#FAE1D8]/90 italic mb-4 text-lg leading-relaxed">
            "{testimonial.text}"
          </blockquote>
          <div className="text-[#FAE1D8] font-semibold">{testimonial.author}</div>
          <div className="text-[#FAE1D8]/60 text-sm">{testimonial.trip}</div>
        </div>
      )}

      {/* Trust Indicators */}
      {trustIndicators.length > 0 && (
        <div 
          className="p-4 rounded-2xl"
          style={{
            background: 'rgba(0, 0, 0, 0.25)',
            backdropFilter: 'blur(15px)',
            border: '1px solid rgba(250, 225, 216, 0.1)'
          }}
        >
          <div className="grid grid-cols-3 gap-4 text-center">
            {trustIndicators.map((indicator, index) => (
              <div key={index}>
                <div className="text-xl mb-1">{indicator.icon}</div>
                <div className="text-[#FAE1D8] text-sm font-semibold">{indicator.title}</div>
                <div className="text-[#FAE1D8]/70 text-xs">{indicator.subtitle}</div>
                {indicator.description && (
                  <div className="text-[#FAE1D8]/50 text-xs mt-1">{indicator.description}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Contact Information */}
      <div className="text-center">
        <div className="text-[#FAE1D8]/60 text-sm">
          Or email us directly at{' '}
          <a 
            href={`mailto:${contactInfo.email || 'hello@saltandsavannah.com'}`}
            className="text-[#CBD5FF] hover:underline"
          >
            {contactInfo.email || 'hello@saltandsavannah.com'}
          </a>
        </div>
      </div>
    </div>
  );
};

export default BookingBlock;