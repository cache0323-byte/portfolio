import { TextBox } from '../molecule/TextBox';
import { ProductCard } from '../molecule/ProductCard';

export const ProductSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* セクション見出し */}
        <div className="mb-12">
          <TextBox 
            title="PRODUCTS" 
            body="あなたの髪悩みを解決する、4つの植物ブレンド" 
            align="center" 
          />
          <p className="text-center text-sm mt-6 max-w-2xl mx-auto text-gray-600">
            当ブランドは、抜け毛、ダメージケア、そして頭皮環境に注目し、植物の力が濃縮された4つのオイル・エッセンスにたどり着きました。
          </p>
        </div>

        {/* 商品グリッド */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* ここで ProductCard を map で回すか、4つ並べる */}
          <ProductCard title="Glow Rich Oil" ... />
          <ProductCard title="Scalp Vital Oil" ... />
          <ProductCard title="Balance Moist" ... />
          <ProductCard title="Airy Silk Oil" ... />
        </div>
      </div>
    </section>
  );
};