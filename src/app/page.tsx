import Image from 'next/image';
import ContactForm from '../components/landing/ContactForm';
import Footer from '../components/landing/Footer';

export default function Home() {
  return (
    <div
      className='flex flex-col min-h-screen font-sans'
      suppressHydrationWarning
    >
      <main className='flex flex-col items-center justify-center flex-grow px-12 py-20'>
        <Image
          src='/next.svg'
          alt='Next.js logo'
          width={180}
          height={38}
          priority
          suppressHydrationWarning
        />
        <ol className='font-mono list-inside list-decimal text-sm/6 text-center sm:text-left mt-6'>
          <li className='mb-2'>
            Get started by editing{' '}
            <code className='bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded'>
              src/app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className='flex gap-4 mt-8 flex-col sm:flex-row'>
          <a
            className='rounded-full border border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5'
            href='https://vercel.com/new'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image
              src='/vercel.svg'
              alt='Vercel logomark'
              width={20}
              height={20}
              suppressHydrationWarning
            />
            Deploy now
          </a>
          <a
            className='rounded-full border border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5'
            href='https://nextjs.org/docs'
            target='_blank'
            rel='noopener noreferrer'
          >
            Read our docs
          </a>
        </div>
      </main>

      {/* Contact Form Section */}
      <ContactForm />

      <Footer />
    </div>
  );
}
