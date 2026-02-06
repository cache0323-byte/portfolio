type Props = {
    children: React.ReactNode;
};

export const LeadTitle = ({ children }: Props) => {
    return (
        <p
            style={{ 
                fontFamily: 'var(--font-noto-serif-jp)',
                color: 'var(--primary-black)'
             }}
            className="text-[30px] tracking-[0.2em] font-bold"
        >
            {children}
        </p>
        // <p className="
        // font-[family:var(--font-noto-sans)]
        // text-[18px]
        // tracking-[0.2em]
        // text-[var(--primary-black)]
        // ">
        //   {children}
        // </p>
    );
};