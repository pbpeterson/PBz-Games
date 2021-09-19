import { Story, Meta } from '@storybook/react'
import CartIcon, { CartIconsProps } from '.'

export default {
  title: 'CartIcon',
  component: CartIcon,
  parameters: {
    backgrounds: {
      defaut: 'won-dark'
    }
  }
} as Meta

export const Default: Story = () => <CartIcon />
export const withItems: Story<CartIconsProps> = (args) => <CartIcon {...args} />

withItems.args = {
  quantity: 3
}
