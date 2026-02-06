import type { Meta, StoryObj } from '@storybook/react';
import { ProductCard } from './ProductCard'; // コンポーネント名に合わせて調整してください

const meta: Meta<typeof ProductCard> = {
  title: 'Molecules/ProductCard',
  component: ProductCard,
  // MessageRowと同じデコレーター設定
  decorators: [
    (Story) => (
      <div className="max-w-5xl mx-auto py-10">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof ProductCard>;

export const Default: Story = {
  args: {
    imageUrl: '/images/oil01.jpg', // パスは環境に合わせて変更してください
    title: 'Glow Rich Oil',
    description: (<>濃密なツヤ<br/>リッチな補修力</>),
  },
};
export const Oil02: Story = {
  args: {
    imageUrl: '/images/oil02.jpg', // パスは環境に合わせて変更してください
    title: 'Scalp Vital Oil',
    description: (<>根本からのハリ<br/>頭皮ケア</>),
  },
};
export const Oil03: Story = {
  args: {
    imageUrl: '/images/oil03.jpg', // パスは環境に合わせて変更してください
    title: 'Balance Moist',
    description: (<>うねり防止<br/>内側から潤す</>),
  },
};
export const Oil04: Story = {
  args: {
    imageUrl: '/images/oil04.jpg', // パスは環境に合わせて変更してください
    title: 'Airy Silk Oil',
    description: (<>軽やかな指通り<br/>さらさら感</>),
  },
};
