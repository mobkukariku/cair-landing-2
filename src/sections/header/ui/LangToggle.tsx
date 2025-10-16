"use client"
import {useState} from "react";

const langs = ["KZ", "ENG", "RU"];

export function LangToggle() {
    const [lang, setLang] = useState("ENG");

    const changeLang = (lang: string) => {
        setLang(lang);
    }

    return (
        <div className={"flex gap-3 flex-row"}>
            {langs.map((item) => (
                <button
                    key={item}
                    onClick={() => changeLang(item)}
                    className={`transition-colors font-bold ${lang === item ? "text-white" : "text-white/70"}`}
                >
                    {item}
                </button>
            ))}
        </div>
    )
}