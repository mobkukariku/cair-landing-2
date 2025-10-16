import { CompaniesOurWork } from "./CompaniesOurWork";
import { HeroText } from "./HeroText";

export function MainSection() {
    return (
        <section className="text-white flex flex-col mb-20">
            <HeroText />
            <CompaniesOurWork />
        </section>
    )
}