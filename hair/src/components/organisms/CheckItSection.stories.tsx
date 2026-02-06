import type { Meta, StoryObj } from '@storybook/react';
import { CheckItSection } from './CheckItSection';

const meta: Meta<typeof CheckItSection> = {
  title: 'Organisms/CheckItSection',
  component: CheckItSection,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof CheckItSection>;

export const Default: Story = {};