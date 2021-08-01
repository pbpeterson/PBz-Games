import { Story, Meta } from '@storybook/react'
import Button, { ButtonProps } from '.'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    },
    icon: {
      type: ''
    }
  }
} as Meta

export const Default: Story<ButtonProps> = (args) => <Button {...args} />

Default.args = {
  children: 'Buy now'
}

export const ButtonIcon: Story<ButtonProps> = (args) => <Button {...args} />

ButtonIcon.args = {
  size: 'small',
  children: 'Buy now',
  icon: <AddShoppingCart />
}

export const ButtonLink: Story<ButtonProps> = (args) => <Button {...args} />

ButtonLink.args = {
  size: 'large',
  children: 'Buy now',
  as: 'a',
  href: '/link',
  target: '_blank'
}
