// src/components/organisms/ProductSection.tsx
import { TextBox } from '../molecules/TextBox'; // molecules（複数形）か確認
import { ProductCard } from '../molecules/ProductCard';

export const ProductSection = () => {
  return (
    <section id="products" className="py-20 bg-white">
      <div>
        <TextBox
          title="PRODUCTS"
          align="center"
          />
      </div>
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-12 text-[var(--primary-black)]">
          <TextBox 
            title="あなたの髪悩みを解決する、4つの植物ブレンド" 
            body="当ブランドは、髪の質感、ダメージレベル、そして頭皮環境に着目し、植物の力が凝縮された４つのオイル・エッセンスにたどり着きました。あなたの診断結果に基づき、髪本来の美しさを取り戻す最適な１本をご紹介します。" 
            align="center" 
          />
        </div>

        {/* 商品グリッド */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <ProductCard 
            imageUrl="/images/oil01.jpg"
            title="Glow Rich Oil"
            description={<>濃密なツヤ<br/>リッチな補修力</>}
          />
          <ProductCard 
            imageUrl="/images/oil02.jpg"
            title="Scalp Vital Oil"
            description={<>根本からのハリ<br/>頭皮ケア</>}
          />
          <ProductCard 
            imageUrl="/images/oil03.jpg"
            title="Balance Moist"
            description={<>うねり防止<br/>内側から潤す</>}
          />
          <ProductCard 
            imageUrl="/images/oil04.jpg"
            title="Airy Silk Oil"
            description={<>軽やかな指通り<br/>さらさら感</>}
          />
        </div>
      </div>
    </section>
  );
};