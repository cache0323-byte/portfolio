export const FV = () => {
  return (
    <section 
      id="fv" 
      className="
        relative 
        h-screen 
        w-full 
        overflow-hidden
        bg-[#F9F4F0]
      ">
      {/* 1枚のグリッドの中に全て入れる */}
      <div 
        className="
          grid 
          h-full 
          w-full 
          grid-cols-1 
          grid-rows-1
        ">
        
        {/* 背景画像：同じエリア(col 1 / row 1) */}
        <div 
          className="
            col-start-1 
            row-start-1 
            h-full 
            w-full
          ">
          <img
            src="/images/fv01.jpg"
            alt="Sui 翠 メインビジュアル"
            className="
              h-full 
              w-full 
              object-cover
            "/>
        </div>

        <div 
          className="
            col-start-1 
            row-start-1 
            flex items-end 
            px-10 pb-20 
            z-10
          ">
          <h2 
            className="
              font-[var(--font-zen-old-mincho)] 
              text-4xl 
              leading-relaxed 
              bg-[var(--primary-white)]/20
              backdrop-blur-md 
              px-4 py-2 
              rounded-sm
            ">
            まだ迷ってるの？<br />
            あなたの悩みの
            <span 
              className="
                text-[var(--primary-brown)] 
                text-6xl]
              ">
                答え
            </span>
            がここに
          </h2>
        </div>
      </div>
    </section>
  )
}