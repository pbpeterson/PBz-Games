import { Story, Meta } from '@storybook/react'
import Loading from '.'

export default {
  title: 'Loading',
  component: Loading
} as Meta

export const Default: Story = () => (
  <div style={{ width: '900px', height: '300px' }}>
    <Loading />
  </div>
)
