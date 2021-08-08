import { Story, Meta } from '@storybook/react'
import Highlight, { HighlightProps } from '.'

export default {
  title: 'Highlight',
  component: Highlight,
  args: {
    title: "Read Dead it's back",
    subtitle: "Come see John's new adventure",
    buttonLabel: 'buy now',
    buttonLink: '/rdr2',
    backgroundImage: 'img/red-dead-img.jpg'
  }
} as Meta

export const Default: Story<HighlightProps> = (args) => <Highlight {...args} />
export const WithFloatImage: Story<HighlightProps> = (args) => (
  <Highlight {...args} floatImage="img/red-dead-float.png" />
)
