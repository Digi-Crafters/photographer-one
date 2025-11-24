// src/components/Testimonials.tsx
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
  event: string;
  location: string;
  date: string;
  rating: number;
}

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Sarah & Michael Chen',
      role: 'Wedding Clients',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
      quote: 'They didn\'t just capture our wedding—they captured the soul of our love story. Every photograph feels like a piece of art, a timeless moment we can hold forever. The way they saw the light, the emotion, the quiet glances... it was pure magic.',
      event: 'Vineyard Wedding',
      location: 'Napa Valley, CA',
      date: 'June 2024',
      rating: 5,
    },
    {
      id: 2,
      name: 'James Robertson',
      role: 'Corporate Client',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
      quote: 'Working with Atelier transformed how we present our brand. Their editorial eye and attention to detail elevated our entire visual identity. They understand that great photography isn\'t just about what you see—it\'s about what you feel.',
      event: 'Brand Campaign',
      location: 'New York, NY',
      date: 'March 2024',
      rating: 5,
    },
    {
      id: 3,
      name: 'Emily Torres',
      role: 'Portrait Client',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop',
      quote: 'I\'ve never felt more seen. They created a safe, beautiful space where I could be completely myself. The portraits they delivered were beyond anything I imagined—raw, elegant, and deeply personal. This is artistry at its finest.',
      event: 'Personal Branding',
      location: 'Los Angeles, CA',
      date: 'August 2024',
      rating: 5,
    },
    {
      id: 4,
      name: 'David & Priya Kapoor',
      role: 'Engagement Clients',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      quote: 'From the first consultation to receiving our gallery, everything was seamless and thoughtful. They made us feel like the only clients in the world. The photos are stunning—full of joy, laughter, and genuine connection.',
      event: 'Engagement Session',
      location: 'San Francisco, CA',
      date: 'May 2024',
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative bg-[#F5F1EA] py-32 overflow-hidden">
      {/* Noise Texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
      }} />

      {/* Background Decorative Elements */}
      <div className="absolute top-20 right-[10%] w-64 h-64 border border-[#D4C4B0]/20 rounded-full" />
      <div className="absolute bottom-20 left-[5%] w-2 h-2 bg-[#8B7355] rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="text-xs tracking-[0.4em] text-[#9C8B7A] uppercase mb-4">
            Client Stories
          </div>
          <h2 className="text-5xl md:text-6xl font-light text-[#2C2C2C] mb-6">
            Words from our
            <span className="block font-serif italic text-[#8B7355] mt-2">cherished clients</span>
          </h2>
          <p className="text-lg text-[#6B6153] font-light leading-relaxed">
            Every client brings a unique story, and we&apos;re honored to be part of their journey.
          </p>
        </motion.div>

        {/* Main Testimonial Display */}
        <div className="grid lg:grid-cols-12 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Side - Image & Info */}
          <div className="lg:col-span-5 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                {/* Client Image */}
                <div className="relative w-80 h-80 mx-auto lg:mx-0">
                  <div className="absolute inset-0 border border-[#D4C4B0]/40" />
                  <div className="absolute inset-4 overflow-hidden">
                    <Image
                      src={testimonials[activeIndex].image}
                      alt={testimonials[activeIndex].name}
                      fill
                      className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                  
                  {/* Rating Badge */}
                  <div className="absolute -bottom-4 -right-4 bg-[#2C2C2C] px-6 py-4">
                    <div className="flex gap-1">
                      {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 text-[#8B7355]"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Event Details */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-12 space-y-2 text-center lg:text-left"
                >
                  <div className="text-xs tracking-[0.3em] text-[#9C8B7A] uppercase">
                    {testimonials[activeIndex].event}
                  </div>
                  <div className="flex items-center justify-center lg:justify-start gap-2 text-sm text-[#6B6153]">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {testimonials[activeIndex].location}
                  </div>
                  <div className="text-sm text-[#9C8B7A]">{testimonials[activeIndex].date}</div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Side - Quote */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                {/* Quote Icon */}
                <svg
                  className="w-16 h-16 text-[#D4C4B0]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>

                {/* Quote Text */}
                <p className="text-2xl md:text-3xl font-light text-[#2C2C2C] leading-relaxed">
                  {testimonials[activeIndex].quote}
                </p>

                {/* Client Info */}
                <div className="pt-6 border-t border-[#D4C4B0]/40">
                  <h4 className="text-xl text-[#2C2C2C] font-normal mb-1">
                    {testimonials[activeIndex].name}
                  </h4>
                  <p className="text-sm tracking-[0.2em] text-[#9C8B7A] uppercase">
                    {testimonials[activeIndex].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Controls */}
            <div className="flex items-center gap-6 mt-12">
              <button
                onClick={prevTestimonial}
                className="group p-4 border border-[#D4C4B0] hover:border-[#8B7355] hover:bg-[#8B7355] transition-all duration-300"
                aria-label="Previous testimonial"
              >
                <svg
                  className="w-5 h-5 text-[#2C2C2C] group-hover:text-[#F5F1EA] transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={nextTestimonial}
                className="group p-4 border border-[#D4C4B0] hover:border-[#8B7355] hover:bg-[#8B7355] transition-all duration-300"
                aria-label="Next testimonial"
              >
                <svg
                  className="w-5 h-5 text-[#2C2C2C] group-hover:text-[#F5F1EA] transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Progress Indicators */}
              <div className="flex gap-2 ml-4">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`h-px transition-all duration-300 ${
                      index === activeIndex
                        ? 'w-12 bg-[#8B7355]'
                        : 'w-8 bg-[#D4C4B0]'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              {/* Counter */}
              <div className="ml-auto text-sm text-[#9C8B7A] font-light">
                <span className="text-[#2C2C2C] text-lg">{String(activeIndex + 1).padStart(2, '0')}</span>
                {' / '}
                <span>{String(testimonials.length).padStart(2, '0')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-24 pt-16 border-t border-[#D4C4B0]/40"
        >
          <p className="text-lg text-[#6B6153] font-light mb-6">
            Ready to create your own story?
          </p>
          <a
            href="/contact"
            className="inline-block px-10 py-4 bg-[#2C2C2C] text-[#F5F1EA] text-sm tracking-wider uppercase hover:bg-[#8B7355] transition-colors duration-300"
          >
            Let&apos;s Talk
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;