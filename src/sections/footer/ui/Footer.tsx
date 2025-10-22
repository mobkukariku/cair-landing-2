import { Container } from '@/components/landing/ui/Container';
import Image from 'next/image';

export default function Footer() {
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
                A reliable IT partner you&apos;ll want by your side.
              </p>
            </div>

            {/* Almaty Office */}
            <div className='space-y-4 md:space-y-6 lg:space-y-8'>
              <h3 className='text-[18px] md:text-[19px] lg:text-[20px] font-bold'>
                Almaty Office
              </h3>
              <div className='space-y-4 md:space-y-6 lg:space-y-8 text-[16px] md:text-[17px] lg:text-[18px] text-white font-medium'>
                <p className='max-w-xs'>
                  Head Office: Almaty region, Kaskelen city, Abylaikhan street,
                  1/1
                </p>
                <p>Email: cair@sdu.edu.kz</p>
                <p>Call: +7 (777) 667 6904</p>
              </div>
            </div>

            {/* Quick Links */}
            <div className='space-y-4 md:space-y-6 lg:space-y-8'>
              <h3 className='text-[18px] md:text-[19px] lg:text-[20px] font-bold'>
                Quick Links
              </h3>
              <nav className='space-y-2 md:space-y-3'>
                {['Home', 'Services', 'Why us', 'Partners', 'Contact'].map(
                  item => (
                    <a
                      key={item}
                      href='#'
                      className='block text-[16px] md:text-[17px] lg:text-[18px] text-white font-medium hover:opacity-80 transition-opacity'
                    >
                      {item}
                    </a>
                  )
                )}
              </nav>
            </div>

            {/* Follow Us */}
            <div className='space-y-4 md:space-y-6 lg:space-y-8'>
              <h3 className='text-[18px] md:text-[19px] lg:text-[20px] font-bold'>
                Follow Us
              </h3>
              <div className='flex gap-4 md:gap-5 lg:gap-6'>
                {[
                  { src: '/x-icon.svg', alt: 'X' },
                  { src: '/inst-img.svg', alt: 'Instagram' },
                  { src: '/tg-icon.svg', alt: 'Telegram' },
                ].map(icon => (
                  <a
                    key={icon.alt}
                    href='#'
                    className='w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 hover:opacity-80 transition-opacity'
                    aria-label={icon.alt}
                  >
                    <Image
                      src={icon.src}
                      alt={icon.alt}
                      width={32}
                      height={32}
                      className='w-full h-full'
                      suppressHydrationWarning
                    />
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
            Copyright © 2025. All Rights Reserved. Site by CAIR
          </p>
        </div>
      </div>
    </footer>
  );
}
