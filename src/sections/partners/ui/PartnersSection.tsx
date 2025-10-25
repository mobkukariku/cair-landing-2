'use client';

import { Container } from '@/components/landing/ui/Container';
import { useTranslations } from 'next-intl';
import { useRef } from 'react';
import { PartnerCard } from './PartnerCard';

export function PartnersSection() {
  const t = useTranslations('partners');

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

  return (
    <section id={'partners'} className='text-white snap-start h-screen flex'>
      <Container className={'flex flex-col justify-center items-center'}>
        <h2
          ref={titleRef}
          className='text-center -mt-20 tracking-[-0.2rem] leading-6 font-semibold text-7xl mb-10 flex justify-center gap-1'
        >
          {t('title')}
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
