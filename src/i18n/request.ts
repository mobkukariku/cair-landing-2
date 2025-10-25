import { routing } from '@/i18n/routing';
import ContactFormMessages from '@/sections/contact-form/model/locales';
import FooterMessages from '@/sections/footer/model/locales';
import HeaderMessages from '@/sections/header/model/locales';
import MainMessages from '@/sections/main/model/locales';
import PartnersMessages from '@/sections/partners/model/locales';
import ServicesMessages from '@/sections/services/model/locales';
import WhyUsMessages from '@/sections/why-us/model/locales';
import { getRequestConfig } from 'next-intl/server';
import { hasLocale } from 'use-intl';

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;

  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  return {
    locale,
    messages: {
      header: HeaderMessages[locale],
      main: MainMessages[locale],
      services: ServicesMessages[locale],
      whyUs: WhyUsMessages[locale],
      contactForm: ContactFormMessages[locale],
      partners: PartnersMessages[locale],
      footer: FooterMessages[locale],
    },
  };
});
