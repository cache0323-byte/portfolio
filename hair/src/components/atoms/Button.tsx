import { Children } from "react";

type Props = {
  label?: string;
  children?:React.ReactNode;
  onClick?: () => void;
};

export const Button = ({ label, children, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className="
        w-[480px] 
        h-[80px] 
        flex 
        items-center 
        justify-center 
        border 
        border-primary-brown 
        text-[var(--primary-brown)] 
        text-[24px] 
        font-semibold
        font-[var(--font-noto-serif-jp)]
        hover:bg-[var(--primary-brown)] 
        hover:text-[var(--primary-white)] 
        transition-colors 
        duration-300 
        tracking-widest"
    >
      {label || children}
    </button>
  );
};