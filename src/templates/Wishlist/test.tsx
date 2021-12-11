import 'session.mock'
import { screen, render } from '../../utils/test-utils'

import gamesMock from 'components/GameCardSlider/mock'
import highlightsMock from 'components/Highlight/mock'

import Wishlist, { WishlistTemplateProps } from '.'

jest.mock('templates/Base', () => {
  return {
    __esModule: true,
    default: function Mock({ children }: { children: React.ReactNode }) {
      return <div data-testid="Mock Base">{children}</div>
    }
  }
})

jest.mock('components/ShowCase', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock ShowCase"></div>
  }
}))

const props: WishlistTemplateProps = {
  games: gamesMock,
  recommendedGames: gamesMock,
  recommendedHighlight: highlightsMock
}

describe('<Wishlist />', () => {
  it('should render the heading', () => {
    render(<Wishlist {...props} />)

    expect(screen.getByTestId(/Mock showcase/i)).toBeInTheDocument()

    expect(screen.getAllByText(/population zero/i)).toHaveLength(6)
    expect(
      screen.getByRole('heading', { name: /wishlist/i })
    ).toBeInTheDocument()
  })

  it('should render empty when there are no games', () => {
    render(
      <Wishlist
        recommendedGames={props.recommendedGames}
        recommendedHighlight={highlightsMock}
      />
    )

    expect(screen.queryByText(/population zero/i)).not.toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /your wishlist is empty/i })
    ).toBeInTheDocument()
  })
})
