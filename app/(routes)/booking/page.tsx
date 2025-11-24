// app/booking/page.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const BookingPage = () => {
  const [selectedService, setSelectedService] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showDemoMessage, setShowDemoMessage] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const services = [
    {
      id: 'wedding',
      name: 'Wedding Photography',
      duration: 'Full Day (8-12 hours)',
      description: 'Complete coverage of your special day',
      startingPrice: '₹75,000'
    },
    {
      id: 'prewedding',
      name: 'Pre-Wedding Shoot',
      duration: '4-6 hours',
      description: 'Romantic couple session at location of choice',
      startingPrice: '₹25,000'
    },
    {
      id: 'portrait',
      name: 'Portrait Session',
      duration: '2-3 hours',
      description: 'Professional individual or couple portraits',
      startingPrice: '₹15,000'
    },
    {
      id: 'family',
      name: 'Family Photography',
      duration: '2-3 hours',
      description: 'Capturing family bonds and moments',
      startingPrice: '₹18,000'
    },
    {
      id: 'corporate',
      name: 'Corporate Event',
      duration: '4-8 hours',
      description: 'Professional event and team photography',
      startingPrice: '₹30,000'
    },
    {
      id: 'maternity',
      name: 'Maternity Session',
      duration: '2-3 hours',
      description: 'Celebrating the journey of motherhood',
      startingPrice: '₹20,000'
    }
  ];

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setShowDemoMessage(true);
  };

  const nextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, 3));
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const resetForm = () => {
    setSelectedService('');
    setSelectedDate('');
    setSelectedTime('');
    setCurrentStep(1);
    setShowDemoMessage(false);
  };

  return (
    <div className="min-h-screen bg-[#F5F1EA]">
      {/* Header with Navigation */}
      <header className="sticky top-0 z-50 bg-[#F5F1EA]/95 backdrop-blur-sm border-b border-[#D4C4B0]/30">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="group">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-3"
              >
                <div className="w-2 h-8 bg-[#8B7355] rounded-full"></div>
                <span className="font-serif text-xl text-[#2C2C2C] group-hover:text-[#8B7355] transition-colors duration-300">
                  Atelier
                </span>
              </motion.div>
            </Link>
            
            <nav className="flex items-center gap-6">
              <Link 
                href="/portfolio" 
                className="text-sm text-[#6B6153] hover:text-[#2C2C2C] transition-colors duration-300 font-light"
              >
                Portfolio
              </Link>
              <Link 
                href="/services" 
                className="text-sm text-[#6B6153] hover:text-[#2C2C2C] transition-colors duration-300 font-light"
              >
                Services
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

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header Section */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="text-sm tracking-[0.4em] text-[#9C8B7A] mb-4 uppercase">
                Book Your Session
              </div>
              <h1 className="text-5xl md:text-6xl font-light text-[#2C2C2C] mb-6">
                Let&apos;s Create
                <span className="block font-serif italic text-[#8B7355] mt-2">Together</span>
              </h1>
              <p className="text-lg text-[#6B6153] max-w-2xl mx-auto font-light leading-relaxed">
                Begin your photography journey with us. Share your vision and we&apos;ll craft 
                beautiful memories that last a lifetime.
              </p>
            </motion.div>
          </div>

          {/* Progress Steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center mb-12"
          >
            <div className="flex items-center gap-8">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-center gap-4">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-300 ${
                    currentStep >= step
                      ? 'bg-[#8B7355] border-[#8B7355] text-[#F5F1EA]'
                      : 'bg-transparent border-[#D4C4B0] text-[#9C8B7A]'
                  }`}>
                    {step}
                  </div>
                  {step < 3 && (
                    <div className={`w-16 h-px transition-all duration-300 ${
                      currentStep > step ? 'bg-[#8B7355]' : 'bg-[#D4C4B0]'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          <AnimatePresence mode="wait">
            {showDemoMessage ? (
              // Success/Demo Message
              <motion.div
                key="demo-message"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-12 text-center border border-[#D4C4B0]/30"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="w-20 h-20 bg-[#8B7355] rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <span className="text-2xl text-[#F5F1EA]">✓</span>
                </motion.div>
                
                <h2 className="text-3xl font-light text-[#2C2C2C] mb-4">
                  Demo Submission
                </h2>
                <p className="text-lg text-[#6B6153] mb-8 font-light leading-relaxed">
                  This is a demo booking page for presentation purposes only. 
                  No actual booking has been made.
                </p>
                
                <div className="flex gap-4 justify-center">
                  <button
                    onClick={resetForm}
                    className="px-8 py-4 bg-[#2C2C2C] text-[#F5F1EA] text-sm tracking-wider uppercase hover:bg-[#8B7355] transition-colors duration-300 font-light"
                  >
                    Book Another Session
                  </button>
                  <Link
                    href="/"
                    className="px-8 py-4 border border-[#D4C4B0] text-[#2C2C2C] text-sm tracking-wider uppercase hover:bg-[#D4C4B0] transition-colors duration-300 font-light"
                  >
                    Back to Home
                  </Link>
                </div>
              </motion.div>
            ) : (
              // Booking Form
              <motion.div
                key="booking-form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-[#D4C4B0]/30"
              >
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Step 1: Service Selection */}
                  {currentStep === 1 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <h3 className="text-2xl font-light text-[#2C2C2C] mb-6">Choose Your Service</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        {services.map((service) => (
                          <div
                            key={service.id}
                            onClick={() => {
                              setSelectedService(service.id);
                              setTimeout(nextStep, 300);
                            }}
                            className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                              selectedService === service.id
                                ? 'border-[#8B7355] bg-[#8B7355]/5'
                                : 'border-[#D4C4B0] hover:border-[#8B7355]/50'
                            }`}
                          >
                            <h4 className="text-lg font-light text-[#2C2C2C] mb-2">
                              {service.name}
                            </h4>
                            <p className="text-[#6B6153] text-sm font-light mb-3">
                              {service.description}
                            </p>
                            <div className="flex justify-between items-center">
                              <span className="text-xs text-[#9C8B7A] font-light">
                                {service.duration}
                              </span>
                              <span className="text-[#8B7355] font-light">
                                {service.startingPrice}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2: Date & Time Selection */}
                  {currentStep === 2 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <h3 className="text-2xl font-light text-[#2C2C2C] mb-6">Select Date & Time</h3>
                      
                      <div className="grid md:grid-cols-2 gap-8">
                        {/* Date Selection */}
                        <div>
                          <label className="block text-sm text-[#6B6153] mb-3 font-light">
                            Preferred Date
                          </label>
                          <input
                            type="date"
                            value={selectedDate}
                            onChange={(e) => setSelectedDate(e.target.value)}
                            min={new Date().toISOString().split('T')[0]}
                            className="w-full px-4 py-3 bg-transparent border border-[#D4C4B0] rounded-lg focus:border-[#8B7355] focus:outline-none transition-colors duration-300 font-light"
                            required
                          />
                        </div>

                        {/* Time Selection */}
                        <div>
                          <label className="block text-sm text-[#6B6153] mb-3 font-light">
                            Preferred Time
                          </label>
                          <div className="grid grid-cols-2 gap-3">
                            {timeSlots.map((time) => (
                              <button
                                key={time}
                                type="button"
                                onClick={() => setSelectedTime(time)}
                                className={`p-3 rounded-lg border transition-all duration-300 ${
                                  selectedTime === time
                                    ? 'border-[#8B7355] bg-[#8B7355]/5 text-[#8B7355]'
                                    : 'border-[#D4C4B0] text-[#6B6153] hover:border-[#8B7355]/50'
                                }`}
                              >
                                {time}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-4 pt-6">
                        <button
                          type="button"
                          onClick={prevStep}
                          className="px-6 py-3 border border-[#D4C4B0] text-[#2C2C2C] text-sm tracking-wider uppercase hover:bg-[#D4C4B0] transition-colors duration-300 font-light"
                        >
                          Back
                        </button>
                        <button
                          type="button"
                          onClick={nextStep}
                          disabled={!selectedDate || !selectedTime}
                          className="px-6 py-3 bg-[#2C2C2C] text-[#F5F1EA] text-sm tracking-wider uppercase hover:bg-[#8B7355] transition-colors duration-300 font-light disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          Continue
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Contact Information */}
                  {currentStep === 3 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <h3 className="text-2xl font-light text-[#2C2C2C] mb-6">Your Information</h3>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm text-[#6B6153] mb-2 font-light">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            required
                            className="w-full px-4 py-3 bg-transparent border border-[#D4C4B0] rounded-lg focus:border-[#8B7355] focus:outline-none transition-colors duration-300 font-light"
                            placeholder="Your full name"
                          />
                        </div>
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
                        <div>
                          <label className="block text-sm text-[#6B6153] mb-2 font-light">
                            Event Location
                          </label>
                          <input
                            type="text"
                            className="w-full px-4 py-3 bg-transparent border border-[#D4C4B0] rounded-lg focus:border-[#8B7355] focus:outline-none transition-colors duration-300 font-light"
                            placeholder="City or venue name"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm text-[#6B6153] mb-2 font-light">
                          Tell Us About Your Vision
                        </label>
                        <textarea
                          rows={4}
                          className="w-full px-4 py-3 bg-transparent border border-[#D4C4B0] rounded-lg focus:border-[#8B7355] focus:outline-none transition-colors duration-300 font-light resize-none"
                          placeholder="Share any specific ideas, themes, or requirements for your session..."
                        />
                      </div>

                      <div className="flex gap-4 pt-6">
                        <button
                          type="button"
                          onClick={prevStep}
                          className="px-6 py-3 border border-[#D4C4B0] text-[#2C2C2C] text-sm tracking-wider uppercase hover:bg-[#D4C4B0] transition-colors duration-300 font-light"
                        >
                          Back
                        </button>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="flex-1 py-3 bg-[#2C2C2C] text-[#F5F1EA] text-sm tracking-wider uppercase hover:bg-[#8B7355] transition-colors duration-300 font-light disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                          {isSubmitting ? (
                            <>
                              <div className="w-4 h-4 border-2 border-[#F5F1EA] border-t-transparent rounded-full animate-spin" />
                              Processing...
                            </>
                          ) : (
                            'Complete Booking'
                          )}
                        </button>
                      </div>
                    </motion.div>
                  )}
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default BookingPage;