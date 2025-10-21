import Image from "next/image";
import {Navbar} from "@/sections/header/ui/Navbar";
import {LangToggle} from "@/sections/header/ui/LangToggle";
import {Container} from "@/components/landing/ui/Container";

export function Header() {
    return (
        <Container className={"snap-start"}>
            <header className={"flex justify-between items-center py-10"} >
                <Image src={"logo.svg"} alt={"logo"} width={150} height={150} />
                <Navbar />
                <LangToggle />
            </header>
        </Container>
    )
}