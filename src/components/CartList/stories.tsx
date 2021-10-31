import { Story, Meta } from '@storybook/react'
import CartList from '.'

import items from './mock'

export default {
  title: 'CartList',
  component: CartList,
  argTypes: {
    cartContextValue: {
      type: ''
    },
    items: {
      type: ''
    }
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story = (args) => (
  <div style={{ maxWidth: 800 }}>
    {' '}
    <CartList {...args} />
  </div>
)

Default.args = {
  total: '$100',
  CartContextValue: { items }
}

export const Empty: Story = () => (
  <div style={{ maxWidth: 800 }}>
    {' '}
    <CartList />
  </div>
)
