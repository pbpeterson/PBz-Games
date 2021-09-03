import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import 'match-media-mock'

import mockGames from 'components/GameCardSlider/mock'
import mockHighlight from 'components/Highlight/mock'

import ShowCase from '.'

const props = {
  title: 'Most popular',
  games: mockGames.slice(0, 1),
  highlight: mockHighlight
}

describe('<ShowCase />', () => {
  it('should render full showcase', () => {
    renderWithTheme(<ShowCase {...props} />)

    expect(screen.getByText(/most popular/i)).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: mockHighlight.title })
    ).toBeInTheDocument()
  })

  it('should render without title', () => {
    renderWithTheme(
      <ShowCase games={props.games} highlight={props.highlight} />
    )

    expect(
      screen.getByRole('heading', { name: props.highlight.title })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: props.games[0].title })
    ).toBeInTheDocument()
  })

  it('should render without highlight', () => {
    renderWithTheme(<ShowCase title={props.title} games={props.games} />)

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: props.games[0].title })
    ).toBeInTheDocument()
  })

  it('should render without games', () => {
    renderWithTheme(
      <ShowCase title={props.title} highlight={props.highlight} />
    )

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: props.highlight.title })
    ).toBeInTheDocument()
  })
})
