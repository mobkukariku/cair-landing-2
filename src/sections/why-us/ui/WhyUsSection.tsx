import {Container} from "@/components/landing/ui/Container";
import {NumberCard} from "@/sections/why-us/ui/NumberCard";


export function WhyUsSection() {
    return (
        <section id={"why-us"} className="snap-start h-screen  justify-center flex flex-col">
            <Container className={"flex flex-col gap-20 justify-center items-center "}>
                <h2 className="text-center font-bold -mt-20 text-7xl">Why Us</h2>
                <div className={"grid grid-cols-2 gap-2 "}>
                    <NumberCard text={"YEARS OF EXPERIENCE IN THE MARKET"} num={123} hasBorder={true} />
                    <NumberCard text={"SPECIALISTS IN THE CANDIDATE POOL"} num={210} hasBorder={false} />
                    <NumberCard text={"FINISHED BUSINESS CASE SOLUTIONS"} num={33} hasBorder={false} />
                    <NumberCard text={"Specialists in the current team"} num={25} hasBorder={true} />

                </div>
            </Container>
        </section>
    )
}