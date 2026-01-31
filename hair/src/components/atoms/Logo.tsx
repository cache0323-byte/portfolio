type Props = {
  children: string;
};

export const Logo = ({children}: Props) => {
  return (
    <h1
      className="
        items-center 
        text-[var(--primary-brown)] 
        text-[40px] 
        font-zen
    ">
      {children}
    </h1>
  );
};