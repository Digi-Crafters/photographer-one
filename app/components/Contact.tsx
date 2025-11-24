// components/ContactSection.tsx
"use client";

import React, { useState } from "react";
import { easeOut, motion } from "framer-motion";

const ContactSection: React.FC = () => {
  const [activeForm, setActiveForm] = useState("consultation");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const consultationTypes = [
    {
      id: "wedding",
      title: "Wedding Consultation",
      duration: "45 mins",
      description: "Plan your perfect wedding photography experience",
      icon: "💒",
    },
    {
      id: "portrait",
      title: "Portrait Session",
      duration: "30 mins",
      description: "Discuss your vision for personal or professional portraits",
      icon: "👤",
    },
    {
      id: "commercial",
      title: "Commercial Project",
      duration: "60 mins",
      description: "Explore photography solutions for your business",
      icon: "🏢",
    },
    {
      id: "general",
      title: "General Inquiry",
      duration: "20 mins",
      description: "Quick chat about your photography needs",
      icon: "💬",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: easeOut,
      },
    },
  };

  const formVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: easeOut,
      },
    },
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="relative bg-[#F5F1EA] py-32 overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center max-w-2xl mx-auto"
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 0.5 }}
              className="text-6xl mb-6"
            >
              ✨
            </motion.div>
            <h2 className="text-4xl font-light text-[#2C2C2C] mb-4">
              Thank You
            </h2>
            <p className="text-lg text-[#6B6153] mb-8 font-light leading-relaxed">
              We&apos;ve received your consultation request and will contact you
              within 24 hours to schedule your session and discuss your vision.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="px-8 py-3 border border-[#D4C4B0] text-[#2C2C2C] text-sm tracking-wider uppercase hover:bg-[#D4C4B0] transition-colors duration-300 font-light"
            >
              Send Another Message
            </button>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative bg-[#F5F1EA] py-32 overflow-hidden" id="contact">
      {/* Background Elements */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
        }}
      />

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-px h-32 bg-[#D4C4B0]/30"></div>
      <div className="absolute bottom-20 left-10 w-2 h-2 bg-[#8B7355] rounded-full"></div>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 left-1/4 w-64 h-64 border border-[#D4C4B0]/10 rounded-full"
      />

      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="text-sm tracking-[0.4em] text-[#9C8B7A] mb-4 uppercase">
            Let&apos;s Create Together
          </div>
          <h2 className="text-5xl md:text-6xl font-light text-[#2C2C2C] mb-6">
            Get Your Free
            <span className="block font-serif italic text-[#8B7355] mt-2">
              Consultation
            </span>
          </h2>
          <p className="text-lg text-[#6B6153] max-w-2xl mx-auto font-light leading-relaxed">
            Begin your photography journey with a complimentary consultation.
            Let&apos;s discuss your vision and create something extraordinary
            together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column - Consultation Options */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-[#D4C4B0]/30">
              <h3 className="text-2xl font-light text-[#2C2C2C] mb-6">
                Choose Your Session
              </h3>

              <div className="space-y-4">
                {consultationTypes.map((type) => (
                  <motion.button
                    key={type.id}
                    variants={itemVariants}
                    onClick={() => setActiveForm(type.id)}
                    className={`w-full text-left p-6 rounded-xl transition-all duration-500 group border ${
                      activeForm === type.id
                        ? "border-[#8B7355] bg-[#8B7355]/5"
                        : "border-[#D4C4B0]/30 hover:border-[#D4C4B0]/50"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <motion.span
                        animate={{ scale: activeForm === type.id ? 1.2 : 1 }}
                        className="text-2xl mt-1"
                      >
                        {type.icon}
                      </motion.span>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h4
                            className={`text-lg font-light transition-colors duration-300 ${
                              activeForm === type.id
                                ? "text-[#8B7355]"
                                : "text-[#2C2C2C]"
                            }`}
                          >
                            {type.title}
                          </h4>
                          <span className="text-sm text-[#9C8B7A] font-light bg-[#F5F1EA] px-2 py-1 rounded">
                            {type.duration}
                          </span>
                        </div>
                        <p className="text-[#6B6153] text-sm font-light leading-relaxed">
                          {type.description}
                        </p>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>

              {/* Benefits */}
              <motion.div
                variants={itemVariants}
                className="mt-8 pt-6 border-t border-[#D4C4B0]/20"
              >
                <h4 className="text-sm tracking-[0.3em] text-[#9C8B7A] uppercase mb-4 font-light">
                  What&apos;s Included
                </h4>
                <div className="grid gap-2">
                  {[
                    "Personalized photography plan",
                    "Pricing & package discussion",
                    "Creative direction session",
                    "No obligation commitment",
                  ].map((benefit, index) => (
                    <motion.div
                      key={benefit}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3 text-[#2C2C2C] font-light text-sm"
                    >
                      <div className="w-1.5 h-1.5 bg-[#8B7355] rounded-full flex-shrink-0" />
                      {benefit}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Contact Info */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-[#8B7355] to-[#9C8B7A] rounded-2xl p-8 text-[#F5F1EA]"
            >
              <h3 className="text-xl font-light mb-6">Direct Contact</h3>
              <div className="space-y-4">
                {[
                  { icon: "📧", label: "Email", value: "hello@atelier.com" },
                  { icon: "📞", label: "Phone", value: "+1 (555) 123-4567" },
                  {
                    icon: "📍",
                    label: "Studio",
                    value: "123 Visual Arts District",
                  },
                ].map((contact, index) => (
                  <motion.div
                    key={contact.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 group cursor-pointer"
                  >
                    <span className="text-xl group-hover:scale-110 transition-transform duration-300">
                      {contact.icon}
                    </span>
                    <div>
                      <div className="text-sm opacity-80 font-light">
                        {contact.label}
                      </div>
                      <div className="font-light">{contact.value}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            variants={formVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-[#D4C4B0]/30">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-8 bg-[#8B7355] rounded-full"></div>
                <h3 className="text-2xl font-light text-[#2C2C2C]">
                  Schedule Your Consultation
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-[#6B6153] mb-2 font-light">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-transparent border border-[#D4C4B0] rounded-lg focus:border-[#8B7355] focus:outline-none transition-colors duration-300 font-light"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-[#6B6153] mb-2 font-light">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-transparent border border-[#D4C4B0] rounded-lg focus:border-[#8B7355] focus:outline-none transition-colors duration-300 font-light"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-[#6B6153] mb-2 font-light">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 bg-transparent border border-[#D4C4B0] rounded-lg focus:border-[#8B7355] focus:outline-none transition-colors duration-300 font-light"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-[#6B6153] mb-2 font-light">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 bg-transparent border border-[#D4C4B0] rounded-lg focus:border-[#8B7355] focus:outline-none transition-colors duration-300 font-light"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-[#6B6153] mb-2 font-light">
                    Event Date (If Applicable)
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 bg-transparent border border-[#D4C4B0] rounded-lg focus:border-[#8B7355] focus:outline-none transition-colors duration-300 font-light"
                  />
                </div>

                <div>
                  <label className="block text-sm text-[#6B6153] mb-2 font-light">
                    Tell Us About Your Vision *
                  </label>
                  <textarea
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-transparent border border-[#D4C4B0] rounded-lg focus:border-[#8B7355] focus:outline-none transition-colors duration-300 font-light resize-none"
                    placeholder="Describe your photography needs, vision, and any specific requirements..."
                  />
                </div>

                <div className="flex items-center gap-4 p-4 bg-[#F5F1EA] rounded-lg border border-[#D4C4B0]/30">
                  <input
                    type="checkbox"
                    id="newsletter"
                    className="w-4 h-4 text-[#8B7355] bg-transparent border-[#D4C4B0] rounded focus:ring-[#8B7355] focus:ring-1"
                  />
                  <label
                    htmlFor="newsletter"
                    className="text-sm text-[#6B6153] font-light"
                  >
                    Subscribe to our newsletter for photography tips and
                    exclusive offers
                  </label>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-4 bg-[#2C2C2C] text-[#F5F1EA] text-sm tracking-wider uppercase rounded-lg font-light hover:bg-[#8B7355] transition-all duration-500 group relative overflow-hidden"
                >
                  <span className="relative z-10">
                    Request Free Consultation
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#8B7355] to-[#9C8B7A] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </motion.button>

                <p className="text-center text-xs text-[#9C8B7A] font-light">
                  We&apos;ll contact you within 24 hours to confirm your
                  consultation time
                </p>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Quick Contact Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20 pt-12 border-t border-[#D4C4B0]/30"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h4 className="text-lg font-light text-[#2C2C2C] mb-2">
                Prefer a quick chat?
              </h4>
              <p className="text-[#6B6153] font-light">
                Call us directly at +1 (555) 123-4567
              </p>
            </div>
            <div className="flex gap-4">
              <button className="px-6 py-3 border border-[#D4C4B0] text-[#2C2C2C] text-sm tracking-wider uppercase hover:bg-[#D4C4B0] transition-colors duration-300 font-light">
                Download Brochure
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactSection;
