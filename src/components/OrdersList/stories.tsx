import { Story, Meta } from '@storybook/react'
import OrdersList, { OrderListProps } from '.'

import mock from './mock'

export default {
  title: 'Profile/OrdersList',
  component: OrdersList,
  args: {
    items: mock
  }
} as Meta

export const Default: Story<OrderListProps> = (args) => (
  <div style={{ maxWidth: 850 }}>
    <OrdersList {...args} />
  </div>
)
