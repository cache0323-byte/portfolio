import type { Meta, StoryObj } from '@storybook/react';
import { ProductSection } from './ProductSection';

const meta: Meta<typeof ProductSection> = {
  title: 'Organisms/ProductSection',
  component: ProductSection,
  parameters: {
    // 画面いっぱいに表示を確認したいので、layoutをfullscreenに設定
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof ProductSection>;

export const Default: Story = {
//   // セクション全体なので、propsでデータを渡せるようにしておくと便利です
//   args: {
//     products: [
//       {
//         id: 1,
//         title: 'Glow Rich Oil',
//         subTitle: '濃密なツヤ',
//         description: 'リッチな補修力',
//         imgSrc: '/images/product01.jpg',
//       },
//       {
//         id: 2,
//         title: 'Scalp Vital Oil',
//         subTitle: '健やかな地肌',
//         description: 'スカルプケアに',
//         imgSrc: '/images/product02.jpg',
//       },
//       {
//         id: 3,
//         title: 'Balance Moist',
//         subTitle: '潤いキープ',
//         description: '乾燥を防ぐ',
//         imgSrc: '/images/product03.jpg',
//       },
//       {
//         id: 4,
//         title: 'Airy Silk Oil',
//         subTitle: '軽やかな指通り',
//         description: 'サラサラ仕上げ',
//         imgSrc: '/images/product04.jpg',
//       },
//     ],
//   },
};