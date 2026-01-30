// src/components/atoms/Logo.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Logo } from './Logo';

const meta: Meta<typeof Logo> = {
  component: Logo,
  title: 'Atoms/Logo', // Storybook上の表示名
};

export default meta;
type Story = StoryObj<typeof Logo>;

export const Default: Story = {};