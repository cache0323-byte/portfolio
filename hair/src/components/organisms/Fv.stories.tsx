import type { Meta, StoryObj } from '@storybook/react';
import { FV } from './Fv';

const meta: Meta<typeof FV> = {
  title: 'Organisms/FV',
  component: FV,
  parameters: {
    // Storybookのデフォルトのパディングを消して、画面端まで表示させる
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof FV>;

export const Default: Story = {
  args: {
    // もしPropsで画像やテキストを変えられるようにしていたらここに書く
  },
};