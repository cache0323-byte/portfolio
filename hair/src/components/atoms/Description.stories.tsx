// src/components/atoms/Heading.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Description } from './Description';

const meta: Meta<typeof Description> = {
  component: Description,
  title: 'Atoms/Description',
};

export default meta;
type Story = StoryObj<typeof Description>;


export const Default: Story = {
  args: {
    children: '当ブランドは、髪の質感、ダメージレベル、そして頭皮環境に着目し、植物の力が凝縮された４つのオイル・エッセンスにたどり着きました。あなたの診断結果に基づき、髪本来の美しさを取り戻す最適な１本をご紹介します。',
  },
};
