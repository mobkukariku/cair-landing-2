import Image from 'next/image';

export default function Footer() {
  return (
    <footer className='w-full bg-[#01034D] text-white' suppressHydrationWarning>
      <div className='py-12'>
        <div className='mx-auto px-6 md:px-[120px]'>
          <div className='flex flex-col lg:flex-row justify-between gap-8 lg:gap-12'>
            <div className='space-y-8'>
              <div className='flex items-center gap-3'>
                <Image
                  src='/footer-logo.svg'
                  alt='CAIR Logo'
                  width={140}
                  height={40}
                  className='text-white'
                  suppressHydrationWarning
                />
              </div>
              <p className='font-semibold text-[18px]'>
                A reliable IT partner you’ll <br /> want by your side.
              </p>
            </div>

            <div className='space-y-8'>
              <h3 className='text-[20px] font-bold'>Almaty Office</h3>
              <div className='space-y-8 text-[18px] text-white font-medium'>
                <p>
                  Head Office: Almaty region, Kaskelen city, <br /> Abylaikhan
                  street, 1/1
                </p>
                <p>Email: cair@sdu.edu.kz</p>
                <p>Call: +7 (777) 667 6904</p>
              </div>
            </div>

            <div className='space-y-8'>
              <h3 className='text-[20px] font-bold'>Quick Links</h3>
              <nav className='space-y-2'>
                {['Home', 'Services', 'Why us', 'Partners', 'Contact'].map(
                  item => (
                    <a
                      key={item}
                      href='#'
                      className='block text-[18px] text-white font-medium'
                    >
                      {item}
                    </a>
                  )
                )}
              </nav>
            </div>

            <div className='space-y-8'>
              <h3 className='text-[20px] font-bold'>Follow Us</h3>
              <div className='flex gap-6'>
                {[
                  { src: '/x-icon.svg', alt: 'X' },
                  { src: '/inst-img.svg', alt: 'Instagram' },
                  { src: '/tg-icon.svg', alt: 'Telegram' },
                ].map(icon => (
                  <a
                    key={icon.alt}
                    href='#'
                    className='w-6 h-6 hover:opacity-80 transition-opacity'
                    aria-label={icon.alt}
                  >
                    <Image
                      src={icon.src}
                      alt={icon.alt}
                      width={24}
                      height={24}
                      className='w-full h-full'
                      suppressHydrationWarning
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='py-6'>
        <div className='max-w-7xl mx-auto px-6'>
          <p className='text-center font-medium text-[#FFFFFF80] text-[17px]'>
            Copyright © 2025. All Rights Reserved. Site by CAIR
          </p>
        </div>
      </div>
    </footer>
  );
}
