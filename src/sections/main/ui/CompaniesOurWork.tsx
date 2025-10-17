import { Container } from "@/components/landing/ui/Container";
import { companiesOurWork } from "../model/constants";
import Image from "next/image";



export function CompaniesOurWork() {
    return (
        <Container>
            <ul className="flex flex-row justify-around items-center ">
                {companiesOurWork.map((item, index) => (
                    <li key={index}>
                        <Image className="object-contain" src={item.image} alt={item.name} width={120} height={150} />
                    </li>
                ))}
            </ul>
        </Container>
    )
}
