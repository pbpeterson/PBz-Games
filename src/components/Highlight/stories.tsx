import { Story, Meta } from '@storybook/react'
import Highlight, { HighlightProps } from '.'
import item from './mock'

export default {
  title: 'Highlight',
  component: Highlight,
  args: { ...item },
  backgrounds: {
    value: 'Won Dark'
  }
} as Meta

export const Default: Story<HighlightProps> = (args) => <Highlight {...args} />
export const WithFloatImage: Story<HighlightProps> = (args) => (
  <Highlight {...args} floatImage="img/red-dead-float.png" />
)
