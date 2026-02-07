type Props = {
    children: React.ReactNode;
    className?: string; // 外から微調整できるようにしておくのがプロの技
};

export const LeadTitle = ({ children, className = "" }: Props) => {
    return (
        <h2
            className={`
                text-[30px] 
                tracking-[0.2em] 
                font-bold 
                text-[var(--primary-brown)] 
                ${className}
            `}
            style={{ 
                fontFamily: 'var(--font-noto-serif-jp)'
             }}
        >
            {children}
        </h2>
    );
};