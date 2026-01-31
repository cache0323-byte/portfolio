type Props = {
  label: string;
  onClick?: () => void;
};

export const Button = ({ label, onClick }: Props) => {
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
        font-noto
        hover:bg-[var(--primary-brown)] 
        hover:text-[var(--primary-white)] 
        transition-colors 
        duration-300 
        tracking-widest"
    >
      {label}
    </button>
  );
};