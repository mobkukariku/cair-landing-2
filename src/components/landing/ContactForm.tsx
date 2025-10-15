'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(s => ({ ...s, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section
      className='relative flex min-h-[90vh] items-center'
      style={{
        backgroundImage: 'url(/bg.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* лёгкое затемнение для читаемости */}
      <div className='absolute inset-0'></div>

      <div className='flex justify-between px-[240px] w-full items-center gap-10 lg:gap-16'>
        {/* Левая колонка */}
        <div className='text-white max-w-[520px]'>
          <h1 className='text-[74px] font-semibold leading-tight'>
            Let&apos;s Start
          </h1>

          <div className='mt-8 space-y-3 text-[19px] font-semibold'>
            <div className='flex items-center gap-3'>
              <svg
                className='w-6 h-6 text-white/80'
                fill='currentColor'
                viewBox='0 0 20 20'
              >
                <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
                <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
              </svg>
              <span className='leading-none'>Email: cair@sdu.edu.kz</span>
            </div>

            <div className='flex items-center gap-3'>
              <svg
                className='w-6 h-6 text-white/80'
                fill='currentColor'
                viewBox='0 0 20 20'
              >
                <path d='M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z' />
              </svg>
              <span className='leading-none'>Call: +7 (777) 667 6904</span>
            </div>
          </div>

          <button className='mt-14 bg-white/10 backdrop-blur-lg border border-white/30 rounded-full px-10 py-3 text-white font-semibold text-[20px] hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl'>
            Explore Services
          </button>
        </div>

        {/* Правая колонка — форма */}

        <div className='flex lg:justify-end'>
          <div className='w-full max-w-[590px]'>
            <div className='backdrop-blur-xl bg-white/10 border border-white/25 rounded-3xl p-8 shadow-2xl'>
              <h2 className='text-white text-xl font-semibold mb-8'>
                Want Free Consultation?
              </h2>

              <form onSubmit={handleSubmit} className='space-y-6'>
                <InputLine
                  type='text'
                  name='name'
                  placeholder='Name'
                  value={formData.name}
                  onChange={handleChange}
                />
                <InputLine
                  type='email'
                  name='email'
                  placeholder='Email'
                  value={formData.email}
                  onChange={handleChange}
                />
                <InputLine
                  type='tel'
                  name='phone'
                  placeholder='Phone'
                  value={formData.phone}
                  onChange={handleChange}
                />
                <TextAreaLine
                  name='message'
                  placeholder='Message'
                  value={formData.message}
                  onChange={handleChange}
                />

                <div className='pt-2 flex justify-end'>
                  <button
                    type='submit'
                    className='inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition shadow-lg'
                  >
                    Send Message
                    <svg
                      className='w-5 h-5'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M17 8l4 4m0 0l-4 4m4-4H3'
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===== Вспомогательные поля с «тонкой линией» снизу ===== */

type BaseProps = {
  name: string;
  placeholder: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};

function InputLine({
  name,
  placeholder,
  value,
  onChange,
  type = 'text',
}: BaseProps & { type?: string }) {
  return (
    <div className='group'>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
        className='w-full bg-transparent text-white placeholder-white/60 outline-none pb-2 text-[16px]'
      />
      <div className='h-px w-full bg-white/30 group-focus-within:bg-white/70 transition-colors' />
    </div>
  );
}

function TextAreaLine({ name, placeholder, value, onChange }: BaseProps) {
  return (
    <div className='group'>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        rows={3}
        placeholder={placeholder}
        required
        className='w-full bg-transparent text-white placeholder-white/60 outline-none pb-2 text-[16px] resize-none'
      />
      <div className='h-px w-full bg-white/30 group-focus-within:bg-white/70 transition-colors' />
    </div>
  );
}
