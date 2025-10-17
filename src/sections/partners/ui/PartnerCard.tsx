'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface PartnerCardProps {
  id: string;
  logo: string;
  title: string;
  description: string;
  onClick: () => void;
  index: number;
}

export function PartnerCard({
  id,
  logo,
  title,
  description,
  onClick,
  index,
}: PartnerCardProps) {
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
        className={`relative flex flex-col items-center gap-0 w-92 h-92 justify-center ${
          title === 'FREEDOM HOLDING CORP.' ? 'scale-150' : ''
        }`}
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
        layoutId={id}
        onClick={onClick}
        className='relative w-[420px] cursor-pointer'
      >
        <div className='bg-white/15 backdrop-blur-xl py-12 px-8 rounded-3xl border border-white/30 flex flex-col gap-4 shadow-2xl relative overflow-hidden h-[320px]'>
          <h3 className='text-[32px] leading-9 font-bold text-white uppercase text-center line-clamp-2'>
            {title}
          </h3>
          <p className='text-[22px] leading-7 text-white font-medium text-center line-clamp-3 flex-grow'>
            {description}
          </p>

          {/* Chevron Button */}
          <div className='absolute bottom-3 right-3 flex justify-end'>
            <div className='w-8 h-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm border border-white/30'>
              <svg
                className='w-4 h-4 text-white'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M19 9l-7 7-7-7'
                />
              </svg>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
