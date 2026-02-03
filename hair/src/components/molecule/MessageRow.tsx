type Props = {
  title: React.ReactNode;
  text: string;
  imgSrc: string;
  reverse?: boolean; // 画像を左にするか右にするかのフラグ
};

export const MessageRow = ({ title, text, imgSrc, reverse = false }: Props) => {
  return (
    <div 
      className={`relative flex items-start justify-center w-full ${reverse ? 'flex-row-reverse' : 'flex-row'}`}
      style={{ minHeight: '587px' }} // 写真427px + ズレ160px 分の最低高さを確保
    >
      
      {/* 写真エリア: 640px / 427px */}
      <div className="w-[52%] max-w-[640px] shrink-0">
        <img 
          src={imgSrc} 
          alt="" 
          className="w-full h-[427px] object-none object-right shadow-sm" 
        />
      </div>

      {/* テキストエリア: 600px / 320px */}
      {/* 40px被らせるために margin を調整 */}
      <div 
        className={`w-[48%] max-w-[600px] shrink-0 relative ${reverse ? '-mr-[40px]' : '-ml-[40px]'}`}
        style={{ top: '160px' }} // 160px下にズラす
      >
        <div 
          className="p-10 h-[320px] flex flex-col justify-center shadow-sm"
          style={{ 
            backgroundColor: 'color-mix(in srgb, var(--primary-brown), transparent 92%)',
            backdropFilter: 'blur(8px)'
          }}
        >
          <h3 
            className="mb-4 leading-relaxed font-bold"
            style={{ 
              fontSize: 'var(--size-title)', 
              fontFamily: 'var(--font-zen)',
              color: 'var(--primary-black)'
            }}
          >
            {title}
          </h3>
          <p 
            className="leading-loose"
            style={{ 
              fontSize: '18px', 
              fontFamily: 'var(--font-noto)',
              color: 'var(--primary-black)'
            }}
          >
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};