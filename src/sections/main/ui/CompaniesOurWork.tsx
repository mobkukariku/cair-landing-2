import { Container } from "@/components/landing/ui/Container";
import { companiesOurWork } from "../model/constants";
import Image from "next/image";

export function CompaniesOurWork() {
    return (
        <Container>
            <ul className="flex flex-wrap w-full  max-md:mt-20 flex-row justify-around items-center">
                {companiesOurWork.map((item, index) => (
                    <li key={index}>
                        <Image
                            className="object-contain w-[100px] h-fit md:w-[150px] md:h-[120px]"
                            src={item.image}
                            alt={item.name}
                            width={150}
                            height={120}
                        />
                    </li>
                ))}
            </ul>
        </Container>
    );
}
