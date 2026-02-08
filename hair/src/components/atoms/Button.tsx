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
        flex items-center justify-center 
        border border-primary-brown 
        text-[var(--primary-brown)] text-2xl font-semibold
        bg-[var(--primary-white)]

        shadow-[0_4px_20px_rgba(0,0,0,0.1)] 
        hover:shadow-[0_10px_30px_rgba(0,0,0,0.15)]

        hover:bg-[var(--primary-brown)] 
        hover:text-[var(--primary-white)] 
        transition-all
        duration-500 
        tracking-widest"
    >
      {label || children}
    </button>
  );
};