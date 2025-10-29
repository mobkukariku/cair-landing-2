'use client';
import { motion, useInView } from 'framer-motion';
import React from 'react';
import { pullupVariant } from '../model/variants';
import {useTranslations} from "next-intl";

export function MainLargeTextSide() {
    const t = useTranslations("main");


    const subText = t('sub-title').split(' ');
  const mainText = t('title').split(' ');
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <article className='flex flex-col mt-10 gap-20'>
      <p className='text-xl max-md:hidden font-medium max-w-[220px] flex flex-wrap gap-[4px] leading-6'>
        {subText.map((current, i) => (
          <motion.span
            key={i}
            ref={ref}
            variants={pullupVariant}
            initial='initial'
            animate={isInView ? 'animate' : ''}
            className='inline-block'
            custom={i}
          >
            {current}
          </motion.span>
        ))}
      </p>
      <h1 className='flex text-8xl max-md:leading-8  max-md:text-4xl gap-3 flex-wrap max-w-sm md:max-w-3xl'>
        {mainText.map((current, i) => (
          <motion.div
            key={i}
            ref={ref}
            variants={pullupVariant}
            initial='initial'
            animate={isInView ? 'animate' : ''}
            className='text-center font-bold tracking-tighter'
            custom={i}
          >
            {current == '' ? <span>&nbsp;</span> : current}
          </motion.div>
        ))}
      </h1>
    </article>
  );
}
