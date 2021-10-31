import { Story, Meta } from '@storybook/react'
import CartDropdown from '.'

import items from 'components/CartList/mock'

export default {
  title: 'CartDropdown',
  component: CartDropdown,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story = (args) => (
  <div style={{ maxWidth: '95%', display: 'flex', justifyContent: 'flex-end' }}>
    <CartDropdown {...args} />
  </div>
)

Default.args = {
  CartContextValue: {
    items,
    quantity: items.length,
    total: '$300'
  }
}

export const Empty: Story = () => (
  <div style={{ maxWidth: '95%', display: 'flex', justifyContent: 'flex-end' }}>
    <CartDropdown />
  </div>
)
