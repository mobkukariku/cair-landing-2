import { Container } from "@/components/landing/ui/Container";
import { ContactMessageSide } from "./ContactMessageSide";
import { MainLargeTextSide } from "./MainLargeTextSide";

export function HeroText() {
    return (
        <Container className="flex flex-wrap w-full gap-8 flex-row md:mb-45 justify-between items-end">
                <MainLargeTextSide />
                <ContactMessageSide />
        </Container>
    )
}