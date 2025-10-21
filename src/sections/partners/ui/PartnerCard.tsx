'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

interface PartnerCardProps {
  logo: string;
  title: string;
  description: string;
  tech: string[];
  index: number;
}

export function PartnerCard({
  logo,
  title,
  description,
  tech,
  index,
}: PartnerCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  // фиксированные размеры как в вашем коде:
  const COLLAPSED_H = 300;
  const EXPANDED_H = 368 + 316; // = 684

  return (
    <motion.div
      onClick={e => {
        e.stopPropagation();
        setIsExpanded(!isExpanded);
      }}
      className='flex flex-col items-center gap-3 relative'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      style={{
        alignItems: 'flex-center',
        height: isExpanded ? `${EXPANDED_H}px` : `${368 + 12 + COLLAPSED_H}px`, // logo + gap + card
      }}
    >
      <motion.div
        initial={false}
        animate={{
          opacity: isExpanded ? 0 : 1,
          scale: isExpanded ? 0.8 : 1,
        }}
        transition={{ duration: 0.4, ease: [0.2, 0.6, 0.3, 1] }}
        className={`relative flex flex-col items-center justify-center overflow-hidden w-92 ${
          title === 'FREEDOM HOLDING CORP.' ? 'scale-150' : ''
        }`}
        style={{ height: isExpanded ? 0 : 368 }}
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
        className='w-[420px]'
        style={{
          position: isExpanded ? 'absolute' : 'relative',
          bottom: 0,
        }}
        animate={{
          height: isExpanded ? `${EXPANDED_H}px` : `${COLLAPSED_H}px`,
        }}
        transition={{ duration: 0.5, ease: [0.1, 0.5, 0.4, 1] }}
      >
        <div
          className='bg-white/15 backdrop-blur-xl rounded-3xl border border-white/30 shadow-2xl relative overflow-hidden h-full
                        px-10 py-10'
        >
          {!isExpanded && (
            <div className='flex flex-col h-full justify-between gap-4'>
              <h3 className='text-[34px] leading-[1.1] font-extrabold text-white uppercase text-center line-clamp-2 min-h-[76px] flex items-center justify-center tracking-wide break-words'>
                {logo === '/sdu.svg' ? (
                  <>
                    SDU
                    <br />
                    UNIVERSITY
                  </>
                ) : (
                  title
                )}
              </h3>
              <p className='text-[26px] leading-[1.15] text-white font-medium text-center line-clamp-3 flex-1 flex items-center justify-center'>
                {description}
              </p>
            </div>
          )}

          {isExpanded && (
            <div className='flex w-full flex-col h-full pb-4'>
              <div className='grid grid-cols-12 gap-3 items-center h-[120px]'>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.25, delay: 0.05 }}
                  className={`col-span-3 flex items-center justify-between ${
                    title === 'FREEDOM HOLDING CORP.'
                      ? 'scale-200'
                      : 'scale-150'
                  }`}
                >
                  <Image
                    src={logo}
                    alt={title}
                    width={title === 'FREEDOM HOLDING CORP.' ? 140 : 240}
                    height={title === 'FREEDOM HOLDING CORP.' ? 140 : 240}
                    className='object-contain'
                  />
                </motion.div>

                <motion.h3
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25, delay: 0.12 }}
                  className='col-span-9 text-white text-right uppercase
                              font-extrabold tracking-wide justify-end
                              text-[28px] leading-[1.05] md:text-[36px] flex items-center break-words'
                >
                  {title}
                </motion.h3>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: 0.18 }}
                className='text-white text-center font-medium
                            text-[20px] md:text-[26px] leading-[1.15]
                            mt-4 px-2'
              >
                {description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: 0.24 }}
                className='mt-auto text-left'
              >
                <p className='text-white font-medium text-[26px] leading-[1.35]'>
                  Technologies: {tech.join(', ')}
                </p>
              </motion.div>
            </div>
          )}

          {/* Toggle Button */}
          <div className='absolute bottom-3 right-3 flex justify-end'>
            <button
              className='w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center backdrop-blur-sm border border-white/30 transition-colors'
              aria-label={isExpanded ? 'Collapse' : 'Expand'}
            >
              <motion.svg
                className='w-4 h-4 text-white'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.25 }}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M19 9l-7 7-7-7'
                />
              </motion.svg>
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
