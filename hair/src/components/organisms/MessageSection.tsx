import { TextBox } from '../molecules/TextBox';
import { MessageRow } from '../molecules/MessageRow';

export const MessageSection = () => {
  return (
    <section 
      id="message" 
      className="
        py-24 
        bg-[var(--primary-white)]
      ">
      <div 
        className="
          max-w-4xl mx-auto
          px-6
        ">
        <TextBox
          label="MESSAGE"
          align="center"
          className='mb-24'
        />
      </div>
      <div>
        <MessageRow
          title="髪と心に、優しさのリセットを"
          text="私たちの製品は、植物の力にこだわり、不要な化学成分は一切排除しました。使うたびに広がる、ほのかなアロマの香りで、心まで解きほぐされるような心地よさを。"
          imgSrc="/images/message01.jpg"
          reverse={true}
        />
      </div>
      <div>
        <MessageRow
          title="毎日頑張るあなたへ"
          text="使うたびに広がる、ほのかな天然アロマの香りで、心まで解きほぐされるような心地よさを。自然の恵みで髪をリセットし、自信あふれる健やかな美しさを、あなたへお届けします。"
          imgSrc="/images/message02.jpg"
          reverse={false}
        />
      </div>
    </section>
  );
};
