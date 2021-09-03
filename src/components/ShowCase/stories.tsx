import { Story, Meta } from '@storybook/react'
import ShowCase, { ShowCaseProps } from '.'
import highlightMock from 'components/Highlight/mock'
import gamesMock from 'components/GameCardSlider/mock'

export default {
  title: 'ShowCase',
  component: ShowCase,
  decorators: [
    (Story) => (
      <div style={{ margin: '0 auto' }}>
        <Story />
      </div>
    )
  ],
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: Story<ShowCaseProps> = (args) => <ShowCase {...args} />

Default.args = {
  title: 'Most Populars',
  highlight: highlightMock,
  games: gamesMock
}

export const WithoutHighLight: Story<ShowCaseProps> = (args) => (
  <ShowCase {...args} />
)

WithoutHighLight.args = {
  title: 'Most populars',
  games: gamesMock
}

export const WithoutGames: Story<ShowCaseProps> = (args) => (
  <ShowCase {...args} />
)

WithoutGames.args = {
  title: 'Most populars',
  highlight: highlightMock
}
