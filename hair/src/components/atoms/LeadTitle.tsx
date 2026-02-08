type Props = {
    children: React.ReactNode;
    className?: string;
};

export const LeadTitle = ({ children, className = "" }: Props) => {
    return (
        <h2
            className={`
                text-3xl 
                tracking-[0.1em] 
                font-semibold 
                ${className}
            `}
        >
            {children}
        </h2>
    );
};