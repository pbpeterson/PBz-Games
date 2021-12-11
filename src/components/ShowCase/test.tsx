import 'session.mock'
import { screen, render } from '../../utils/test-utils'

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
    render(<ShowCase {...props} />)

    expect(screen.getByText(/most popular/i)).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: mockHighlight.title })
    ).toBeInTheDocument()
  })

  it('should render without title', () => {
    render(<ShowCase games={props.games} highlight={props.highlight} />)

    expect(
      screen.getByRole('heading', { name: props.highlight.title })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: props.games[0].title })
    ).toBeInTheDocument()
  })

  it('should render without highlight', () => {
    render(<ShowCase title={props.title} games={props.games} />)

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: props.games[0].title })
    ).toBeInTheDocument()
  })

  it('should render without games', () => {
    render(<ShowCase title={props.title} highlight={props.highlight} />)

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: props.highlight.title })
    ).toBeInTheDocument()
  })
})
