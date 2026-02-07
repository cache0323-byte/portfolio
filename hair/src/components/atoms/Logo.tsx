
// export const Logo = () => {
//   return (
//     <h1
//       className="
//         flex
//         items-baseline 
//         text-[var(--primary-brown)] 
//         font-zen
//         leading-none
//     ">
//       <span className="text-[40px]">Sui</span>
//       <span className="text-[40px] ml-2">翠</span>
//     </h1>
//   );
// };

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
        text-[40px] 
        font-bold
        font-[var(--font-zen-old-mincho)]
        ${vertical? 'flex-col text-[32px] leading-tight':'flex-row gap-2 text-[40px]'}
    `}>
      <span>Sui</span>
      <span>翠</span>
    </h1>
  );
};