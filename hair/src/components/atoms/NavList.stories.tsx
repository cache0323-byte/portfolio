import type { Meta, StoryObj } from '@storybook/react'
import { NavList } from './NavList'

const meta: Meta<typeof NavList> = {
  title: 'Atoms/NavList',
  component: NavList,
}
export default meta

type Story = StoryObj<typeof NavList>

export const Default: Story = {
  args: {
    items: [
      { label: 'MESSAGE', href: '/message' },
      { label: 'CHECK IT', href: '/check_it' },
      { label: 'PRODUCT', href: '/product' },
    ],
  },
}
