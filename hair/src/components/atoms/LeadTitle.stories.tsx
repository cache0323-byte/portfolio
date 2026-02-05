// src/components/atoms/Heading.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { LeadTitle } from './LeadTitle';

const meta: Meta<typeof LeadTitle> = {
  component: LeadTitle,
  title: 'Atoms/LeadTitle',
};

export default meta;
type Story = StoryObj<typeof LeadTitle>;


export const Default: Story = {
  args: {
    children: 'あなたの髪悩みを解決する、４つの植物ブレンド',
  },
};
