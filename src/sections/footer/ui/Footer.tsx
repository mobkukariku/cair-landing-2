'use client';
import { Container } from '@/components/landing/ui/Container';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { SiInstagram, SiLinkedin, SiTelegram } from 'react-icons/si';

export default function Footer() {
  const t = useTranslations('footer');

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  // Map footer link keys to section IDs
  const linkMap: Record<string, string> = {
    home: 'home',
    services: 'services',
    whyUs: 'why-us',
    partners: 'partners',
    contact: 'contact',
  };

  return (
    <footer
      className='w-full snap-start [scrollbar-width:none] [scroll-behavior:smooth] bg-[#01034D] text-white'
      suppressHydrationWarning
    >
      <Container className='py-8 px-6 md:py-12 lg:py-16'>
        <div className='mx-auto'>
          <div className='flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-row justify-between gap-8 md:gap-10 lg:gap-12'>
            {/* Logo and Tagline */}
            <div className='space-y-4 md:space-y-6 lg:space-y-8 md:col-span-2 lg:col-span-1'>
              <div className='flex items-center gap-3'>
                <Image
                  src='/footer-logo.svg'
                  alt='CAIR Logo'
                  width={140}
                  height={40}
                  className='text-white w-[100px] h-auto md:w-[120px] lg:w-[140px]'
                  suppressHydrationWarning
                />
              </div>
              <p className='font-semibold text-[16px] md:text-[17px] lg:text-[18px] max-w-xs'>
                {t('tagline')}
              </p>
            </div>

            {/* Almaty Office */}
            <div className='space-y-4 md:space-y-6 lg:space-y-8'>
              <h3 className='text-[18px] md:text-[19px] lg:text-[20px] font-bold'>
                {t('office.title')}
              </h3>
              <div className='space-y-4 md:space-y-6 lg:space-y-8 text-[16px] md:text-[17px] lg:text-[18px] text-white font-medium'>
                <p className='max-w-xs'>{t('office.address')}</p>
                <p>
                  <a
                    href='mailto:cair@sdu.edu.kz'
                    className='hover:opacity-80 transition-opacity underline decoration-dotted'
                  >
                    {t('office.email')}
                  </a>
                </p>
                <p>
                  <a
                    href='tel:+77776676904'
                    className='hover:opacity-80 transition-opacity underline decoration-dotted'
                  >
                    {t('office.phone')}
                  </a>
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div className='space-y-4 md:space-y-6 lg:space-y-8'>
              <h3 className='text-[18px] md:text-[19px] lg:text-[20px] font-bold'>
                {t('links.title')}
              </h3>
              <nav className='space-y-2 md:space-y-3'>
                {[
                  { key: 'home', label: t('links.home') },
                  { key: 'services', label: t('links.services') },
                  { key: 'whyUs', label: t('links.whyUs') },
                  { key: 'partners', label: t('links.partners') },
                  { key: 'contact', label: t('links.contact') },
                ].map(item => (
                  <button
                    key={item.key}
                    onClick={() => handleScroll(linkMap[item.key])}
                    className='block text-[16px] md:text-[17px] lg:text-[18px] text-white font-medium hover:opacity-80 transition-opacity text-left w-full'
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Follow Us */}
            <div className='space-y-4 md:space-y-6 lg:space-y-8'>
              <h3 className='text-[18px] md:text-[19px] lg:text-[20px] font-bold'>
                {t('social.title')}
              </h3>
              <div className='flex gap-4 md:gap-5 lg:gap-6'>
                {[
                  {
                    Icon: SiLinkedin,
                    alt: 'LinkedIn',
                    href: 'https://www.linkedin.com',
                  },
                  {
                    Icon: SiInstagram,
                    alt: 'Instagram',
                    href: 'https://www.instagram.com/sdu_ai_lab?igsh=MXc5ZDY0OGc2MHhrbw==',
                  },
                  {
                    Icon: SiTelegram,
                    alt: 'Telegram',
                    href: 'https://t.me/sduailab',
                  },
                ].map(({ Icon, alt, href }) => (
                  <a
                    key={alt}
                    href={href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 hover:opacity-80 transition-opacity text-white'
                    aria-label={alt}
                  >
                    <Icon className='w-full h-full' />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Copyright */}
      <div className='py-4 md:py-5 lg:py-6'>
        <div className='max-w-7xl mx-auto px-4 md:px-6'>
          <p className='text-center font-medium text-[#FFFFFF80] text-[14px] md:text-[16px] lg:text-[17px]'>
            {t('copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}
