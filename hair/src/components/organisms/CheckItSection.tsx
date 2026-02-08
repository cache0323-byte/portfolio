import { TextBox } from '../molecules/TextBox';
import { Button } from '../atoms/Button';
import Link from 'next/link';

export const CheckItSection = () => {
  return (
    <section 
      id="checkIt"
      className=" w-full aspect-[1360/907] 
                  flex items-center justify-center 
                  bg-cover bg-center relative"
      style={{
        backgroundImage:"url('/images/check01.jpg')"
      }}> 
      <div 
        className="max-w-4xl mx-auto px-6 text-center">
        <TextBox 
          label="CHECK IT" 
          title={
            <>
            しっとり？さらさら？<br />
            あなたの悩みに効く<br />
            自然の答えを診断します。
            </>
          }
          align="center"
          titleGap='mt-14'
          bodyGap='mt-8'
        />


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