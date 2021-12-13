import 'session.mock'
import { screen, render } from '../../utils/test-utils'

import gamesMock from 'components/GameCardSlider/mock'
import highlightsMock from 'components/Highlight/mock'

import Wishlist, { WishlistTemplateProps } from '.'
import { WishlistContextDefaultValues } from 'hooks/use-wishlist'

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
  recommendedGames: gamesMock,
  recommendedHighlight: highlightsMock
}

describe('<Wishlist />', () => {
  it('should render the heading', () => {
    const wishlistProviderProps = {
      ...WishlistContextDefaultValues,
      items: [gamesMock[0]]
    }
    render(<Wishlist {...props} />, { wishlistProviderProps })

    expect(screen.getByTestId(/Mock showcase/i)).toBeInTheDocument()

    expect(screen.getByText(/population zero/i)).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /wishlist/i })
    ).toBeInTheDocument()
  })

  it('should render empty when there are no games', () => {
    const wishlistProviderProps = {
      ...WishlistContextDefaultValues
    }
    render(
      <Wishlist
        recommendedGames={props.recommendedGames}
        recommendedHighlight={highlightsMock}
      />,
      { wishlistProviderProps }
    )

    expect(screen.queryByText(/population zero/i)).not.toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /your wishlist is empty/i })
    ).toBeInTheDocument()
  })
})
