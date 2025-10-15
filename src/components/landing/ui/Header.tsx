import Image from "next/image";
import {Navbar} from "@/components/landing/ui/Navbar";
import {LangToggle} from "@/components/landing/ui/LangToggle";
import {Container} from "@/components/landing/ui/Container";

export function Header() {
    return (
        <Container>
            <header className={"flex justify-between items-center py-10"} >
                <Image src={"logo.svg"} alt={"logo"} width={150} height={150} />
                <Navbar />
                <LangToggle />
            </header>
        </Container>
    )
}