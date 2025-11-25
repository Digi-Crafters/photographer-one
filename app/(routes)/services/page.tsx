// app/services/page.tsx
'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence, easeOut } from 'framer-motion';
import data from "./../../data/services.json";

const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState(data.services[0]);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [filter, setFilter] = useState('all');
  const scrollRef = useRef<HTMLDivElement>(null);

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'wedding', label: 'Wedding' },
    { id: 'prewedding', label: 'Pre-Wedding' },
    { id: 'portrait', label: 'Portrait' },
    { id: 'family', label: 'Family' },
    { id: 'corporate', label: 'Corporate' }
  ];

  // Updated image mapping for better relevance
  const serviceImages = {
    wedding: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1529519195486-16945f0fb37f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80",
      "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    ],
    prewedding: [
      "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1550005238-46c657fa5d40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    ],
    portrait: [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80"
    ],
    family: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1511988617509-a57c8a288659?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    ],
    engagement: [
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1556082598-96a4de8b8882?q=80&w=1464&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1476&auto=format&fit=crop"
    ],
    corporate: [
      "https://images.unsplash.com/photo-1588979355313-6711a095465f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFtaWx5JTIwcGhvdG98ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    ]
  };

  // Enhance services data with better images
  const enhancedServices = data.services.map(service => ({
    ...service,
    images: serviceImages[service.id as keyof typeof serviceImages] || service.images
  }));

  const filteredServices = filter === 'all' 
    ? enhancedServices 
    : enhancedServices.filter(service => service.id === filter);

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: easeOut
      }
    }
  };

  const scrollToDetails = () => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F5F1EA]">
      {/* Header Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
        }} />
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-px h-32 bg-gradient-to-b from-transparent via-[#D4C4B0] to-transparent"></div>
        <div className="absolute bottom-20 right-10 w-3 h-3 bg-[#8B7355] rounded-full"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="text-sm tracking-[0.4em] text-[#9C8B7A] mb-4 uppercase font-light">
              Our Expertise
            </div>
            <h1 className="text-5xl md:text-7xl font-light text-[#2C2C2C] mb-6">
              Photography
              <span className="block font-serif italic text-[#8B7355] mt-2">Services</span>
            </h1>
            <p className="text-lg text-[#6B6153] font-light leading-relaxed">
              Comprehensive photography solutions tailored to capture every special moment 
              of your life&apos;s journey with artistic excellence and emotional depth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-3 pb-12 mb-8"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-3 rounded-full text-sm tracking-wider uppercase transition-all duration-300 border ${
                  filter === category.id
                    ? 'bg-[#8B7355] text-[#F5F1EA] border-[#8B7355] shadow-lg'
                    : 'bg-white/80 text-[#6B6153] border-[#D4C4B0] hover:bg-white hover:border-[#8B7355] hover:text-[#2C2C2C]'
                }`}
              >
                {category.label}
              </button>
            ))}
          </motion.div>

          {/* Services Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredServices.map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="group cursor-pointer"
                onClick={() => {
                  setSelectedService(service);
                  setActiveImageIndex(0);
                  setTimeout(scrollToDetails, 100);
                }}
              >
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden border border-[#D4C4B0]/30 hover:border-[#8B7355]/40 transition-all duration-500 hover:shadow-xl hover:shadow-[#8B7355]/10 h-full flex flex-col">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={service.images[0]}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2C2C2C]/40 to-transparent" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#F5F1EA]/95 backdrop-blur-sm px-3 py-1.5 text-xs text-[#2C2C2C] tracking-[0.2em] uppercase rounded-full font-medium">
                        {service.category}
                      </span>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-[#8B7355] opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-normal text-[#2C2C2C] mb-3 group-hover:text-[#8B7355] transition-colors duration-300 leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-[#6B6153] font-light text-sm leading-relaxed mb-4 flex-1">
                      {service.description}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#D4C4B0]/30">
                      <div className="text-center">
                        <div className="text-lg font-light text-[#2C2C2C]">{service.stats.eventsCaptured}</div>
                        <div className="text-xs tracking-[0.15em] text-[#9C8B7A] uppercase mt-1">Events</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-light text-[#2C2C2C]">{service.stats.experience}</div>
                        <div className="text-xs tracking-[0.15em] text-[#9C8B7A] uppercase mt-1">Experience</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-light text-[#2C2C2C]">{service.stats.clientSatisfaction}</div>
                        <div className="text-xs tracking-[0.15em] text-[#9C8B7A] uppercase mt-1">Satisfaction</div>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="pt-4 mt-auto">
                      <button className="group/link flex items-center gap-2 text-[#8B7355] hover:text-[#2C2C2C] transition-all duration-300 w-full justify-center py-2">
                        <span className="text-sm tracking-[0.2em] uppercase font-light">View Details</span>
                        <motion.span
                          animate={{ x: [0, 4, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="text-lg"
                        >
                          →
                        </motion.span>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Detailed Service View */}
      <section ref={scrollRef} className="py-20 bg-white/50">
        <div className="container mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedService.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="max-w-6xl mx-auto"
            >
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Image Gallery */}
                <div className="space-y-4">
                  {/* Main Image */}
                  <div className="relative h-96 rounded-2xl overflow-hidden group">
                    <Image
                      src={selectedService.images[activeImageIndex]}
                      alt={selectedService.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2C2C2C]/20 to-transparent" />
                    
                    {/* Popular For Tags */}
                    <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                      {selectedService.popularFor.map((tag) => (
                        <span
                          key={tag}
                          className="bg-[#F5F1EA]/95 backdrop-blur-sm px-3 py-1.5 text-xs text-[#2C2C2C] tracking-[0.1em] uppercase rounded-full font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Thumbnail Grid */}
                  <div className="grid grid-cols-4 gap-3">
                    {selectedService.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveImageIndex(index)}
                        className={`relative h-20 rounded-lg overflow-hidden transition-all duration-300 border-2 ${
                          activeImageIndex === index 
                            ? 'border-[#8B7355] scale-105' 
                            : 'border-transparent opacity-70 hover:opacity-100 hover:border-[#D4C4B0]'
                        }`}
                      >
                        <Image
                          src={image}
                          alt={`${selectedService.title} ${index + 1}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 25vw, 12.5vw"
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Service Details */}
                <div className="space-y-8">
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-2 h-10 bg-[#8B7355] rounded-full"></div>
                      <div>
                        <div className="text-sm tracking-[0.3em] text-[#9C8B7A] uppercase font-light">
                          {selectedService.category}
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-light text-[#2C2C2C] leading-tight">
                          {selectedService.title}
                        </h2>
                      </div>
                    </div>
                    
                    <p className="text-lg text-[#6B6153] font-light leading-relaxed mb-8">
                      {selectedService.detailedDescription}
                    </p>

                    {/* Service Meta */}
                    <div className="grid grid-cols-2 gap-6 mb-8">
                      <div className="text-center p-6 bg-[#F5F1EA] rounded-xl border border-[#D4C4B0]/30">
                        <div className="text-2xl font-light text-[#2C2C2C]">{selectedService.duration}</div>
                        <div className="text-sm tracking-[0.2em] text-[#9C8B7A] uppercase mt-2 font-light">Duration</div>
                      </div>
                      <div className="text-center p-6 bg-[#F5F1EA] rounded-xl border border-[#D4C4B0]/30">
                        <div className="text-2xl font-light text-[#2C2C2C]">{selectedService.deliveryTime}</div>
                        <div className="text-sm tracking-[0.2em] text-[#9C8B7A] uppercase mt-2 font-light">Delivery</div>
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h3 className="text-xl font-light text-[#2C2C2C] mb-6">What&apos;s Included</h3>
                    <div className="grid gap-4">
                      {selectedService.features.map((feature, index) => (
                        <motion.div
                          key={feature}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center gap-4 p-3 bg-white/50 rounded-lg border border-[#D4C4B0]/30"
                        >
                          <div className="w-2 h-2 bg-[#8B7355] rounded-full flex-shrink-0" />
                          <span className="text-[#2C2C2C] font-light">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Packages */}
                  <div>
                    <h3 className="text-xl font-light text-[#2C2C2C] mb-6">Packages & Pricing</h3>
                    <div className="space-y-4">
                      {selectedService.packages.map((pkg, index) => (
                        <motion.div
                          key={pkg.name}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-[#D4C4B0]/30 hover:border-[#8B7355]/30 transition-all duration-300"
                        >
                          <div className="flex justify-between items-start mb-4">
                            <h4 className="text-xl font-light text-[#2C2C2C]">{pkg.name}</h4>
                            <div className="text-2xl font-light text-[#8B7355]">{pkg.price}</div>
                          </div>
                          <div className="space-y-3">
                            {pkg.features.map((feature) => (
                              <div key={feature} className="flex items-center gap-3 text-[#6B6153] text-sm font-light">
                                <div className="w-1.5 h-1.5 bg-[#9C8B7A] rounded-full flex-shrink-0" />
                                {feature}
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex gap-4 pt-6">
                    <Link
                      href="/contact"
                      className="flex-1 text-center py-4 bg-[#2C2C2C] text-[#F5F1EA] text-sm tracking-wider uppercase rounded-lg font-light hover:bg-[#8B7355] transition-all duration-500"
                    >
                      Book This Service
                    </Link>
                    <Link
                      href="/portfolio"
                      className="flex-1 text-center py-4 border border-[#D4C4B0] text-[#2C2C2C] text-sm tracking-wider uppercase rounded-lg font-light hover:bg-[#D4C4B0] transition-colors duration-300"
                    >
                      View Portfolio
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-[#F5F1EA]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="text-sm tracking-[0.4em] text-[#9C8B7A] mb-4 uppercase font-light">
              Premium Add-ons
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-[#2C2C2C] mb-6">
              Additional
              <span className="block font-serif italic text-[#8B7355] mt-2">Services</span>
            </h2>
            <p className="text-lg text-[#6B6153] max-w-2xl mx-auto font-light">
              Enhance your photography experience with our premium add-on services
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {data.additionalServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group text-center p-8 bg-white/90 backdrop-blur-sm rounded-2xl border border-[#D4C4B0]/30 hover:border-[#8B7355]/40 transition-all duration-500 hover:shadow-xl hover:shadow-[#8B7355]/5"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#8B7355] to-[#9C8B7A] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-500">
                  <span className="text-white text-lg">+</span>
                </div>
                <h3 className="text-lg font-normal text-[#2C2C2C] mb-3 group-hover:text-[#8B7355] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-[#6B6153] text-sm font-light mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="text-[#8B7355] font-light text-lg">{service.startingPrice}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;