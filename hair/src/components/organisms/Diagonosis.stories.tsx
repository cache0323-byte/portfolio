import type { Meta, StoryObj } from '@storybook/react';
import { DiagnosisTool } from '../organisms/DiagonosisTool';

const meta: Meta<typeof DiagnosisTool> = {
  title: 'Organisms/DiagnosisTool',
  component: DiagnosisTool,
  parameters: {
    // 診断画面なので、少しグレーの背景で余白がある方が見やすいです
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div className="w-screen min-h-screen bg-gray-50 p-10">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof DiagnosisTool>;

export const Default: Story = {};