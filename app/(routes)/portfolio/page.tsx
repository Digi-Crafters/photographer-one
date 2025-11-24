// app/portfolio/page.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence, easeOut } from 'framer-motion';
import data from '../../data/portfolio.json';

// Type definitions
interface ProjectStats {
  imagesDelivered?: number;
  coverageDays?: number;
  photographers?: number;
  clientRating?: number;
  [key: string]: string | number | undefined;
}

interface Project {
  id: string;
  title: string;
  category?: string;
  location: string;
  description: string;
  detailedDescription?: string;
  images: string[];
  highlights: string[];
  stats?: ProjectStats;
  tags?: string[];
  year: string;
  featured?: boolean;
}

interface PortfolioData {
  portfolio: {
    featuredProjects: Project[];
    projectsByCategory: {
      wedding: Project[];
      preWedding: Project[];
      portrait: Project[];
      family: Project[];
      corporate: Project[];
      maternity: Project[];
      festival: Project[];
    };
    portfolioStats: {
      totalProjects: number;
      weddingsCaptured: number;
      preWeddingSessions: number;
      corporateProjects: number;
      yearsExperience: number;
      clientSatisfaction: string;
      citiesPhotographed: number;
    };
    awards: {
      year: string;
      award: string;
      project: string;
    }[];
  };
}

interface Category {
  id: string;
  label: string;
  count: number;
}

interface StatItem {
  number: string | number;
  label: string;
}

const PortfolioPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  const portfolioData = data as PortfolioData;
  const { featuredProjects, projectsByCategory, portfolioStats, awards } = portfolioData.portfolio;

  const categories: Category[] = [
    { id: 'all', label: 'All Work', count: portfolioStats.totalProjects },
    { id: 'wedding', label: 'Weddings', count: portfolioStats.weddingsCaptured },
    { id: 'preWedding', label: 'Pre-Wedding', count: portfolioStats.preWeddingSessions },
    { id: 'portrait', label: 'Portraits', count: 34 },
    { id: 'family', label: 'Family', count: 28 },
    { id: 'corporate', label: 'Corporate', count: portfolioStats.corporateProjects },
    { id: 'maternity', label: 'Maternity', count: 18 },
    { id: 'festival', label: 'Festival', count: 12 }
  ];

  const allProjects: Project[] = [
    ...featuredProjects,
    ...projectsByCategory.wedding,
    ...projectsByCategory.preWedding,
    ...projectsByCategory.portrait,
    ...projectsByCategory.family,
    ...projectsByCategory.corporate,
    ...projectsByCategory.maternity,
    ...projectsByCategory.festival
  ];

  const filteredProjects: Project[] = selectedCategory === 'all' 
    ? allProjects
    : selectedCategory === 'wedding' ? projectsByCategory.wedding
    : selectedCategory === 'preWedding' ? projectsByCategory.preWedding
    : selectedCategory === 'portrait' ? projectsByCategory.portrait
    : selectedCategory === 'family' ? projectsByCategory.family
    : selectedCategory === 'corporate' ? projectsByCategory.corporate
    : selectedCategory === 'maternity' ? projectsByCategory.maternity
    : projectsByCategory.festival;

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    setActiveImageIndex(0);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  useEffect(() => {
    if (selectedProject) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
    // No cleanup needed when there's no selected project
    return;
  }, [selectedProject]);

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

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: easeOut
      }
    }
  };

  const statsData: StatItem[] = [
    { number: portfolioStats.totalProjects, label: 'Projects Completed' },
    { number: portfolioStats.yearsExperience, label: 'Years Experience' },
    { number: portfolioStats.clientSatisfaction, label: 'Client Satisfaction' },
    { number: portfolioStats.citiesPhotographed, label: 'Cities Covered' }
  ];

  return (
    <div className="min-h-screen bg-[#F5F1EA]">
      {/* Header with Navigation */}
      <header className="sticky top-0 z-50 bg-[#F5F1EA]/95 backdrop-blur-sm border-b border-[#D4C4B0]/30">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">           
            <nav className="flex items-center gap-6">
              <Link 
                href="/services" 
                className="text-sm text-[#6B6153] hover:text-[#2C2C2C] transition-colors duration-300 font-light"
              >
                Services
              </Link>
              <Link 
                href="/#contact" 
                className="text-sm text-[#6B6153] hover:text-[#2C2C2C] transition-colors duration-300 font-light"
              >
                Contact
              </Link>
              <Link 
                href="/" 
                className="text-sm text-[#8B7355] hover:text-[#2C2C2C] transition-colors duration-300 font-light flex items-center gap-2"
              >
                ← Back to Home
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
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
              Our Visual Journey
            </div>
            <h1 className="text-5xl md:text-7xl font-light text-[#2C2C2C] mb-6">
              Portfolio
              <span className="block font-serif italic text-[#8B7355] mt-2">Gallery</span>
            </h1>
            <p className="text-lg text-[#6B6153] max-w-2xl mx-auto font-light leading-relaxed">
              A curated collection of moments captured through our lens, showcasing the beauty, 
              emotions, and stories that define our photography journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {statsData.map((stat) => (
              <motion.div
                key={stat.label}
                variants={statsVariants}
                className="text-center"
              >
                <div className="text-3xl lg:text-4xl font-light text-[#2C2C2C] mb-2">
                  {stat.number}
                </div>
                <div className="text-xs tracking-[0.2em] text-[#9C8B7A] uppercase">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          {/* Category Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex overflow-x-auto gap-2 pb-8 mb-12 scrollbar-hide snap-x justify-center"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex-shrink-0 px-6 py-3 rounded-full text-sm tracking-wider uppercase transition-all duration-300 snap-center ${
                  selectedCategory === category.id
                    ? 'bg-[#8B7355] text-[#F5F1EA]'
                    : 'bg-white/80 text-[#6B6153] hover:bg-white hover:text-[#2C2C2C]'
                }`}
              >
                {category.label} ({category.count})
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            key={selectedCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="group cursor-pointer"
                onClick={() => openProjectModal(project)}
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-[#D4C4B0]/30 hover:border-[#8B7355]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-[#8B7355]/5">
                  {/* Image */}
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src={project.images[0]}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2C2C2C]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#F5F1EA]/95 backdrop-blur-sm px-3 py-1 text-xs text-[#2C2C2C] tracking-[0.2em] uppercase">
                        {project.category || project.highlights[0]}
                      </span>
                    </div>

                    {/* Year */}
                    <div className="absolute top-4 right-4">
                      <span className="bg-[#8B7355] px-2 py-1 text-xs text-[#F5F1EA] tracking-widest">
                        {project.year}
                      </span>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-[#8B7355] opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                    
                    {/* View Project */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-[#F5F1EA]/95 backdrop-blur-sm px-6 py-3 rounded-full text-[#2C2C2C] text-sm tracking-wider uppercase">
                        View Project
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-light text-[#2C2C2C] mb-2 group-hover:text-[#8B7355] transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-[#6B6153] font-light text-sm leading-relaxed mb-3">
                      {project.description}
                    </p>
                    <div className="text-xs text-[#9C8B7A] font-light">
                      {project.location}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 bg-white/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-light text-[#2C2C2C] mb-4">
              Awards &
              <span className="block font-serif italic text-[#8B7355]">Recognition</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {awards.map((award, index) => (
              <motion.div
                key={award.award}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-[#D4C4B0]/30"
              >
                <div className="text-2xl font-light text-[#8B7355] mb-2">{award.year}</div>
                <h3 className="text-lg font-light text-[#2C2C2C] mb-3">{award.award}</h3>
                <p className="text-sm text-[#6B6153] font-light">{award.project}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#2C2C2C]/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={closeProjectModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[#F5F1EA] rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-96 lg:h-[500px]">
                <Image
                  src={selectedProject.images[activeImageIndex]}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 80vw"
                />
                
                {/* Navigation Arrows */}
                <button
                  onClick={() => setActiveImageIndex(prev => 
                    prev === 0 ? selectedProject.images.length - 1 : prev - 1
                  )}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#F5F1EA]/80 backdrop-blur-sm w-10 h-10 rounded-full flex items-center justify-center text-[#2C2C2C] hover:bg-[#F5F1EA] transition-colors duration-300"
                >
                  ←
                </button>
                <button
                  onClick={() => setActiveImageIndex(prev => 
                    prev === selectedProject.images.length - 1 ? 0 : prev + 1
                  )}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#F5F1EA]/80 backdrop-blur-sm w-10 h-10 rounded-full flex items-center justify-center text-[#2C2C2C] hover:bg-[#F5F1EA] transition-colors duration-300"
                >
                  →
                </button>

                {/* Close Button */}
                <button
                  onClick={closeProjectModal}
                  className="absolute top-4 right-4 bg-[#F5F1EA]/80 backdrop-blur-sm w-8 h-8 rounded-full flex items-center justify-center text-[#2C2C2C] hover:bg-[#F5F1EA] transition-colors duration-300"
                >
                  ×
                </button>

                {/* Image Counter */}
                <div className="absolute bottom-4 left-4 bg-[#F5F1EA]/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-[#2C2C2C]">
                  {activeImageIndex + 1} / {selectedProject.images.length}
                </div>
              </div>

              <div className="p-8">
                <h2 className="text-3xl font-light text-[#2C2C2C] mb-2">{selectedProject.title}</h2>
                <p className="text-[#6B6153] font-light mb-4">{selectedProject.location} • {selectedProject.year}</p>
                <p className="text-[#6B6153] font-light leading-relaxed mb-6">
                  {selectedProject.detailedDescription || selectedProject.description}
                </p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-light text-[#2C2C2C] mb-3">Highlights</h3>
                    <div className="space-y-2">
                      {selectedProject.highlights.map((highlight: string) => (
                        <div key={highlight} className="flex items-center gap-3 text-[#2C2C2C] font-light">
                          <div className="w-1.5 h-1.5 bg-[#8B7355] rounded-full flex-shrink-0" />
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {selectedProject.stats && (
                    <div>
                      <h3 className="text-lg font-light text-[#2C2C2C] mb-3">Project Stats</h3>
                      <div className="grid grid-cols-2 gap-4">
                        {Object.entries(selectedProject.stats).map(([key, value]) => (
                          <div key={key} className="text-center p-3 bg-white/50 rounded-lg">
                            <div className="text-lg font-light text-[#2C2C2C]">{value}</div>
                            <div className="text-xs text-[#9C8B7A] uppercase mt-1">
                              {key.replace(/([A-Z])/g, ' $1').trim()}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PortfolioPage;