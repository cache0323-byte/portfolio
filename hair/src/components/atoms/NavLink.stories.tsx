import type { Meta, StoryObj } from '@storybook/react';
import { NavLink } from './NavLink';

const meta: Meta<typeof NavLink> = {
  component: NavLink,
  title: 'Atoms/NavLink', // Storybook上の表示名
};

export default meta;
type Story = StoryObj<typeof NavLink>;

export const Default: Story = {
    args:{
    href: '#',
    children :'MESSAGE'
    }
};