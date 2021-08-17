import { Story, Meta } from '@storybook/react'
import CheckBox, { CheckBoxProps } from '.'

export default {
  title: 'CheckBox',
  component: CheckBox,
  backgrounds: {
    default: 'won-dark'
  }
} as Meta

export const Default: Story<CheckBoxProps> = (args) => (
  <>
    <div style={{ padding: 10 }}>
      <CheckBox isChecked name="category" label="action" labelFor="Action" />
    </div>
    <div style={{ padding: 10 }}>
      <CheckBox
        isChecked
        {...args}
        name="category"
        label="adventure"
        labelFor="Adventure"
      />
    </div>
    <div style={{ padding: 10 }}>
      <CheckBox
        isChecked
        {...args}
        name="category"
        label="strategy"
        labelFor="Strategy"
      />
    </div>
  </>
)
