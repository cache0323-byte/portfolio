// src/components/atoms/Heading.tsx
type Props = {
  children: string;
};

export const Heading = ({ children }: Props) => {
  return (
    <h2 className="
    text-center
    text-[36px]
    font-bold
    tracking-[0.2em]
    text-[var(--primary-brown)] 
">
      {children}
    </h2>
  );
};