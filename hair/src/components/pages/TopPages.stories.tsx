import type { Meta, StoryObj } from '@storybook/react';
import { TopPage } from './TopPage';

const meta: Meta<typeof TopPage> = {
  title: 'Pages/TopPage',
  component: TopPage,
  parameters: {
    // ページ全体を見るのでフルスクリーン設定
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof TopPage>;

export const Default: Story = {};