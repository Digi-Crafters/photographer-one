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

  const filteredServices = filter === 'all' 
    ? data.services 
    : data.services.filter(service => service.id === filter);

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
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
        }} />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <div className="text-sm tracking-[0.4em] text-[#9C8B7A] mb-4 uppercase">
              Our Offerings
            </div>
            <h1 className="text-5xl md:text-7xl font-light text-[#2C2C2C] mb-6">
              Photography
              <span className="block font-serif italic text-[#8B7355] mt-2">Services</span>
            </h1>
            <p className="text-lg text-[#6B6153] max-w-2xl mx-auto font-light leading-relaxed">
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
            className="flex overflow-x-auto gap-2 pb-8 mb-12 scrollbar-hide snap-x"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`flex-shrink-0 px-6 py-3 rounded-full text-sm tracking-wider uppercase transition-all duration-300 snap-center ${
                  filter === category.id
                    ? 'bg-[#8B7355] text-[#F5F1EA]'
                    : 'bg-white/80 text-[#6B6153] hover:bg-white hover:text-[#2C2C2C]'
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
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-[#D4C4B0]/30 hover:border-[#8B7355]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-[#8B7355]/5">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={service.images[0]}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2C2C2C]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#F5F1EA]/95 backdrop-blur-sm px-3 py-1 text-xs text-[#2C2C2C] tracking-[0.2em] uppercase">
                        {service.category}
                      </span>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-[#8B7355] opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-light text-[#2C2C2C] mb-3 group-hover:text-[#8B7355] transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-[#6B6153] font-light text-sm leading-relaxed mb-4 line-clamp-2">
                      {service.description}
                    </p>

                    {/* Stats */}
                    <div className="flex justify-between items-center pt-4 border-t border-[#D4C4B0]/20">
                      <div className="text-center">
                        <div className="text-lg font-light text-[#2C2C2C]">{service.stats.eventsCaptured}</div>
                        <div className="text-xs tracking-[0.15em] text-[#9C8B7A] uppercase">Captured</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-light text-[#2C2C2C]">{service.stats.experience}</div>
                        <div className="text-xs tracking-[0.15em] text-[#9C8B7A] uppercase">Experience</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-light text-[#2C2C2C]">{service.stats.clientSatisfaction}</div>
                        <div className="text-xs tracking-[0.15em] text-[#9C8B7A] uppercase">Satisfaction</div>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="pt-4">
                      <button className="group/link flex items-center gap-2 text-[#8B7355] hover:text-[#2C2C2C] transition-all duration-300 w-full justify-center">
                        <span className="text-sm tracking-[0.2em] uppercase font-light">View Details</span>
                        <motion.div
                          animate={{ x: [0, 4, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="text-lg"
                        >
                          →
                        </motion.div>
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
                  <div className="relative h-96 rounded-2xl overflow-hidden">
                    <Image
                      src={selectedService.images[activeImageIndex]}
                      alt={selectedService.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2C2C2C]/20 to-transparent" />
                    
                    {/* Popular For Tags */}
                    <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                      {selectedService.popularFor.map((tag) => (
                        <span
                          key={tag}
                          className="bg-[#F5F1EA]/95 backdrop-blur-sm px-3 py-1 text-xs text-[#2C2C2C] tracking-[0.1em] uppercase rounded-full"
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
                        className={`relative h-20 rounded-lg overflow-hidden transition-all duration-300 ${
                          activeImageIndex === index ? 'ring-2 ring-[#8B7355]' : 'opacity-70 hover:opacity-100'
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
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-2 h-8 bg-[#8B7355] rounded-full"></div>
                      <div>
                        <div className="text-sm tracking-[0.3em] text-[#9C8B7A] uppercase">
                          {selectedService.category}
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-light text-[#2C2C2C]">
                          {selectedService.title}
                        </h2>
                      </div>
                    </div>
                    
                    <p className="text-lg text-[#6B6153] font-light leading-relaxed mb-6">
                      {selectedService.detailedDescription}
                    </p>

                    {/* Service Meta */}
                    <div className="grid grid-cols-2 gap-6 mb-8">
                      <div className="text-center p-4 bg-[#F5F1EA] rounded-xl">
                        <div className="text-2xl font-light text-[#2C2C2C]">{selectedService.duration}</div>
                        <div className="text-sm tracking-[0.2em] text-[#9C8B7A] uppercase mt-1">Duration</div>
                      </div>
                      <div className="text-center p-4 bg-[#F5F1EA] rounded-xl">
                        <div className="text-2xl font-light text-[#2C2C2C]">{selectedService.deliveryTime}</div>
                        <div className="text-sm tracking-[0.2em] text-[#9C8B7A] uppercase mt-1">Delivery</div>
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h3 className="text-lg font-light text-[#2C2C2C] mb-4">What&apos;s Included</h3>
                    <div className="grid gap-3">
                      {selectedService.features.map((feature, index) => (
                        <motion.div
                          key={feature}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center gap-3 text-[#2C2C2C] font-light"
                        >
                          <div className="w-1.5 h-1.5 bg-[#8B7355] rounded-full flex-shrink-0" />
                          {feature}
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Packages */}
                  <div>
                    <h3 className="text-lg font-light text-[#2C2C2C] mb-6">Packages & Pricing</h3>
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
                          <div className="space-y-2">
                            {pkg.features.map((feature) => (
                              <div key={feature} className="flex items-center gap-3 text-[#6B6153] text-sm font-light">
                                <div className="w-1 h-1 bg-[#9C8B7A] rounded-full flex-shrink-0" />
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
            <h2 className="text-4xl font-light text-[#2C2C2C] mb-4">
              Additional
              <span className="block font-serif italic text-[#8B7355]">Services</span>
            </h2>
            <p className="text-lg text-[#6B6153] max-w-2xl mx-auto font-light">
              Enhance your photography experience with our premium add-on services
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {data.additionalServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-[#D4C4B0]/30 hover:border-[#8B7355]/30 transition-all duration-300"
              >
                <h3 className="text-lg font-light text-[#2C2C2C] mb-3">{service.title}</h3>
                <p className="text-[#6B6153] text-sm font-light mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="text-[#8B7355] font-light">{service.startingPrice}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;