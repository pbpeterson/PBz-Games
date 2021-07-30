import { Story, Meta } from '@storybook/react'
import MediaMatch from '.'

export default {
  title: 'MediaMatch',
  component: MediaMatch
} as Meta

export const Mobile: Story = () => (
  <MediaMatch lessThan="medium">Won Games Mobile</MediaMatch>
)
export const Desktop: Story = () => (
  <MediaMatch greaterThan="medium">Won Games Desktop</MediaMatch>
)

Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1'
  }
}
