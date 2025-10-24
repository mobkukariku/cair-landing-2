import {getRequestConfig} from "next-intl/server";
import {hasLocale} from "use-intl";
import {routing} from "@/i18n/routing";
import HeaderMessages from "@/sections/header/model/locales";
import MainMessages from "@/sections/main/model/locales";
import ServicesMessages from "@/sections/services/model/locales";
import WhyUsMessages from "@/sections/why-us/model/locales";

export default getRequestConfig(async ({requestLocale}) => {

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
            whyUs: WhyUsMessages[locale]
        }
    }
})