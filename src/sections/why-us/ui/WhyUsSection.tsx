import { Container } from '@/components/landing/ui/Container';
import { NumberCard } from '@/sections/why-us/ui/NumberCard';
import { useTranslations } from 'next-intl';

export function WhyUsSection() {
  const t = useTranslations('whyUs');
  return (
    <section
      id={'why-us'}
      className='snap-start min-h-screen justify-center flex flex-col py-12 md:py-0'
    >
      <Container
        className={'flex flex-col gap-20 justify-center items-center '}
      >
        <h2 className='text-center font-bold md:-mt-20 -mt-2 text-4xl md:text-7xl'>
          {t('title')}
        </h2>
        <div className={'grid grid-cols-2 gap-2 '}>
          <NumberCard text={t('card-1')} num={123} hasBorder={true} />
          <NumberCard text={t('card-2')} num={210} hasBorder={false} />
          <NumberCard text={t('card-3')} num={33} hasBorder={false} />
          <NumberCard text={t('card-4')} num={25} hasBorder={true} />
        </div>
      </Container>
    </section>
  );
}
