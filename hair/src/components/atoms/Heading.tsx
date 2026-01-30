// src/components/atoms/Heading.tsx
type Props = {
  children: string;
};

export const Heading = ({ children }: Props) => {
  return (
    <h2 className="text-center font-serif text-2xl tracking-[0.2em] text-[#8D6E63] uppercase py-4">
      {children}
    </h2>
  );
};