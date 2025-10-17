'use client';

import { Container } from '@/components/landing/ui/Container';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { DetailedPartnerCard } from './DetailedPartnerCard';
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
  const [openId, setOpenId] = useState<string | null>(null);

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
              key={partner.id}
              id={partner.id}
              logo={partner.logo}
              title={partner.title}
              description={partner.description}
              onClick={() => setOpenId(partner.id)}
              index={index}
            />
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {openId && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              key='overlay'
              className='overlay'
              onClick={() => setOpenId(null)}
            />
          )}

          {openId && (
            <DetailedPartnerCard
              id={openId}
              logo={partners.find(p => p.id === openId)?.logo || ''}
              title={partners.find(p => p.id === openId)?.title || ''}
              description={
                partners.find(p => p.id === openId)?.description || ''
              }
              tech={partners.find(p => p.id === openId)?.tech || []}
              onClick={() => setOpenId(null)}
            />
          )}
        </AnimatePresence>
      </Container>
    </section>
  );
}
