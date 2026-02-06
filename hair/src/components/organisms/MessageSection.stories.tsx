import type { Meta, StoryObj } from '@storybook/react';
import { MessageSection } from './MessageSection';

const meta: Meta<typeof MessageSection> = {
  title: 'Organisms/MessageSection',
  component: MessageSection,
  parameters: {
    // セクション全体なので、画面いっぱいの見た目を確認できるようにする
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof MessageSection>;

export const Default: Story = {};