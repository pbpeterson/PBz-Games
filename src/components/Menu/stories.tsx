import { Story, Meta } from '@storybook/react'
import Menu, { MenuProps } from '.'

export default {
  title: 'Menu',
  component: Menu
} as Meta

export const Default: Story<MenuProps> = (args) => <Menu {...args} />
export const Logged: Story<MenuProps> = (args) => (
  <Menu {...args} username={'Peterson'} />
)

Default.parameters = {
  layout: 'fullscreen',
  backgrounds: {
    default: 'Won Dark'
  }
}
