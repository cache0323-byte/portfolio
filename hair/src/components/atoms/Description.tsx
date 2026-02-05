type Props = {
    children: string;
};

export const Description = ({ children }: Props) => {
    return (
        <p
            style={{ fontFamily: 'var(--font-noto-sans)', color: 'var(--primary-black)' }}
            className="text-[18px] tracking-[0.2em]"
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