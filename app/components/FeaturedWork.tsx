// components/FeaturedWork.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import { easeOut, motion } from 'framer-motion';
import Link from 'next/link';

const FeaturedWork: React.FC = () => {
  const featuredProjects = [
    {
      id: 1,
      title: "Ethereal Wedding Collection",
      description: "A timeless celebration captured through artistic lenses and emotional storytelling across multiple venues and cultural ceremonies.",
      category: "Wedding",
      year: "2024",
      image: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
      stats: { images: "450+", duration: "12h", coverage: "Full Day" },
      featured: true
    },
    {
      id: 2,
      title: "Urban Pre-Wedding Series",
      description: "Modern love story set against the backdrop of city architecture and golden hour light painting.",
      category: "Pre-Wedding",
      year: "2024",
      image: "https://images.unsplash.com/photo-1621621667797-e06afc217fb0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHByZSUyMHdlZGRpbmd8ZW58MHx8MHx8fDA%3D",
      stats: { images: "120+", duration: "4h", coverage: "Two Locations" },
      featured: false
    },
    {
      id: 3,
      title: "Intimate Family Portraits",
      description: "Generational bonds and authentic connections captured in natural home settings and outdoor environments.",
      category: "Family",
      year: "2023",
      image: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
      stats: { images: "85+", duration: "2h", coverage: "Home Session" },
      featured: false
    },
    {
      id: 4,
      title: "Corporate Leadership Series",
      description: "Professional portraits that convey authority and approachability for modern executives and teams.",
      category: "Corporate",
      year: "2024",
      image: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29ycG9yYXRlfGVufDB8fDB8fHww",
      stats: { images: "60+", duration: "3h", coverage: "Studio" },
      featured: false
    },
    {
      id: 5,
      title: "Golden Hour Maternity",
      description: "Celebrating the journey of motherhood with soft, ethereal imagery in natural landscapes.",
      category: "Maternity",
      year: "2024",
      image: "https://plus.unsplash.com/premium_photo-1664053011505-13375aee2971?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWF0ZXJuaXR5fGVufDB8fDB8fHww",
      stats: { images: "75+", duration: "2.5h", coverage: "Outdoor" },
      featured: false
    },
    {
      id: 6,
      title: "Destination Celebration",
      description: "International wedding coverage blending local culture with timeless photographic artistry.",
      category: "Destination",
      year: "2023",
      image: "https://images.unsplash.com/photo-1625486119830-6e05043a6910?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGRlc3RpbmF0aW9uJTIwd2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
      stats: { images: "600+", duration: "3 Days", coverage: "Full Event" },
      featured: true
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: easeOut
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 1.2, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: easeOut
      }
    }
  };

  return (
    <div className="relative bg-[#F5F1EA] py-32 overflow-hidden">
      {/* Enhanced Background Texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
      }} />
      
      {/* Animated Background Elements */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute top-20 left-10 w-px h-32 bg-gradient-to-b from-transparent via-[#D4C4B0] to-transparent"
      ></motion.div>
      <motion.div 
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute bottom-20 right-10 w-3 h-3 bg-[#8B7355] rounded-full"
      ></motion.div>
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute top-1/3 right-16 w-1 h-1 bg-[#9C8B7A] rounded-full"
      ></motion.div>

      <div className="container mx-auto px-6">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-24 relative"
        >
          {/* Decorative Line */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4C4B0] to-transparent -translate-y-1/2"></div>
          
          <div className="inline-block relative bg-[#F5F1EA] px-8">
            <div className="text-sm tracking-[0.4em] text-[#9C8B7A] mb-4 uppercase font-light">
              Curated Selection
            </div>
            <h2 className="text-5xl md:text-7xl font-light text-[#2C2C2C] mb-6">
              Featured
              <span className="block font-serif italic text-[#8B7355] mt-2">Work</span>
            </h2>
            <p className="text-lg text-[#6B6153] max-w-2xl mx-auto font-light leading-relaxed">
              A curated collection of our most cherished projects, each telling a unique story 
              through the lens of artistic vision and technical excellence.
            </p>
          </div>
        </motion.div>

        {/* Enhanced Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className={`group relative ${
                project.featured ? 'md:col-span-2 xl:col-span-1' : ''
              }`}
            >
              {/* Enhanced Card Container */}
              <div className="relative h-full bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden border border-[#D4C4B0]/20 hover:border-[#8B7355]/30 transition-all duration-700 hover:shadow-2xl hover:shadow-[#8B7355]/10">
                
                {/* Enhanced Image Container */}
                <div className="relative overflow-hidden">
                  <motion.div
                    variants={imageVariants}
                    className={`relative ${
                      project.featured ? 'h-80' : 'h-72'
                    } overflow-hidden`}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={index < 2}
                    />
                    
                    {/* Enhanced Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2C2C2C]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700" />
                    
                    {/* Enhanced Category Badge */}
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                      className="absolute top-6 left-6"
                    >
                      <span className="bg-[#F5F1EA]/95 backdrop-blur-sm px-4 py-2 text-sm text-[#2C2C2C] tracking-[0.2em] uppercase border border-[#D4C4B0]/30 font-light">
                        {project.category}
                      </span>
                    </motion.div>

                    {/* Enhanced Year Badge */}
                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                      className="absolute top-6 right-6"
                    >
                      <span className="bg-[#8B7355] px-4 py-2 text-sm text-[#F5F1EA] tracking-widest font-light rounded-full">
                        {project.year}
                      </span>
                    </motion.div>

                    {/* Enhanced Featured Badge */}
                    {project.featured && (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                        className="absolute bottom-6 left-6 flex items-center gap-3 bg-[#2C2C2C]/80 backdrop-blur-sm px-4 py-2 rounded-full"
                      >
                        <div className="w-2 h-2 bg-[#8B7355] rounded-full animate-pulse"></div>
                        <span className="text-sm text-[#F5F1EA] tracking-[0.2em] uppercase font-light">Featured</span>
                      </motion.div>
                    )}

                    {/* Hover Overlay Content */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="bg-[#2C2C2C]/80 backdrop-blur-sm text-[#F5F1EA] px-6 py-3 rounded-full text-sm tracking-widest uppercase transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        View Project
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Enhanced Content */}
                <div className="p-8 space-y-6">
                  <div>
                    <h3 className="text-2xl font-light text-[#2C2C2C] group-hover:text-[#8B7355] transition-colors duration-500 leading-tight mb-3">
                      {project.title}
                    </h3>
                    <p className="text-[#6B6153] font-light leading-relaxed text-base">
                      {project.description}
                    </p>
                  </div>

                  {/* Enhanced Stats Grid */}
                  <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[#D4C4B0]/30">
                    {Object.entries(project.stats).map(([key, value]) => (
                      <div key={key} className="text-center group/stat">
                        <div className="text-xl font-light text-[#2C2C2C] mb-1 group-hover/stat:text-[#8B7355] transition-colors duration-300">
                          {value}
                        </div>
                        <div className="text-xs tracking-[0.15em] text-[#9C8B7A] uppercase font-light">
                          {key}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Enhanced Hover Border Effect */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#8B7355]/20 transition-all duration-700 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mt-24"
        >
          <div className="relative inline-flex group">
            <Link 
              href="/portfolio" 
              className="relative px-16 py-5 bg-transparent border-2 border-[#8B7355] text-[#2C2C2C] text-sm tracking-widest uppercase overflow-hidden font-light transition-all duration-500 hover:text-[#F5F1EA]"
            >
              <span className="relative z-10">Explore Full Portfolio</span>
              
              {/* Hover Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#8B7355] to-[#9C8B7A] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
              
              {/* Animated Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#8B7355] group-hover:scale-105 transition-all duration-500 rounded-lg" />
            </Link>
            
            {/* Animated decorative elements */}
            <motion.div 
              className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-[#8B7355] opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200"
              whileHover={{ scale: 1.2 }}
            />
            <motion.div 
              className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-[#8B7355] opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200"
              whileHover={{ scale: 1.2 }}
            />
            <motion.div 
              className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-[#8B7355] opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200"
              whileHover={{ scale: 1.2 }}
            />
            <motion.div 
              className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-[#8B7355] opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200"
              whileHover={{ scale: 1.2 }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FeaturedWork;