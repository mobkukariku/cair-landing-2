import {navItems} from "@/sections/header/model/constants";
import {useTranslations} from "next-intl";
import {LangToggle} from "@/sections/header/ui/LangToggle";


export function MobileMenuItemsList() {
    const t = useTranslations("header.navbar");


    return (
        <div className={"absolute z-50 flex flex-col items-center justify-center font-bold rounded-[36px] border p-4 border-white/50 backdrop-blur-md bg-blue-300/20 w-[85%]"}>
            {navItems.map((item) => (
                <button key={item.id} className={"p-5 w-full"}>
                    {t(item.label)}
                </button>
            ))}
            <LangToggle />
        </div>
    )
}