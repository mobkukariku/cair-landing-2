interface ContainerProps {
    children: React.ReactNode;
    className?: string;
}

export function Container({children, className}:ContainerProps) {
    return (
        <div className={className + " container mx-auto max-w-[1440px]"}>
            {children}
        </div>
    )
}