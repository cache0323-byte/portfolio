import React from 'react';

export interface ProductCardProps {
  imageUrl: string;
  title: React.ReactNode;
  description: React.ReactNode;
  category?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ 
  imageUrl, 
  title, 
  description, 
  category 
}) => {
  return (
    <article className="max-w-[265px] bg-white overflow-hidden flex flex-col items-center">
      {/* 画像エリア: アスペクト比を固定すると並べた時に綺麗です */}
      <div className="aspect-[4/3] w-full overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className=" h-full w-full  object-contain transition-transform duration-300 hover:scale-105" 
        />
      </div>

      {/* テキストエリア: ブラウン系の変数を適用 */}
      <div className="py-6 px-1 items-center">
        {category && (
          <span className="inline-block mb-2 text-xs font-bold tracking-wider uppercase text-[var(--primary-brown)] opacity-80">
            {category}
          </span>
        )}
        
        <h3 className="mb-2 text-xl font-bold leading-tight text-[var(--primary-brown)]">
          {title}
        </h3>
        
        <p className="mb-4 text-sm leading-relaxed text-[var(--primary-black)]  text-center">
          {description}
        </p>
      </div>
    </article>
  );
};

export default ProductCard;