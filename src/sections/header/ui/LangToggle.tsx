"use client";

import { useLangSwitch } from "@/hooks/useLangSwitch";

const langs = {
    en: "ENG",
    kk: "KZ",
    ru: "RU",
};

export function LangToggle() {
    const { currentLocale, switchLocale } = useLangSwitch();

    return (
        <div className="flex gap-3">
            {Object.entries(langs).map(([key, label]) => (
                <button
                    key={key}
                    onClick={() => switchLocale(key)}
                    className={`transition-colors font-bold ${
                        currentLocale === key
                            ? "text-white underline underline-offset-4"
                            : "text-white/70 hover:text-white"
                    }`}
                >
                    {label}
                </button>
            ))}
        </div>
    );
}
