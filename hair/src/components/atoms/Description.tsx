type Props = {
    children: React.ReactNode;
};

export const Description = ({ children }: Props) => {
    return (
        <p
            style={{ fontFamily: 'var(--font-noto-sans)' }}
            className="text-lg tracking-[0.1em]"
        >
            {children}
        </p>
    )
};