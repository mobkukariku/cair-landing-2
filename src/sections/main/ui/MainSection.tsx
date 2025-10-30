import { CompaniesOurWork } from "./CompaniesOurWork";
import { HeroText } from "./HeroText";

export function MainSection() {
    return (
        <section id={"home"} className="text-white max-md:mb-20 h-[80%]  w-full flex flex-col md:justify-between items-center">
            <div className="flex-grow flex flex-col items-center w-full gap-30 justify-center">
                <HeroText />
            </div>
            <CompaniesOurWork />
        </section>
    )
}
