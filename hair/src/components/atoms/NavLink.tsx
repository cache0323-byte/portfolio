// src/components/atoms/NavLink.tsx
type Props = {
  href: string;
  children: string;
};

export const NavLink = ({ href, children }: Props) => {
  return (
    <a
      href={href}
      className="
        text-primary-brown 
        font-sans 
        text-[18px] 
        hover:opacity-50 
        transition-opacity 
        duration-300
        cursor-pointer
      "
    >
      {children}
    </a>
  );
};