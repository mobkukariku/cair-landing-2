'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

interface PartnerCardProps {
  logo: string;
  title: string;
  description: string;
  index: number;
}

export function PartnerCard({
  logo,
  title,
  description,
  index,
}: PartnerCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const cardVariants = {
    collapsed: {
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
    expanded: {
      scale: 1.02,
      y: -12,
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  };

  const contentVariants = {
    collapsed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
    expanded: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: 0.2,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  };

  return (
    <motion.div
      className='flex flex-col items-center gap-6'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      {/* Logo */}
      <motion.div
        className='relative flex flex-col items-center gap-0 w-92 h-92 justify-center'
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <Image
          src={logo}
          alt={title}
          width={460}
          height={460}
          className='object-contain'
        />
      </motion.div>

      {/* Glass Card */}
      <motion.div
        className='relative w-full max-w-sm'
        variants={cardVariants}
        animate={isExpanded ? 'expanded' : 'collapsed'}
        style={{
          filter: isExpanded ? 'blur(0px)' : 'blur(0px)',
        }}
      >
        <motion.div
          className='bg-white/15 backdrop-blur-xl p-8 rounded-3xl border flex flex-col gap-4 shadow-2xl relative overflow-hidden'
          animate={{
            borderColor: isExpanded
              ? 'rgba(255, 255, 255, 0.4)'
              : 'rgba(255, 255, 255, 0.3)',
            boxShadow: isExpanded
              ? '0 20px 60px rgba(0, 0, 0, 0.5), 0 0 40px rgba(0, 163, 255, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
              : '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
          }}
          transition={{ duration: 0.4 }}
        >
          {/* Glow effect */}
          <motion.div
            className='absolute inset-0 rounded-3xl'
            animate={{
              background: isExpanded
                ? 'radial-gradient(circle at 50% 50%, rgba(0, 163, 255, 0.1), transparent 70%)'
                : 'radial-gradient(circle at 50% 50%, transparent, transparent)',
            }}
            transition={{ duration: 0.4 }}
            style={{ pointerEvents: 'none' }}
          />

          <h3 className='text-xl font-bold text-white uppercase text-center relative z-10'>
            {title}
          </h3>
          <p className='text-sm text-white/90 text-center leading-relaxed relative z-10'>
            {description}
          </p>

          {/* Chevron Button */}
          <div className='flex justify-end relative z-10'>
            <motion.button
              onClick={() => setIsExpanded(!isExpanded)}
              className='w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center backdrop-blur-sm border border-white/30'
              aria-label='Toggle details'
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.svg
                className='w-4 h-4 text-white'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M19 9l-7 7-7-7'
                />
              </motion.svg>
            </motion.button>
          </div>

          {/* Expanded Content */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial='collapsed'
                animate='expanded'
                exit='collapsed'
                variants={contentVariants}
                className='overflow-hidden relative z-10'
              >
                <div className='mt-4 pt-4 border-t border-white/20'>
                  <p className='text-xs text-white/70 text-center'>
                    Additional details coming soon...
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
