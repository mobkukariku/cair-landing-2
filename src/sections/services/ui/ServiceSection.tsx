import { Container } from "@/components/landing/ui/Container";
import { ServiceCard } from "./ServiceCard";

export function ServiceSection() {
    return (
        <section className="text-white h-full flex flex-col snap-start">
            <Container className={"flex flex-grow flex-col items-center justify-center"}>
                <h2 className="text-center font-bold  text-7xl">Services</h2>
                <div className="mt-56 flex flex-wrap gap-10 justify-center max-w-7xl mx-auto">
                    <ServiceCard  iconSrc="/icons/software.svg" title="Software Development" />
                    <ServiceCard  iconSrc="/icons/software.svg" title="Software Development" />
                    <ServiceCard  iconSrc="/icons/software.svg" title="Software Development" />
                    <ServiceCard  iconSrc="/icons/software.svg" title="Software Development" />
                    <ServiceCard  iconSrc="/icons/software.svg" title="Software Development" />
                    <ServiceCard  iconSrc="/icons/software.svg" title="Software Development" />
                </div>
            </Container>
        </section>
    )
}
