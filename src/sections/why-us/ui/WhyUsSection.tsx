"use client";

import { Container } from "@/components/landing/ui/Container";
import { NumberCard } from "@/sections/why-us/ui/NumberCard";
import { useTranslations } from "next-intl";
import { useMediaQuery } from "@/hooks/useMediaQuery"; // если у тебя есть этот хук

export function WhyUsSection() {
    const t = useTranslations("whyUs");
    const isMobile = useMediaQuery("(max-width: 768px)");

    const cards = [
        { text: t("card-1"), num: 123 },
        { text: t("card-2"), num: 210 },
        { text: t("card-3"), num: 33 },
        { text: t("card-4"), num: 25 },
    ];

    return (
        <section id="why-us" className="snap-start md:h-screen h-fit justify-center md:flex flex-col">
            <Container className="flex flex-col gap-20 md:justify-center md:items-center">
                <h2 className="text-center font-bold mt-20 md:mt-0 text-4xl md:text-7xl">
                    {t("title")}
                </h2>

                <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
                    {cards.map((card, index) => {
                        const hasBorder = isMobile
                            ? index % 2 === 0
                            : index === 0 || index === 3;

                        return (
                            <NumberCard
                                key={index}
                                text={card.text}
                                num={card.num}
                                hasBorder={hasBorder}
                            />
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}
