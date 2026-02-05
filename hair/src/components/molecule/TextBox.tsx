// Molecules: Title(Atom) と Description(Atom) を組み合わせたもの
import { LeadTitle } from '../atoms/LeadTitle';
import { Description } from '../atoms/Description';

type Props = {
  title?: React.ReactNode; // 任意にする
  body?: string;  // 任意にする
  align?: 'left' | 'center';
};

export const TextBox = ({ title, body, align = 'left' }: Props) => (
  <div className={align === 'center' ? 'text-center' : 'text-left'}>
    {title && <LeadTitle children={title} />}
    
    {/* bodyがある時だけ、余白と一緒に表示する */}
    {body && (
      <div className={title ? "mt-4" : ""}> 
        <Description children={body} />
      </div>
    )}
  </div>
);