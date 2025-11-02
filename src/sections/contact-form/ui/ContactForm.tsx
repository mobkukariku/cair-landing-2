'use client';

import { easeOut, motion, useInView } from 'framer-motion';
import { useTranslations } from 'next-intl';
import React from 'react';

const pullupVariant = {
  initial: { y: 40, opacity: 0 },
  animate: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: i * 0.12, duration: 0.6, ease: easeOut },
  }),
};

export default function ContactForm() {
  const t = useTranslations('contactForm.form');
  const ref = React.useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  const fields = [
    // Name
    <label key='name' className='flex flex-col gap-2'>
      <input
        type='text'
        placeholder={t('name')}
        className='
          bg-transparent outline-none
          pb-2 pt-1 text-[16px] md:text-[19px] font-medium text-white
          placeholder:text-white/50
          border-0
          [background:linear-gradient(90deg,rgba(180,220,255,0.6),rgba(120,180,255,0.25))_left_bottom/100%_2px_no-repeat]
          focus:[background:linear-gradient(90deg,rgba(210,240,255,0.95),rgba(150,210,255,0.6))_left_bottom/100%_2px_no-repeat]
          transition-all duration-300
          focus:drop-shadow-[0_0_14px_rgba(140,200,255,0.25)]
        '
      />
    </label>,
    // Email
    <label key='email' className='flex flex-col gap-2'>
      <input
        type='email'
        placeholder={t('email')}
        className='
          bg-transparent outline-none
          pb-2 pt-1 text-[16px] md:text-[19px] font-medium text-white
          placeholder:text-white/50
          border-0
          [background:linear-gradient(90deg,rgba(180,220,255,0.6),rgba(120,180,255,0.25))_left_bottom/100%_2px_no-repeat]
          focus:[background:linear-gradient(90deg,rgba(210,240,255,0.95),rgba(150,210,255,0.6))_left_bottom/100%_2px_no-repeat]
          transition-all duration-300
          focus:drop-shadow-[0_0_14px_rgba(140,200,255,0.25)]
        '
      />
    </label>,
    // Phone
    <label key='phone' className='flex flex-col gap-2'>
      <input
        type='tel'
        placeholder={t('phone')}
        className='
          bg-transparent outline-none
          pb-2 pt-1 text-[16px] md:text-[19px] font-medium text-white
          placeholder:text-white/50
          border-0
          [background:linear-gradient(90deg,rgba(180,220,255,0.6),rgba(120,180,255,0.25))_left_bottom/100%_2px_no-repeat]
          focus:[background:linear-gradient(90deg,rgba(210,240,255,0.95),rgba(150,210,255,0.6))_left_bottom/100%_2px_no-repeat]
          transition-all duration-300
          focus:drop-shadow-[0_0_14px_rgba(140,200,255,0.25)]
        '
      />
    </label>,
    // Message (input to match your current structure)
    <label key='message' className='flex flex-col gap-2'>
      <input
        placeholder={t('message')}
        className='
          bg-transparent outline-none
          pb-2 pt-1 text-[16px] md:text-[19px] font-medium text-white
          placeholder:text-white/50
          border-0
          [background:linear-gradient(90deg,rgba(180,220,255,0.6),rgba(120,180,255,0.25))_left_bottom/100%_2px_no-repeat]
          focus:[background:linear-gradient(90deg,rgba(210,240,255,0.95),rgba(150,210,255,0.6))_left_bottom/100%_2px_no-repeat]
          transition-all duration-300
          focus:drop-shadow-[0_0_14px_rgba(140,200,255,0.25)]
        '
      />
    </label>,
  ];

  return (
    <section className='w-full h-full'>
      {/* glass frame */}
      <div className='relative rounded-[26px] p-[1px] bg-white/5 backdrop-blur-none'>
        <div
          className='
            rounded-[28px]
            border-2 border-white/25
            bg-gradient-to-br from-[#66c2ff0d] via-[#3aa0ff14] to-[#1e3a8a12]
            backdrop-blur-xl text-white
            shadow-[0_20px_20px_rgba(5,15,80,0.35)]
            px-12 py-10 md:px-16 md:py-12
            transition-all duration-500
          '
          ref={ref}
        >
          {/* Title */}
          <motion.h3
            variants={pullupVariant}
            initial='initial'
            animate={inView ? 'animate' : undefined}
            custom={0}
            className='font-medium text-nowrap mb-10 text-center md:text-left text-[22px] md:text-[27px] tracking-tight text-white'
          >
            {t('submit')}
          </motion.h3>

          {/* Fields */}
          <form
            onSubmit={e => e.preventDefault()}
            className='flex flex-col gap-10'
          >
            {fields.map((el, i) => (
              <motion.div
                key={i}
                variants={pullupVariant}
                initial='initial'
                animate={inView ? 'animate' : undefined}
                custom={i + 1} // start after title
              >
                {el}
              </motion.div>
            ))}

            {/* Button */}
            <motion.div
              variants={pullupVariant}
              initial='initial'
              animate={inView ? 'animate' : undefined}
              custom={fields.length + 1}
              className='flex justify-center pt-2'
            >
              <button
                type='submit'
                className='
                  inline-flex items-center justify-center gap-2
                  px-10 py-2
                  rounded-full
                  text-white font-medium text-[16px] md:text-[19px]
                  border border-white/20
                  bg-white/5
                  backdrop-blur-xl
                  transition-all duration-300 ease-out
                  hover:bg-white/10 hover:border-white/30
                  active:translate-y-[1px]
                  shadow-[inset_0_0_10px_rgba(255,255,255,0.05),0_0_15px_rgba(0,0,0,0.2)]
                '
              >
                <span>{t('submit-short')}</span>
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
              </button>
            </motion.div>
          </form>
        </div>
      </div>
    </section>
  );
}
