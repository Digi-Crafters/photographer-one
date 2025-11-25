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
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1500&auto=format&fit=crop',
    socials: [{ name: 'Instagram', link: '#insta' }],
  },
  {
    id: 2,
    name: 'Julian Hayes',
    role: 'Creative Director',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1682525095124-9569a9a8a8fb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGNyZWF0aXZlJTIwZGlyZWN0b3J8ZW58MHx8MHx8fDA%3D',
    socials: [{ name: 'Behance', link: '#behance' }],
  },
  {
    id: 3,
    name: 'Maya Chen',
    role: 'Lead Cinematographer',
    imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1500&auto=format&fit=crop',
    socials: [{ name: 'Pinterest', link: '#pin' }],
  },
  {
    id: 4,
    name: 'Samuel Lee',
    role: 'Post-Production Specialist',
    imageUrl: 'https://images.unsplash.com/photo-1625616499176-4357661dff48?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
  const visibleMembers = TEAM_MEMBERS.slice(0, 4);
  const hasMoreMembers = TEAM_MEMBERS.length > 4;

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
    <section className="py-12 md:py-16 bg-[#F5F1EA]">
      <div className="container mx-auto px-6">
        {/* --- Header & Mission Statement --- */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-12 max-w-4xl mx-auto"
        >
          <p className="text-sm tracking-[0.4em] mb-4 uppercase text-[#9C8B7A]">
            The Atelier Team
          </p>
          <h2 className="text-5xl md:text-7xl font-light leading-tight text-[#2C2C2C]">
            Meet the Visionaries
            <span className="block font-serif italic text-[#8B7355] mt-2">Behind the Lens</span>
          </h2>
          <p className="text-lg mt-6 max-w-2xl mx-auto text-[#6B6153]">
            Our collective of artists, cinematographers, and specialists are dedicated to
            capturing your most cherished moments with authenticity and grace.
          </p>
        </motion.header>

        {/* --- Team Grid --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visibleMembers.map((member, index) => (
            <TeamMemberCard key={member.id} member={member} index={index} />
          ))}
        </div>

        {/* --- Mobile/Overflow CTA --- */}
        {hasMoreMembers && (
          <div className="mt-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7 }}
            >
              <Link 
                href="/our-team" 
                className="group relative inline-flex items-center px-8 py-3 text-sm tracking-wider uppercase overflow-hidden transition-all duration-500 border border-[#8B7355] text-[#2C2C2C] hover:text-[#F5F1EA]"
              >
                <span className="relative z-10">
                  See All {TEAM_MEMBERS.length} Experts
                </span>
                <div className="absolute inset-0 bg-[#8B7355] transform origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </Link>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default OurTeam;