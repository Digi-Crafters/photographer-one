// components/ServicesSection.tsx
'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, easeOut } from 'framer-motion';
import Link from 'next/link';

const ServicesSection: React.FC = () => {
  type ServiceKey = 'wedding' | 'prewedding' | 'portrait' | 'family' | 'corporate';
  const [activeCategory, setActiveCategory] = useState<ServiceKey>('wedding');
  const containerRef = useRef<HTMLDivElement>(null);

  const servicesData = {
    wedding: {
      title: "Wedding Photography",
      description: "Timeless documentation of your sacred union. We capture the raw emotions, delicate details, and unforgettable moments that make your day uniquely beautiful.",
      features: ["Full Day Coverage", "Multiple Photographers", "Album Design", "Digital Gallery"],
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1470&auto=format&fit=crop",
      stats: { delivered: "450+", experience: "8 Years", satisfaction: "100%" }
    },
    prewedding: {
      title: "Pre-Wedding Sessions",
      description: "Artistic storytelling that captures your love story before the big day. Intimate moments in breathtaking locations, creating heirlooms for generations.",
      features: ["Location Scouting", "Multiple Outfits", "Golden Hour Shoots", "Digital & Print"],
      image: "https://images.unsplash.com/photo-1550005238-46c657fa5d40?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByZS13ZWRkaW5nJTIwcGhvdG9zaG9vdHxlbnwwfHwwfHx8MA%3D%3D",
      stats: { delivered: "280+", experience: "6 Years", satisfaction: "98%" }
    },
    portrait: {
      title: "Portrait Photography",
      description: "Elegant portraits that reveal the essence of your personality. From professional headshots to artistic personal branding sessions.",
      features: ["Studio & Outdoor", "Professional Retouching", "Multiple Looks", "Fast Delivery"],
      image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=1470&auto=format&fit=crop",
      stats: { delivered: "520+", experience: "10 Years", satisfaction: "99%" }
    },
    family: {
      title: "Family Stories",
      description: "Capture the beautiful chaos and quiet moments of family life. Authentic sessions that tell your family's unique story through generations.",
      features: ["In-Home Sessions", "Multiple Generations", "Lifestyle Approach", "Custom Albums"],
      image: "https://plus.unsplash.com/premium_photo-1661475944092-9561bd954235?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGZhbWlseXxlbnwwfHwwfHx8MA%3D%3D",
      stats: { delivered: "380+", experience: "7 Years", satisfaction: "100%" }
    },
    corporate: {
      title: "Corporate Events",
      description: "Professional event coverage that captures your company's culture and achievements. From executive portraits to large-scale corporate gatherings.",
      features: ["Brand Alignment", "Fast Turnaround", "Team Portraits", "Digital Archive"],
      image: "https://plus.unsplash.com/premium_photo-1664474653221-8412b8dfca3e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29ycG9yYXRlJTIwZXZlbnRzfGVufDB8fDB8fHww",
      stats: { delivered: "190+", experience: "5 Years", satisfaction: "97%" }
    }
  };

  const categories = [
    { id: 'wedding', label: 'Wedding', icon: '💒' },
    { id: 'prewedding', label: 'Pre-Wedding', icon: '🌅' },
    { id: 'portrait', label: 'Portrait', icon: '👤' },
    { id: 'family', label: 'Family', icon: '👨‍👩‍👧‍👦' },
    { id: 'corporate', label: 'Corporate', icon: '🏢' }
  ];

  // Make the small arrow inside the "Explore All Services" CTA navigate to /contact

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
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

  const contentVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: easeOut
      }
    }
  };

  return (
    <div className="relative bg-[#F5F1EA] py-32 overflow-hidden" ref={containerRef}>
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
      }} />
      
      {/* Animated Background Shapes */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        className="absolute -top-48 -right-48 w-96 h-96 border border-[#D4C4B0]/10 rounded-full"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-32 -left-32 w-64 h-64 border border-[#8B7355]/10 rounded-full"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="text-sm tracking-[0.4em] text-[#9C8B7A] mb-4 uppercase">
            Our Expertise
          </div>
          <h2 className="text-5xl md:text-6xl font-light text-[#2C2C2C] mb-6">
            Specialized
            <span className="block font-serif italic text-[#8B7355] mt-2">Services</span>
          </h2>
          <p className="text-lg text-[#6B6153] max-w-2xl mx-auto font-light leading-relaxed">
            Tailored photography experiences designed to capture your unique story 
            with artistic vision and technical precision.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column - Categories */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-4 space-y-4"
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                variants={itemVariants}
                onClick={() => setActiveCategory(category.id as ServiceKey)}
                className={`w-full text-left p-6 rounded-2xl transition-all duration-500 group ${
                  activeCategory === category.id 
                    ? 'bg-white/80 backdrop-blur-sm border border-[#8B7355]/20 shadow-lg' 
                    : 'bg-transparent border border-transparent hover:bg-white/40'
                }`}
              >
                <div className="flex items-center gap-4">
                  <motion.span
                    animate={{ scale: activeCategory === category.id ? 1.2 : 1 }}
                    className="text-2xl"
                  >
                    {category.icon}
                  </motion.span>
                  <div className="flex-1">
                    <h3 className={`text-lg font-light transition-colors duration-300 ${
                      activeCategory === category.id ? 'text-[#8B7355]' : 'text-[#2C2C2C]'
                    }`}>
                      {category.label}
                    </h3>
                    <div className={`h-px mt-2 transition-all duration-500 ${
                      activeCategory === category.id 
                        ? 'w-full bg-[#8B7355]' 
                        : 'w-0 bg-[#D4C4B0] group-hover:w-full'
                    }`} />
                  </div>
                  <motion.div
                    animate={{ x: activeCategory === category.id ? 0 : -10, opacity: activeCategory === category.id ? 1 : 0 }}
                    className="w-2 h-2 bg-[#8B7355] rounded-full"
                  />
                </div>
              </motion.button>
            ))}

            {/* CTA Card */}
            <motion.div
              variants={itemVariants}
              className="mt-8 p-6 bg-gradient-to-br from-[#8B7355] to-[#9C8B7A] rounded-2xl text-[#F5F1EA]"
            >
              <h3 className="text-xl font-light mb-3">Ready to Create?</h3>
              <p className="text-sm font-light mb-4 opacity-90">
                Let&apos;s discuss your vision and create something extraordinary together.
              </p>
              <Link href="/services" className="group/link inline-flex items-center gap-2 text-sm tracking-[0.2em] uppercase">
                Explore All Services
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="text-lg"
                >
                  →
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column - Content */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="grid lg:grid-cols-2 gap-8 items-start"
              >
                {/* Image */}
                <motion.div
                  variants={imageVariants}
                  className="relative h-96 lg:h-full rounded-2xl overflow-hidden"
                >
                  <Image
                    src={servicesData[activeCategory].image}
                    alt={servicesData[activeCategory].title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2C2C2C]/20 to-transparent" />
                  
                  {/* Stats Overlay */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="grid grid-cols-3 gap-4 bg-[#F5F1EA]/95 backdrop-blur-sm p-4 rounded-xl">
                      {Object.entries(servicesData[activeCategory].stats).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-lg font-light text-[#2C2C2C]">{value}</div>
                          <div className="text-xs tracking-[0.15em] text-[#9C8B7A] uppercase mt-1">
                            {key}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div
                  variants={contentVariants}
                  className="space-y-6"
                >
                  <div>
                    <h3 className="text-3xl font-light text-[#2C2C2C] mb-4">
                      {servicesData[activeCategory].title}
                    </h3>
                    <p className="text-[#6B6153] font-light leading-relaxed">
                      {servicesData[activeCategory].description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-3">
                    <h4 className="text-sm tracking-[0.3em] text-[#9C8B7A] uppercase font-light">
                      Included Features
                    </h4>
                    <div className="grid gap-2">
                      {servicesData[activeCategory].features.map((feature, index) => (
                        <motion.div
                          key={feature}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center gap-3 text-[#2C2C2C] font-light"
                        >
                          <div className="w-1.5 h-1.5 bg-[#8B7355] rounded-full" />
                          {feature}
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-4">
                    <Link 
                      href="/booking" 
                      className="group relative px-6 py-3 bg-[#2C2C2C] text-[#F5F1EA] text-sm tracking-wider uppercase overflow-hidden rounded-lg"
                    >
                      <span className="relative z-10">Book Session</span>
                      <div className="absolute inset-0 bg-[#8B7355] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                    </Link>
                    
                    <Link 
                      href="/services" 
                      className="px-6 py-3 border border-[#D4C4B0] text-[#2C2C2C] text-sm tracking-wider uppercase hover:bg-[#D4C4B0] transition-colors duration-300 rounded-lg font-light"
                    >
                      Learn More
                    </Link>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-20 pt-12 border-t border-[#D4C4B0]/30"
        >
          <div className="inline-flex flex-col items-center gap-6">
            <div className="text-sm tracking-[0.3em] text-[#9C8B7A] uppercase">
              Ready to Begin Your Journey?
            </div>
            <Link 
              href="/services" 
              className="group relative px-12 py-4 border border-[#D4C4B0] text-[#2C2C2C] text-sm tracking-wider uppercase overflow-hidden font-light"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-[#F5F1EA]">
                Discover All Services
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#8B7355] to-[#9C8B7A] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesSection; 