// src/components/Footer.tsx
'use client';

import React from 'react';
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
              <h3 className="font-serif text-4xl text-[#2C2C2C] mb-4">Atelier</h3>
              <p className="text-[#6B6153] font-light leading-relaxed max-w-sm">
                Crafting timeless visual narratives through the lens of artistry 
                and emotion. Based in the heart of creativity.
              </p>
            </motion.div>

            {/* Newsletter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="pt-4"
            >
              <div className="text-xs tracking-[0.3em] text-[#9C8B7A] uppercase mb-4">
                Stay Inspired
              </div>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-3 bg-transparent border border-[#D4C4B0] text-[#2C2C2C] placeholder:text-[#9C8B7A] text-sm focus:outline-none focus:border-[#8B7355] transition-colors"
                />
                <button className="px-6 py-3 bg-[#2C2C2C] text-[#F5F1EA] text-sm tracking-wider uppercase hover:bg-[#8B7355] transition-colors duration-300">
                  Join
                </button>
              </div>
            </motion.div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <h4 className="text-xs tracking-[0.3em] text-[#9C8B7A] uppercase mb-6">
                Explore
              </h4>
              <ul className="space-y-3">
                {['Portfolio', 'Services', 'About Us', 'Journal', 'Contact'].map((item, i) => (
                  <li key={i}>
                    <a
                      href={`/${item.toLowerCase().replace(' ', '-')}`}
                      className="text-[#6B6153] hover:text-[#2C2C2C] transition-colors font-light text-sm"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Services */}
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
                {['Weddings', 'Events', 'Portraits', 'Commercial', 'Editorial'].map((item, i) => (
                  <li key={i}>
                    <a
                      href={`/services/${item.toLowerCase()}`}
                      className="text-[#6B6153] hover:text-[#2C2C2C] transition-colors font-light text-sm"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
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
                <div className="space-y-2 text-sm text-[#6B6153]">
                  <p className="font-light">hello@atelier.studio</p>
                  <p className="font-light">+1 (555) 123-4567</p>
                </div>
              </div>

              <div>
                <h4 className="text-xs tracking-[0.3em] text-[#9C8B7A] uppercase mb-4">
                  Visit Us
                </h4>
                <p className="text-sm text-[#6B6153] font-light leading-relaxed">
                  123 Creative Lane<br />
                  Design District<br />
                  New York, NY 10001
                </p>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-xs tracking-[0.3em] text-[#9C8B7A] uppercase mb-4">
                  Follow
                </h4>
                <div className="flex gap-4">
                  {[
                    { name: 'Instagram', url: '#' },
                    { name: 'Pinterest', url: '#' },
                    { name: 'Behance', url: '#' },
                  ].map((social, i) => (
                    <a
                      key={i}
                      href={social.url}
                      className="text-xs tracking-[0.2em] text-[#9C8B7A] hover:text-[#2C2C2C] transition-colors uppercase"
                    >
                      {social.name.slice(0, 2)}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="py-8 border-t border-[#D4C4B0]/40"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap gap-6 text-xs text-[#9C8B7A]">
              <a href="/privacy" className="hover:text-[#2C2C2C] transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-[#2C2C2C] transition-colors">
                Terms of Service
              </a>
              <a href="/cookies" className="hover:text-[#2C2C2C] transition-colors">
                Cookie Policy
              </a>
            </div>

            <div className="text-xs text-[#9C8B7A] font-light">
              © {currentYear} Atelier. All rights reserved.
            </div>
          </div>
        </motion.div>

        {/* Decorative Element */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-px h-16 bg-gradient-to-t from-[#D4C4B0] to-transparent opacity-40" />
      </div>
    </footer>
  );
};

export default Footer;