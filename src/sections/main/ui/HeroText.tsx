import { Container } from "@/components/landing/ui/Container";
import { ContactMessageSide } from "./ContactMessageSide";
import { MainLargeTextSide } from "./MainLargeTextSide";

export function HeroText() {
    return (
        <Container className="flex flex-row mb-65 justify-between items-end">
                <MainLargeTextSide />
                <ContactMessageSide />
        </Container>
    )
}