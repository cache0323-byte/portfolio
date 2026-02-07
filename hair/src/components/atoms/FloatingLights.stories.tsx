import type { Meta, StoryObj } from '@storybook/react';
import { FloatingLights } from './FloatingLights';

const meta: Meta<typeof FloatingLights> = {
  component: FloatingLights,
  title: 'Atoms/FloatingLights',
  parameters:{layout: 'fullscreen'}
};

export default meta;
type Story = StoryObj<typeof FloatingLights>;

export const Default: Story = {
  render: () => (
    // 背景の動きが見えやすいように、高さを持たせたコンテナの中で表示
    <div className="relative w-full h-screen bg-white overflow-hidden">
      <FloatingLights />
      <div className="relative z-10 flex items-center justify-center h-full">
        <p className="text-gray-400 font-serif">背景の柔らかな光が動いています...</p>
      </div>
    </div>
  ),
};