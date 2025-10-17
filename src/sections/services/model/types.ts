export interface ServiceCardProps {
    id: string;
    iconSrc: string;
    title: string;
    onClick: () => void;
}

export interface DetailedCardProps extends ServiceCardProps {
    stack: string[];
    description: string[];
}