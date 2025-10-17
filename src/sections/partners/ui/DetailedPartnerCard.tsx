'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface DetailedPartnerCardProps {
  id: string;
  logo: string;
  title: string;
  description: string;
  tech: string[];
  onClick: () => void;
}

export function DetailedPartnerCard({
  id,
  logo,
  title,
  description,
  tech,
  onClick,
}: DetailedPartnerCardProps) {
  return (
    <div>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
          backdropFilter: 'blur(24px)',
        }}
        exit={{ opacity: 0 }}
        className='fixed z-10 inset-0'
        transition={{ delay: 0.1 }}
        onClick={onClick}
      />

      {/* Modal Card */}
      <div
        className='fixed z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-[500px]'
        onClick={onClick}
      >
        <motion.div
          layoutId={id}
          className='relative rounded-[28px] p-8 overflow-hidden'
          style={{
            background:
              'linear-gradient(180deg, rgba(25, 60, 160, 0.95) 0%, rgba(60, 120, 200, 0.85) 50%, rgba(25, 60, 160, 0.95) 100%)',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
          }}
        >
          {/* Inner Border Glow */}
          <div className='absolute inset-[8px] rounded-[22px] border border-white/35 pointer-events-none' />

          {/* Top Section: Logo + Title */}
          <div className='flex items-center gap-6 mb-8 relative z-10'>
            {/* Logo */}
            <div className='flex-shrink-0'>
              <Image
                src={logo}
                alt={title}
                width={180}
                height={180}
                className='object-contain drop-shadow-lg'
              />
            </div>

            {/* Title */}
            <h3 className='text-white text-[28px] font-bold uppercase leading-tight'>
              {title}
            </h3>
          </div>

          {/* Description - Centered */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className='mb-8 text-center relative z-10'
          >
            <p className='text-white text-[24px] font-medium leading-7'>
              {description}
            </p>
          </motion.div>

          {/* Bottom Section: Tech Stack + Close Button */}
          <div className='flex items-end text-white justify-between relative z-10'>
            {/* Tech Stack - Left */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className='flex-1'
            >
              <p className='text-[20px] font-medium leading-7'>
                Technologies: {tech.join(', ')}
              </p>
            </motion.div>

            {/* Close Button - Right */}
            <button
              onClick={onClick}
              className='flex-shrink-0 ml-6 w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center backdrop-blur-sm border border-white/30 transition-colors'
              aria-label='Close'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='none'
                className='w-5 h-5 text-white'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <polyline points='6 15 12 9 18 15' />
              </svg>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
