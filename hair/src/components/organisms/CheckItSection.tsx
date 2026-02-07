import { TextBox } from '../molecules/TextBox';
import { Button } from '../atoms/Button';
import Link from 'next/link';

export const CheckItSection = () => {
  return (
    <section id="checkIt" className="py-24 bg-cover bg-center"
    style={{
        backgroundImage:"url('/images/check01.jpg')"
    }}> 
      <div className="max-w-4xl mx-auto px-6 text-center items-center">
        {/* 見出し */}
        <TextBox 
          title="CHECK IT" 
          body="今のあなたに最適なケアを。" 
          align="center" 
        />
        
        {/* 説明文 */}
        <p className="mt-6 text-[var(--primary-black)] opacity-80 leading-relaxed font-noto">
          髪の悩みや理想の仕上がりは、人それぞれ。<br />
          4つの植物ブレンドから、あなたの髪を輝かせる<br className="sm:hidden" />「運命の一本」を診断します。
        </p>

        {/* 診断開始ボタン */}
        <div className="mt-12 flex justify-center">
          <Link href="/diagnosis">
            <Button>
              診断をはじめる 
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};