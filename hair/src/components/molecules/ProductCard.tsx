import React from 'react';

export interface ProductCardProps {
  imageUrl?: string;
  title: string;
  description?: React.ReactNode;
}

export const ProductCard: React.FC<ProductCardProps> = ({ 
  imageUrl, 
  title, 
  description, 
}) => {
  return (
    <article 
      className="
        max-w-[265px] 
        bg-white 
        overflow-hidden 
        flex flex-col items-center
      ">
        {/* 画像 */}
        <div 
          className="
            aspect-[4/3] 
            w-full 
            overflow-hidden
          ">
          <img 
            src={imageUrl} 
            alt={title} 
            className=" 
              h-full 
              w-full 
              object-contain 
              transition-transform 
              duration-300 
              hover:scale-105" 
          />
        </div>

        {/* テキスト*/}
        <div 
          className="
            py-6 
            px-1 
            items-center
          ">
            <h3 
              className="
              mb-2 
              text-xl 
              font-bold 
              leading-tight 
              text-[var(--primary-brown)]
              ">
              {title}
            </h3>
            <div 
              className="
                mb-4 
                text-base 
                font-semibold
                leading-relaxed 
                font-[var(--font-noto-sans)] 
                text-center
              ">
              {description}
            </div>
        </div>
    </article>
  );
};

export default ProductCard;