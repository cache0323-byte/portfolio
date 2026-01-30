// src/components/atoms/Heading.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Heading } from './Heading';

const meta: Meta<typeof Heading> = {
  component: Heading,
  title: 'Atoms/Heading',
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const Message: Story = {
  args: {
    children: 'MESSAGE',
  },
};

export const Products: Story = {
  args: {
    children: 'PRODUCTS',
  },
};