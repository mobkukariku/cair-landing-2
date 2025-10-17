'use client';

import { Container } from '@/components/landing/ui/Container';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { PartnerCard } from './PartnerCard';

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

export function PartnersSection() {
  const partners = [
    {
      logo: '/freedom-logo.png',
      title: 'FREEDOM HOLDING CORP.',
      description:
        'Development of the CPI.KZ portal for monitoring the inflation range',
    },
    {
      logo: '/sdu.svg',
      title: 'SDU UNIVERSITY',
      description: 'Implementation of the Digital Integration Platform',
    },
    {
      logo: '/cloudy-logo.png',
      title: 'QCLOUDY',
      description:
        'Development of the CPI.KZ portal for monitoring the inflation range',
    },
  ];

  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true, amount: 0.5 });
  const title = 'Partners';

  return (
    <section className='text-white my-24'>
      <Container>
        <h2
          ref={titleRef}
          className='text-center tracking-[-0.2rem] leading-6 font-semibold text-7xl mb-12 flex justify-center gap-1'
        >
          {title.split('').map((letter, index) => (
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
        </h2>
        <div className='flex flex-nowrap gap-16 justify-center items-start max-w-7xl mx-auto'>
          {partners.map((partner, index) => (
            <PartnerCard
              key={index}
              logo={partner.logo}
              title={partner.title}
              description={partner.description}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
