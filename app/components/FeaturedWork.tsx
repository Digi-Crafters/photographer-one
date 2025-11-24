// components/FeaturedWork.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import { easeOut, motion } from 'framer-motion';

const FeaturedWork: React.FC = () => {
  const featuredProjects = [
    {
      id: 1,
      title: "Ethereal Wedding Collection",
      description: "A timeless celebration captured through artistic lenses and emotional storytelling across multiple venues and cultural ceremonies.",
      category: "Wedding",
      year: "2024",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1470&auto=format&fit=crop",
      stats: { images: "450+", duration: "12h", coverage: "Full Day" },
      featured: true
    },
    {
      id: 2,
      title: "Urban Pre-Wedding Series",
      description: "Modern love story set against the backdrop of city architecture and golden hour light painting.",
      category: "Pre-Wedding",
      year: "2024",
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1470&auto=format&fit=crop",
      stats: { images: "120+", duration: "4h", coverage: "Two Locations" },
      featured: false
    },
    {
      id: 3,
      title: "Intimate Family Portraits",
      description: "Generational bonds and authentic connections captured in natural home settings and outdoor environments.",
      category: "Family",
      year: "2023",
      image: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?q=80&w=1471&auto=format&fit=crop",
      stats: { images: "85+", duration: "2h", coverage: "Home Session" },
      featured: false
    },
    {
      id: 4,
      title: "Corporate Leadership Series",
      description: "Professional portraits that convey authority and approachability for modern executives and teams.",
      category: "Corporate",
      year: "2024",
      image: "https://media.istockphoto.com/id/1486287149/photo/group-of-multiracial-asian-business-participants-casual-chat-after-successful-conference-event.webp?a=1&b=1&s=612x612&w=0&k=20&c=w6LTgtP8zZnJgg9g7jemKYcmAWjv4lxNlPyZ-PjVwkE=",
      stats: { images: "60+", duration: "3h", coverage: "Studio" },
      featured: false
    },
    {
      id: 5,
      title: "Golden Hour Maternity",
      description: "Celebrating the journey of motherhood with soft, ethereal imagery in natural landscapes.",
      category: "Maternity",
      year: "2024",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1364&auto=format&fit=crop",
      stats: { images: "75+", duration: "2.5h", coverage: "Outdoor" },
      featured: false
    },
    {
      id: 6,
      title: "Destination Celebration",
      description: "International wedding coverage blending local culture with timeless photographic artistry.",
      category: "Destination",
      year: "2023",
      image: "https://images.unsplash.com/photo-1708133302586-2ffca3db5553?q=80&w=2085&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      stats: { images: "600+", duration: "3 Days", coverage: "Full Event" },
      featured: true
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: easeOut
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 1.1, opacity: 0 },
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
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
      }} />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-px h-32 bg-[#D4C4B0]/30"></div>
      <div className="absolute bottom-20 right-10 w-2 h-2 bg-[#8B7355] rounded-full"></div>
      <div className="absolute top-1/3 right-16 w-1 h-1 bg-[#9C8B7A] rounded-full"></div>
      <div className="absolute bottom-1/4 left-20 w-px h-24 bg-gradient-to-b from-transparent via-[#D4C4B0]/20 to-transparent"></div>

      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-24"
        >
          <div className="text-sm tracking-[0.4em] text-[#9C8B7A] mb-4 uppercase">
            Curated Selection
          </div>
          <h2 className="text-5xl md:text-6xl font-light text-[#2C2C2C] mb-6">
            Featured
            <span className="block font-serif italic text-[#8B7355] mt-2">Work</span>
          </h2>
          <p className="text-lg text-[#6B6153] max-w-2xl mx-auto font-light leading-relaxed">
            A curated collection of our most cherished projects, each telling a unique story 
            through the lens of artistic vision and technical excellence.
          </p>
        </motion.div>

        {/* Featured Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {featuredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className={`group relative ${
                project.featured ? 'lg:col-span-2 xl:col-span-1 lg:row-span-2' : ''
              }`}
            >
              {/* Card Container */}
              <div className="relative h-full bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-[#D4C4B0]/30 hover:border-[#D4C4B0]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#8B7355]/5">
                
                {/* Image Container */}
                <div className="relative overflow-hidden">
                  <motion.div
                    variants={imageVariants}
                    className={`relative ${
                      project.featured ? 'h-80' : 'h-64'
                    } overflow-hidden`}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2C2C2C]/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-6 left-6">
                      <span className="bg-[#F5F1EA]/95 backdrop-blur-sm px-4 py-2 text-sm text-[#2C2C2C] tracking-[0.2em] uppercase border border-[#D4C4B0]/30">
                        {project.category}
                      </span>
                    </div>

                    {/* Year Badge */}
                    <div className="absolute top-6 right-6">
                      <span className="bg-[#8B7355] px-3 py-1 text-sm text-[#F5F1EA] tracking-widest font-light">
                        {project.year}
                      </span>
                    </div>

                    {/* Featured Star */}
                    {project.featured && (
                      <div className="absolute bottom-6 left-6 flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#8B7355] rounded-full animate-pulse"></div>
                        <span className="text-sm text-[#F5F1EA] tracking-[0.2em] uppercase">Featured</span>
                      </div>
                    )}
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-light text-[#2C2C2C] group-hover:text-[#8B7355] transition-colors duration-300 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-[#6B6153] font-light leading-relaxed text-sm">
                    {project.description}
                  </p>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#D4C4B0]/20">
                    {Object.entries(project.stats).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-base font-light text-[#2C2C2C]">{value}</div>
                        <div className="text-xs tracking-[0.15em] text-[#9C8B7A] uppercase mt-1 font-light">
                          {key}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* View Project Link */}
                  <div className="pt-4">
                    <button className="group/link flex items-center gap-3 text-[#8B7355] hover:text-[#2C2C2C] transition-all duration-300">
                      <span className="text-sm tracking-[0.2em] uppercase font-light">Explore</span>
                      <div className="relative overflow-hidden">
                        <div className="w-6 h-px bg-[#8B7355] group-hover/link:bg-[#2C2C2C] transition-colors duration-300" />
                        <div className="absolute inset-0 w-0 h-px bg-[#2C2C2C] group-hover/link:w-6 transition-all duration-300 delay-100" />
                      </div>
                    </button>
                  </div>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#8B7355]/10 transition-all duration-500 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="relative inline-flex">
            <button className="group relative px-12 py-4 border border-[#D4C4B0] text-[#2C2C2C] text-sm tracking-wider uppercase overflow-hidden font-light">
              <span className="relative z-10 transition-colors duration-300 group-hover:text-[#F5F1EA]">
                Explore Full Portfolio
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#8B7355] to-[#9C8B7A] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
            </button>
            
            {/* Decorative corners */}
            <div className="absolute -top-1 -left-1 w-3 h-3 border-t border-l border-[#8B7355] opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200" />
            <div className="absolute -top-1 -right-1 w-3 h-3 border-t border-r border-[#8B7355] opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200" />
            <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b border-l border-[#8B7355] opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200" />
            <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b border-r border-[#8B7355] opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FeaturedWork;