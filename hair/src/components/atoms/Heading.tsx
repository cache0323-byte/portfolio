// src/components/atoms/Heading.tsx
type Props = {
  children: React.ReactNode;
  className?: string;
};

export const Heading = ({ children, className ="" }: Props) => {
  return (
    <h2 className={`
    text-center
    text-4xl
    font-bold
    tracking-[0.2em]
    text-[var(--primary-brown)] 
    ${className}
  `}>
      {children}
    </h2>
  );
};