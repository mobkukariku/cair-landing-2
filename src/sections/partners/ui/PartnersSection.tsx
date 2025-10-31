'use client';

import { Container } from '@/components/landing/ui/Container';
import { useTranslations } from 'next-intl';
import { useRef } from 'react';
import { PartnerCard } from './PartnerCard';

export function PartnersSection() {
  const t = useTranslations('partners');

  const basePartners = [
    { id: 'partner-1', logo: '/freedom-logo.png' },
    { id: 'partner-2', logo: '/sdu.svg' },
    { id: 'partner-3', logo: '/cloudy-logo.png' },
  ] as const;

  const partners = basePartners.map(p => {
    const rawTech = (t as unknown as { raw: (key: string) => unknown }).raw(
      `items.${p.id}.tech`
    );
    const tech = Array.isArray(rawTech) ? (rawTech as string[]) : [];
    return {
      id: p.id,
      logo: p.logo,
      title: t(`items.${p.id}.title`),
      shortDescription: t(`items.${p.id}.shortDescription`),
      description: t(`items.${p.id}.description`),
      tech,
    };
  });

  const titleRef = useRef(null);

  return (
    <section
      id={'partners'}
      className='text-white snap-start min-h-screen flex flex-col justify-center items-center py-12 md:py-0'
    >
      <Container className={'flex flex-col justify-center items-center'}>
        <h2
          ref={titleRef}
          className='text-center md:-mt-20 -mt-2 leading-14 font-semibold text-4xl md:text-7xl mb-4 flex justify-center gap-1'
        >
          {t('title')}
        </h2>
        <div className='md:flex md:flex-row flex-col flex-nowrap gap-10 md:gap-24 justify-center items-center mx-auto'>
          {partners.map((partner, index) => (
            <PartnerCard
              key={partner.id}
              logo={partner.logo}
              title={partner.title}
              shortDescription={partner.shortDescription}
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
