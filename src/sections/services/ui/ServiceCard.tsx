import Image from "next/image";
interface ServiceCardProps {
    iconSrc: string;
    title: string;
    stack: string[];
    description: string[];
}

export function ServiceCard({iconSrc, title, stack, description}:ServiceCardProps) {
    return (
        <div className="bg-white/10 backdrop-blur-md p-8 max-w-[315px] h-[200px] rounded-3xl border border-white/25 flex flex-col justify-between gap-4">
            <Image src={iconSrc} alt={title} width={40} height={40}  />
            <div className="flex flex-row justify-between items-end">
                <h3 className="text-2xl font-semibold">
                    {title}
                </h3>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="bg-white p-1 w-[28px] h-fit text-black/100 rounded-full"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    >
                    <polyline points="6 9 12 15 18 9" />
                </svg>
            </div>
        </div>
    )
}