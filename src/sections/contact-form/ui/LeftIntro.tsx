'use client';

import { motion, useInView } from 'framer-motion';
import { useTranslations } from 'next-intl';
import React from 'react';

// Анимация подъёма для элементов
const pullupVariant = {
  initial: { y: 40, opacity: 0 },
  animate: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.12,
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  }),
};

// Анимация для букв
const letterVariant = {
  initial: { y: 50, opacity: 0 },
  animate: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: i * 0.05,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  }),
};

export default function LeftIntro() {
  const t = useTranslations('contactForm');
  const ref = React.useRef<HTMLDivElement | null>(null);
  const titleRef = React.useRef<HTMLHeadingElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const isTitleInView = useInView(titleRef, { once: true, amount: 0.5 });

  const title = t('title');

  const elements = [
    // Контакты
    <ul key='contacts' className='flex flex-col md:gap-3 text-base'>
      <li className='flex items-center gap-3'>
        <svg
          viewBox='0 0 24 24'
          className='w-5 h-5 opacity-90'
          fill='none'
          stroke='currentColor'
        >
          <path d='M2 4h20v16H2z' />
          <path d='M2 5l10 8L22 5' />
        </svg>
        <span className='text-white text-[18px] font-medium'>
          Email:{' '}
          <a
            href='mailto:cair@sdu.edu.kz'
            className='underline decoration-dotted hover:text-white transition-colors'
          >
            cair@sdu.edu.kz
          </a>
        </span>
      </li>

      <li className='flex items-center gap-3'>
        <svg
          viewBox='0 0 24 24'
          className='w-5 h-5 opacity-90'
          fill='currentColor'
        >
          <path d='M6.6 10.8c1.2 2.4 3.1 4.3 5.5 5.5l2-2a1 1 0 0 1 1-.25c1.1.36 2.2.56 3.4.6a1 1 0 0 1 1 1v3.2a1 1 0 0 1-1 1C9.8 20.8 3.2 14.2 3.2 6a1 1 0 0 1 1-1H7.4a1 1 0 0 1 1 1c.04 1.2.24 2.3.6 3.4a1 1 0 0 1-.25 1l-2.15 2.4z' />
        </svg>
        <span className='text-white text-[18px] font-medium'>
          Call:{' '}
          <a
            href='tel:+77776676904'
            className='underline decoration-dotted hover:text-white transition-colors'
          >
            +7 (777) 667 6904
          </a>
        </span>
      </li>
    </ul>,

    // Стеклянная кнопка
    <button
      key='btn'
      className='
    inline-flex mt-6 md:mt-12 items-center justify-center gap-2
    px-10 py-2
    rounded-full
    text-white font-medium
    border border-white/20
    bg-white/5
    backdrop-blur-xl
    transition-all duration-300 ease-out
    hover:bg-white/10 hover:border-white/30
    active:translate-y-[1px]
    shadow-[inset_0_0_10px_rgba(255,255,255,0.05),0_0_15px_rgba(0,0,0,0.2)]
  '
    >
      <span className='font-medium text-[19px]'>{t('subtitle')}</span>
      <svg
        viewBox='0 0 24 24'
        className='w-5 h-5'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
      >
        <path d='M5 12h14M13 5l7 7-7 7' />
      </svg>
    </button>,
  ];

  return (
    <div
      ref={ref}
      className='flex flex-col lg:items-start items-center gap-2 p-5 text-white'
    >
      {/* Заголовок с анимацией букв */}
      <h1
        ref={titleRef}
        className='text-4xl sm:text-7xl mb-4 md:mb-12 tracking-[-0.3rem] leading-14 sm:text-[70px] lg:text-[80px] font-bold text-white flex flex-wrap gap-1'
      >
        {title.split('').map((letter: string, index: number) => (
          <motion.span
            key={index}
            variants={letterVariant}
            initial='initial'
            animate={isTitleInView ? 'animate' : 'initial'}
            custom={index}
            className='inline-block'
          >
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        ))}
      </h1>

      {/* Остальные элементы с анимацией */}
      {elements.map((el, i) => (
        <motion.div
          key={i}
          variants={pullupVariant}
          initial='initial'
          animate={isInView ? 'animate' : undefined}
          custom={i}
        >
          {el}
        </motion.div>
      ))}
    </div>
  );
}
