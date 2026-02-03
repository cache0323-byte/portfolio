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
