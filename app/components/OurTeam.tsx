// src/components/OurTeam.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { easeOut, motion } from 'framer-motion';

// --- Types ---
interface TeamMember {
  id: number;
  name: string;
  role: string;
  imageUrl: string;
  socials: { name: string; link: string }[];
}

// --- Sample Data (REPLACE WITH REAL DATA SOURCE) ---
const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 1,
    name: 'Eleanor Vance',
    role: 'Founder & Lead Photographer',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1500&auto=format&fit=crop', // Replace with your image
    socials: [{ name: 'Instagram', link: '#insta' }],
  },
  {
    id: 2,
    name: 'Julian Hayes',
    role: 'Creative Director',
    imageUrl: 'https://media.istockphoto.com/id/182192436/photo/photgrapher.jpg?s=2048x2048&w=is&k=20&c=z2JfuKPlub_fz6AH7n-VPp1dBBKoi8S-O6uDec7_GPo=', // Replace with your image
    socials: [{ name: 'Behance', link: '#behance' }],
  },
  {
    id: 3,
    name: 'Maya Chen',
    role: 'Lead Cinematographer',
    imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1500&auto=format&fit=crop', // Replace with your image
    socials: [{ name: 'Pinterest', link: '#pin' }],
  },
  {
    id: 4,
    name: 'Samuel Lee',
    role: 'Post-Production Specialist',
    imageUrl: 'https://images.unsplash.com/photo-1625616499176-4357661dff48?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Replace with your image
    socials: [{ name: 'Instagram', link: '#insta' }],
  },
];

// --- Framer Motion Variants ---
const memberCardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOut
    },
  },
};

const OurTeam: React.FC = () => {
  const visibleMembers = TEAM_MEMBERS.slice(0, 4); // Display up to 4 members on the homepage
  const hasMoreMembers = TEAM_MEMBERS.length > 4;
  
  // Custom Color Palette:
  const bg_color = '#F5F1EA'; // Light background
  const primary_text = '#2C2C2C'; // Dark text
  const accent_color = '#8B7355'; // Brownish accent

  // Member Card Component
  const TeamMemberCard: React.FC<{ member: TeamMember, index: number }> = ({ member, index }) => (
    <motion.div
      className="group relative h-[450px] w-full overflow-hidden cursor-pointer"
      variants={memberCardVariants}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <Image
        src={member.imageUrl}
        alt={member.name}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      
      {/* Overlay for Name Reveal */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent transition-opacity duration-500 opacity-100 group-hover:opacity-100 flex items-end">
        <div className="p-6 text-white">
          <h3 className="text-3xl font-light mb-1">{member.name}</h3>
          <p className="text-sm tracking-widest uppercase text-yellow-300/80">{member.role}</p>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section className="py-24 md:py-32" style={{ backgroundColor: bg_color }}>
      <div className="container mx-auto px-6">
        {/* --- Header & Mission Statement --- */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20 max-w-4xl mx-auto"
        >
          <p className="text-sm tracking-[0.4em] mb-4 uppercase" style={{ color: accent_color }}>
            The Atelier Team
          </p>
          <h2 className="text-5xl md:text-7xl font-light leading-tight" style={{ color: primary_text }}>
            Meet the Visionaries Behind the Lens
          </h2>
          <p className="text-lg mt-6" style={{ color: primary_text, opacity: 0.7 }}>
            Our collective of artists, cinematographers, and specialists are dedicated to
            capturing your most cherished moments with authenticity and grace.
          </p>
        </motion.header>

        {/* --- Team Grid --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {visibleMembers.map((member, index) => (
            <TeamMemberCard key={member.id} member={member} index={index} />
          ))}
        </div>

        {/* --- Mobile/Overflow CTA --- */}
        {hasMoreMembers && (
          <div className="mt-16 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7 }}
            >
              <Link href="/our-team" passHref legacyBehavior>
                <a
                  className="group relative inline-flex items-center px-10 py-4 text-sm tracking-wider uppercase overflow-hidden transition-colors duration-500"
                  style={{ 
                    backgroundColor: 'transparent', 
                    color: primary_text, 
                    border: `1px solid ${accent_color}` 
                  }}
                >
                  <span className="relative z-10 transition-colors duration-500">
                    See All {TEAM_MEMBERS.length} Experts
                  </span>
                  {/* Subtle Accent Hover Effect */}
                  <div 
                    className="absolute inset-0 transform origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                    style={{ backgroundColor: accent_color, opacity: 0.1 }}
                  />
                </a>
              </Link>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default OurTeam;