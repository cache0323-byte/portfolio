import type { Meta, StoryObj } from '@storybook/react'
import { Layout } from './Layout'

const meta: Meta<typeof Layout> = {
  title: 'Templates/LayoutTemplate',
  component: Layout,
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof Layout>

export const Default: Story = {
  args: {
    children: (
      <div className="flex h-[150vh] items-center justify-center bg-slate-50">
        <p className="text-gray-400">ここに各ページのメインコンテンツが入ります（スクロール確認用）</p>
      </div>
    ),
  },
}