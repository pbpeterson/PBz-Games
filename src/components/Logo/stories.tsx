import { Story, Meta } from '@storybook/react'
import Logo, { LogoProps } from '.'

export default {
  title: 'Logo',
  component: Logo,
  background: {
    value: 'Won Dark'
  }
} as Meta

export const Default: Story<LogoProps> = (args) => <Logo {...args} />
