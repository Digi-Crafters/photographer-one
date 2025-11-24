"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F5F1EA] flex items-center justify-center px-6 relative overflow-hidden">
      {/* Subtle Noise Texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
        }}
      />

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="absolute top-20 right-20 w-40 h-40 border border-[#D4C4B0]/30 rounded-full"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute bottom-32 left-10 w-32 h-32 border border-[#8B7355]/20"
      />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="absolute top-1/2 right-1/4 w-3 h-3 bg-[#8B7355] rounded-full"
      />

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center max-w-2xl"
      >
        {/* 404 Number */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="mb-8"
        >
          <div className="text-[120px] md:text-[160px] font-light text-[#2C2C2C] leading-none">
            404
          </div>
          <div className="text-sm tracking-[0.3em] text-[#9C8B7A] uppercase mt-4">
            Page Not Found
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-4xl md:text-5xl font-light text-[#2C2C2C] mb-6 leading-tight"
        >
          The frame you&apos;re looking for
          <span className="block font-serif italic text-[#8B7355] mt-3">
            is out of focus
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-lg text-[#6B6153] leading-relaxed mb-12 max-w-md mx-auto font-light"
        >
          We couldn&apos;t find what you were looking for. Let&apos;s refocus and get you
          back to your photographic journey.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/"
            className="group relative px-8 py-4 bg-[#2C2C2C] text-[#F5F1EA] text-sm tracking-wider uppercase overflow-hidden inline-block"
          >
            <span className="relative z-10">Back to Home</span>
            <div className="absolute inset-0 bg-[#8B7355] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
          </Link>

          <Link
            href="/portfolio"
            className="px-8 py-4 border border-[#D4C4B0] text-[#2C2C2C] text-sm tracking-wider uppercase hover:bg-[#D4C4B0]/20 transition-colors duration-300"
          >
            View Portfolio
          </Link>
        </motion.div>

        {/* Footer Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 pt-8 border-t border-[#D4C4B0]/40"
        >
          <p className="text-xs tracking-[0.3em] text-[#9C8B7A] uppercase">
            Error Code: 404
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFound;