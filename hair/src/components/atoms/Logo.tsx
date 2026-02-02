
export const Logo = () => {
  return (
    <h1
      className="
        flex
        items-baseline 
        text-[var(--primary-brown)] 
        font-zen
        leading-none
    ">
      <span className="text-[40px]">Sui</span>
      <span className="text-[40px] ml-2">翠</span>
    </h1>
  );
};

// type Props = {
//   children: string;
// };

// export const Logo = ({children}: Props) => {
//   return (
//     <h1
//       className="
//         items-center 
//         text-[var(--primary-brown)] 
//         text-[40px] 
//         font-zen
//     ">
//       {children}
//     </h1>
//   );
// };