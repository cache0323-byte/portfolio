// Molecules: Title(Atom) と Description(Atom) を組み合わせたもの
import { Title } from '../atoms/Title';
import { Description } from '../atoms/Description';

type Props = {
  title: string;
  body: string;
  align?: 'left' | 'center'; // 中央揃えか左揃えか選べるようにする
};

export const TextBox = ({ title, body, align = 'left' }: Props) => (
  <div className={align === 'center' ? 'text-center' : 'text-left'}>
    <Title text={title} />
    <div className="mt-4"> {/* ここで「タイトルと本文の間の距離」を固定する */}
      <Description text={body} />
    </div>
  </div>
);