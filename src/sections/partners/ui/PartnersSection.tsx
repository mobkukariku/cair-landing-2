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
      id: 'partner-1',
      logo: '/freedom-logo.png',
      title: 'FREEDOM HOLDING CORP.',
      description:
        'Development of the CPI.KZ portal for monitoring the inflation range',
      tech: [
        'PHP',
        'Laravel',
        'Vue.js',
        'JS',
        'Postgres',
        'RabbitMQ',
        'Keycloak',
      ],
    },
    {
      id: 'partner-2',
      logo: '/sdu.svg',
      title: 'SDU UNIVERSITY',
      description: 'Implementation of the Digital Integration Platform',
      tech: ['React', 'Next.js', 'Node', 'Postgres', 'Docker'],
    },
    {
      id: 'partner-3',
      logo: '/cloudy-logo.png',
      title: 'QCLOUDY',
      description:
        'Development of the CPI.KZ portal for monitoring the inflation range',
      tech: ['TypeScript', 'NestJS', 'Redis', 'Kubernetes'],
    },
  ];

  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true, amount: 0.5 });
  const title = 'Partners';

  return (
    <section id={"partners"} className='text-white snap-start h-screen flex'>
      <Container className={'flex flex-col justify-center items-center'}>
        <h2
          ref={titleRef}
          className='text-center -mt-20 tracking-[-0.2rem] leading-6 font-semibold text-7xl mb-10 flex justify-center gap-1'
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
        <div className='flex flex-nowrap gap-24 justify-center items-start mx-auto'>
          {partners.map((partner, index) => (
            <PartnerCard
              key={partner.id}
              logo={partner.logo}
              title={partner.title}
              description={partner.description}
              tech={partner.tech}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
