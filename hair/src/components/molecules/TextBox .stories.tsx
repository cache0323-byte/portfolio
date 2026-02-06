import type { Meta, StoryObj } from '@storybook/react';
import { TextBox } from './TextBox';

const meta: Meta<typeof TextBox> = {
  title: 'Molecules/TextBox', // Storybookのサイドバーでの表示名
  component: TextBox,
  tags: ['autodocs'], // 自動でドキュメントを生成
  argTypes: {
    align: { control: 'radio', options: ['left', 'center'] },
  },
};

export default meta;
type Story = StoryObj<typeof TextBox>;

// 1. 基本パターン（タイトルと本文あり）
export const Default: Story = {
  args: {
    title: '髪と心に、優しさのリセットを',
    body: '私たちの製品は、植物の生命力にこだわり、不要な化学物質を一切排除しました。',
    align: 'left',
  },
};

// 2. タイトルのみ（CHECK ITセクションの導入など）
export const OnlyTitle: Story = {
  args: {
    title: 'CHECK IT',
    align: 'center',
  },
};

// 3. 中央揃え（セクションの見出しなど）
export const CenterAligned: Story = {
  args: {
    title: 'あなたの髪悩みを解決する',
    body: "当ブランドは、髪の質感、ダメージレベル、そして頭皮環境に着目し、植物の力が凝縮された４つのオイル・エッセンスにたどり着きました。あなたの診断結果に基づき、髪本来の美しさを取り戻す最適な１本をご紹介します。",
    align: 'left',
  },
};