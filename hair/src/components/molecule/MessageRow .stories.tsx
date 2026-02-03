import type { Meta, StoryObj } from '@storybook/react'
import { MessageRow } from './MessageRow'

const meta: Meta<typeof MessageRow> = {
  title: 'Molecules/MessageRow',
  component: MessageRow,

  decorators: [
    (Story) => (
      <div className="max-w-5xl mx-auto py-10">
        <Story />
      </div>
    ),
  ],
}
export default meta

type Story = StoryObj<typeof MessageRow>

// 通常パターン（画像が左、文字が右）
export const Default: Story = {
  args: {
    title: (<>髪と心に、<br />優しさのリセットを</>),
    text: '私たちの製品は、植物の力にこだわり、不要な化学成分は一切排除しました。使うたびに広がる、ほのかなアロマの香りで、心まで解きほぐされるような心地よさを。',
    imgSrc: '/images/message01.jpg', 
    reverse: true,
  },
}

// 逆パターン（画像が右、文字が左）
export const Reversed: Story = {
  args: {
    ...Default.args,
    title: '毎日頑張るあなたへ',
    text: '使うたびに広がる、ほのかな天然アロマの香りで、心まで解きほぐされるような心地よさを。自然の恵みで髪をリセットし、自信あふれる健やかな美しさを、あなたへお届けします。',
    imgSrc: '/images/message02.jpg', 
    reverse: false,
  },
}