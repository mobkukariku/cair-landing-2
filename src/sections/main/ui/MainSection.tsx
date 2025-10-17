import { CompaniesOurWork } from "./CompaniesOurWork";
import { HeroText } from "./HeroText";
import { Header } from "@/sections/header/ui/Header";

export function MainSection() {
    return (
        <section className="text-white snap-start h-screen w-full flex flex-col justify-between items-center">
            <Header />
            <div className="flex-grow flex flex-col items-center w-full gap-30 justify-center">
                <HeroText />
            </div>
            <CompaniesOurWork />
        </section>
    )
}
