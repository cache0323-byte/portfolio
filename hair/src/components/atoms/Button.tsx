type Props = {
  label: string;
  onClick?: () => void;
};

export const Button = ({ label, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className="px-10 py-3 border border-[#8D6E63] text-[#8D6E63] font-serif hover:bg-[#8D6E63] hover:text-white transition-colors duration-300 tracking-widest"
    >
      {label}
    </button>
  );
};