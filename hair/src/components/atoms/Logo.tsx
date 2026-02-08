type Props = {
  vertical?: boolean;
};

export const Logo = ({vertical =false}) => {
  return (
    <h1
      className={`
        flex
        items-center 
        text-[var(--primary-brown)] 
        text-4xl 
        font-bold
        font-[var(--font-zen-old-mincho)]
        ${vertical? 'flex-col text-3xl leading-tight':'flex-row gap-2 text-4xl'}
    `}>
      <span>Sui</span>
      <span>翠</span>
    </h1>
  );
};