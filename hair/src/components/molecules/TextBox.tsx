// Molecules: Title(Atom) と Description(Atom) を組み合わせたもの
import { LeadTitle } from '../atoms/LeadTitle';
import { Description } from '../atoms/Description';
import { Heading } from '../atoms/Heading';

type Props = {
  label?:string;
  title?: React.ReactNode; 
  text?: string;
  align?: 'left' | 'center';
  className?: string;
  titleGap?: string;
  bodyGap?: string;
};

export const TextBox = ({ 
  label,
  title,
  text, 
  align = 'left',
  className ="",
  titleGap ="mt-2",
  bodyGap ="mt-4"
 }: Props) => (
  <div className={`${align === 'center' ? 'text-center' : 'text-left'} ${className}`}>
{/* 1. セクション名 (Heading Atomのlabel) */}
    {label && <Heading>{label}</Heading>}
    
    {/* 2. リード文章 (LeadTitle Atom) */}
    {title && (
      <div className={label ? titleGap : ""}>
        <LeadTitle>{title}</LeadTitle>
      </div>
    )}
    
    {/* 3. 本文説明 (Description Atom) */}
    {text && (
      <div className={title || label ? bodyGap : ""}> 
        <Description>{text}</Description>
      </div>
    )}
  </div>
);