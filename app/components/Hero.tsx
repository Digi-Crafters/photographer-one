"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const primaryImage =
    "https://oakstreetevents.com/wp-content/uploads/2024/10/Picture1.jpg";
  const secondaryImage =
    "https://oakstreetevents.com/wp-content/uploads/2024/10/Picture1.jpg";
  const tertiaryImage =
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1469&auto=format&fit=crop";

  return (
    <div
      ref={containerRef}
      className="relative bg-[#F5F1EA] min-h-screen overflow-hidden"
    >
      {/* Subtle Noise Texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
        }}
      />

      <motion.div style={{ opacity }} className="relative z-10">
        {/* Header */}
        <div className="container mx-auto px-6 pt-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex justify-between items-center"
          ></motion.div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-6 pt-20 pb-32">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-5 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, delay: 0.4 }}
              >
                <div className="text-sm tracking-[0.4em] text-[#9C8B7A] mb-6 uppercase">
                  Since 2019
                </div>

                <h1 className="text-7xl md:text-8xl font-light text-[#2C2C2C] leading-[0.9] mb-8">
                  Timeless
                  <span className="block font-serif italic text-[#8B7355] mt-2">
                    moments,
                  </span>
                  <span className="block mt-2">captured.</span>
                </h1>

                <p className="text-lg text-[#6B6153] leading-relaxed max-w-md font-light">
                  We craft visual narratives that transcend time, weaving
                  emotion and elegance into every frame. Your story, told
                  beautifully.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="flex gap-4 pt-4"
              >
                <a
                  href="/portfolio"
                  className="group relative px-8 py-4 bg-[#2C2C2C] text-[#F5F1EA] text-sm tracking-wider uppercase overflow-hidden"
                >
                  <span className="relative z-10">View Portfolio</span>
                  <div className="absolute inset-0 bg-[#8B7355] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </a>

                <Link
                  href="/#contact"
                  className="px-8 py-4 border border-[#D4C4B0] text-[#2C2C2C] text-sm tracking-wider uppercase hover:bg-[#D4C4B0] transition-colors duration-300"
                >
                  Get in Touch
                </Link>
              </motion.div>
            </div>

            {/* Right Images - Bento Grid Style */}
            <div className="lg:col-span-7 relative h-[700px] hidden lg:block">
              {/* Large Main Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.4, delay: 0.6 }}
                style={{ y }}
                className="absolute top-0 right-0 w-[55%] h-[65%] overflow-hidden"
              >
                <Image
                  src={primaryImage}
                  alt="Featured photography work"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-[#2C2C2C]/5" />


              </motion.div>

              {/* Small Top Left Image */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.4, delay: 0.8 }}
                className="absolute top-[15%] left-0 w-[35%] h-[30%] overflow-hidden"
              >
                <Image
                  src={secondaryImage}
                  alt="Photography detail"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[#8B7355]/10" />
              </motion.div>

              {/* Bottom Left Image */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.4, delay: 1 }}
                className="absolute bottom-0 left-[5%] w-[45%] h-[45%] overflow-hidden"
              >
                <Image
                  src={tertiaryImage}
                  alt="Behind the scenes"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[#2C2C2C]/5" />
              </motion.div>

              {/* Decorative Elements */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: 1.4 }}
                className="absolute top-[50%] left-[40%] w-px h-32 bg-[#D4C4B0]"
              />

              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1, delay: 1.6 }}
                className="absolute bottom-[45%] right-[20%] w-2 h-2 bg-[#8B7355] rounded-full"
              />
            </div>
          </div>
        </div>

        {/* Bottom Info Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="container mx-auto px-6 pb-12"
        >
          <div className="flex flex-wrap justify-between items-center gap-8 pt-8 border-t border-[#D4C4B0]/40">
            <div className="flex gap-16">
              <div>
                <div className="text-3xl font-light text-[#2C2C2C] mb-1">
                  500+
                </div>
                <div className="text-xs tracking-[0.3em] text-[#9C8B7A] uppercase">
                  Events
                </div>
              </div>
              <div>
                <div className="text-3xl font-light text-[#2C2C2C] mb-1">
                  25+
                </div>
                <div className="text-xs tracking-[0.3em] text-[#9C8B7A] uppercase">
                  Awards
                </div>
              </div>
              <div>
                <div className="text-3xl font-light text-[#2C2C2C] mb-1">
                  10+
                </div>
                <div className="text-xs tracking-[0.3em] text-[#9C8B7A] uppercase">
                  Years
                </div>
              </div>
            </div>

            <div className="flex gap-6 text-xs tracking-[0.3em] text-[#9C8B7A]">
              <a href="#" className="hover:text-[#2C2C2C] transition-colors">
                INSTAGRAM
              </a>
              <a href="#" className="hover:text-[#2C2C2C] transition-colors">
                BEHANCE
              </a>
              <a href="#" className="hover:text-[#2C2C2C] transition-colors">
                PINTEREST
              </a>
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-3"
          >
            <div className="text-[0.65rem] tracking-[0.4em] text-[#9C8B7A] uppercase">
              Scroll
            </div>
            <div className="w-px h-16 bg-gradient-to-b from-[#D4C4B0] to-transparent" />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
