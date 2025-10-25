import {defineRouting} from "next-intl/routing";

export const routing = defineRouting({
    locales: ['en', 'ru', 'kk'],
    defaultLocale: 'en',
    localeDetection: true,
    pathnames: {
        '/': '/'
    }
})

export type Locale = (typeof routing.locales)[number];