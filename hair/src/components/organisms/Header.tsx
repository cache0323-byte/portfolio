import { Logo } from "../atoms/Logo";

export const Header = () => {
  return (
    <header className="w-full h-[82px] bg-primary-pink flex items-center justify-between px-36">
      <Logo />
      <nav>
        <ul className="flex gap-12">
          <li><NavLink href="#about">About</NavLink></li>
          <li><NavLink href="#works">Works</NavLink></li>
          <li><NavLink href="#contact">Contact</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

