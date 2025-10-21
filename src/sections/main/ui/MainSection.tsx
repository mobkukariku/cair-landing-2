import { CompaniesOurWork } from "./CompaniesOurWork";
import { HeroText } from "./HeroText";

export function MainSection() {
    return (
        <section id={"home"} className="text-white h-[87%] w-full flex flex-col justify-between items-center">
            <div className="flex-grow flex flex-col items-center w-full gap-30 justify-center">
                <HeroText />
            </div>
            <CompaniesOurWork />
        </section>
    )
}
