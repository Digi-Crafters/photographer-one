// src/components/Footer.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#F5F1EA] border-t border-[#D4C4B0]/40">
      {/* Subtle Noise Texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
      }} />

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="py-20 grid md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Link href="/" className="group">
                <h3 className="font-serif text-4xl text-[#2C2C2C] mb-4 group-hover:text-[#8B7355] transition-colors duration-300">
                  Atelier
                </h3>
              </Link>
              <p className="text-[#6B6153] font-light leading-relaxed max-w-sm">
                Crafting timeless visual narratives through the lens of artistry 
                and emotion. Capturing your most precious moments with elegance and passion.
              </p>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-3 gap-4 pt-4"
            >
              <div className="text-center">
                <div className="text-xl font-light text-[#2C2C2C]">500+</div>
                <div className="text-xs tracking-[0.15em] text-[#9C8B7A] uppercase mt-1">
                  Events
                </div>
              </div>
              <div className="text-center">
                <div className="text-xl font-light text-[#2C2C2C]">98%</div>
                <div className="text-xs tracking-[0.15em] text-[#9C8B7A] uppercase mt-1">
                  Satisfaction
                </div>
              </div>
              <div className="text-center">
                <div className="text-xl font-light text-[#2C2C2C]">8+</div>
                <div className="text-xs tracking-[0.15em] text-[#9C8B7A] uppercase mt-1">
                  Years
                </div>
              </div>
            </motion.div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <h4 className="text-xs tracking-[0.3em] text-[#9C8B7A] uppercase mb-6">
                Navigation
              </h4>
              <ul className="space-y-4">
                {[
                  { name: 'Home', path: '/' },
                  { name: 'Portfolio', path: '/portfolio' },
                  { name: 'Services', path: '/services' },
                  { name: 'Book Session', path: '/booking' },
                  { name: 'Contact', path: '/#contact' },
                ].map((item, i) => (
                  <li key={i}>
                    <Link
                      href={item.path}
                      className="text-[#6B6153] hover:text-[#2C2C2C] transition-colors font-light text-sm group flex items-center gap-2"
                    >
                      <div className="w-1 h-1 bg-[#8B7355] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h4 className="text-xs tracking-[0.3em] text-[#9C8B7A] uppercase mb-6">
                Services
              </h4>
              <ul className="space-y-3">
                {[
                  'Wedding Photography',
                  'Pre-Wedding Shoots',
                  'Portrait Sessions',
                  'Family Photography',
                  'Corporate Events',
                  'Maternity Shoots'
                ].map((service, i) => (
                  <li key={i}>
                    <span className="text-[#6B6153] font-light text-sm">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-6"
            >
              <div>
                <h4 className="text-xs tracking-[0.3em] text-[#9C8B7A] uppercase mb-4">
                  Get in Touch
                </h4>
                <div className="space-y-3 text-sm text-[#6B6153]">
                  <a 
                    href="mailto:hello@atelier.com" 
                    className="font-light hover:text-[#2C2C2C] transition-colors block"
                  >
                    hello@atelier.com
                  </a>
                  <a 
                    href="tel:+15551234567" 
                    className="font-light hover:text-[#2C2C2C] transition-colors block"
                  >
                    +1 (555) 123-4567
                  </a>
                </div>
              </div>

              <div>
                <h4 className="text-xs tracking-[0.3em] text-[#9C8B7A] uppercase mb-4">
                  Studio Hours
                </h4>
                <div className="text-sm text-[#6B6153] font-light space-y-1">
                  <p>Mon - Fri: 9AM - 6PM</p>
                  <p>Saturday: 10AM - 4PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-xs tracking-[0.3em] text-[#9C8B7A] uppercase mb-4">
                  Follow Our Work
                </h4>
                <div className="flex gap-4">
                  {[
                    { name: 'Instagram', url: '#', icon: 'IG' },
                    { name: 'Pinterest', url: '#', icon: 'PN' },
                    { name: 'Behance', url: '#', icon: 'BH' },
                  ].map((social, i) => (
                    <a
                      key={i}
                      href={social.url}
                      className="w-8 h-8 bg-white/80 border border-[#D4C4B0] rounded-full flex items-center justify-center text-xs text-[#9C8B7A] hover:text-[#2C2C2C] hover:border-[#8B7355] transition-all duration-300 group"
                      title={social.name}
                    >
                      <span className="group-hover:scale-110 transition-transform duration-300">
                        {social.icon}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="py-12 border-t border-b border-[#D4C4B0]/40 text-center"
        >
          <h3 className="text-2xl font-light text-[#2C2C2C] mb-4">
            Ready to Create Something Beautiful?
          </h3>
          <p className="text-[#6B6153] font-light mb-6 max-w-md mx-auto">
            Let&apos;s discuss your vision and bring your story to life through our lens.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/booking"
              className="px-8 py-4 bg-[#2C2C2C] text-[#F5F1EA] text-sm tracking-wider uppercase hover:bg-[#8B7355] transition-colors duration-300 font-light"
            >
              Book Your Session
            </Link>
            <Link
              href="/#contact"
              className="px-8 py-4 border border-[#D4C4B0] text-[#2C2C2C] text-sm tracking-wider uppercase hover:bg-[#D4C4B0] transition-colors duration-300 font-light"
            >
              Get in Touch
            </Link>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="py-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-xs text-[#9C8B7A] font-light">
              © {currentYear} Atelier Photography. All rights reserved.
            </div>

            <div className="flex flex-wrap gap-6 text-xs text-[#9C8B7A]">
              <Link href="/privacy" className="hover:text-[#2C2C2C] transition-colors font-light">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-[#2C2C2C] transition-colors font-light">
                Terms of Service
              </Link>
              <Link href="/cookies" className="hover:text-[#2C2C2C] transition-colors font-light">
                Cookie Policy
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Decorative Element */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-px h-16 bg-gradient-to-t from-[#D4C4B0] to-transparent opacity-30" />
      </div>
    </footer>
  );
};

export default Footer;