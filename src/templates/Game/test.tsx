import { screen, render } from '../../utils/test-utils'

import galleryMock from 'components/Gallery/mock'
import gamesMock from 'components/GameCardSlider/mock'
import gameInfoMock from 'components/GameInfo/mock'
import gameDetailsMock from 'components/GameDetails/mock'
import Game, { GameTemplateProps } from '.'
import React from 'react'

const props: GameTemplateProps = {
  cover: 'bg-image.jpg',
  gameInfo: gameInfoMock,
  gallery: galleryMock,
  description: `<h1>Content</h1>`,
  details: gameDetailsMock,
  recommendedGames: gamesMock,
  recommendedTitle: 'Recommended Games'
}

jest.mock('templates/Base', () => {
  return {
    __esModule: true,
    default: function Mock({ children }: { children: React.ReactNode }) {
      return <div data-testid="Mock Base">{children}</div>
    }
  }
})

jest.mock('components/Gallery', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Gallery"></div>
    }
  }
})

jest.mock('components/GameDetails', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock GameDetails"></div>
    }
  }
})

jest.mock('components/GameInfo', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock GameInfo"></div>
    }
  }
})

jest.mock('components/ShowCase', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock ShowCase"></div>
    }
  }
})

describe('<Game />', () => {
  it('should render the template with components', () => {
    render(<Game {...props} />)

    expect(screen.getByTestId(/mock gallery/i)).toBeInTheDocument()
    expect(screen.getByTestId(/mock gamedetails/i)).toBeInTheDocument()
    expect(screen.getByTestId(/mock gameinfo/i)).toBeInTheDocument()
    expect(screen.getAllByTestId(/mock showcase/i)).toHaveLength(1)
    expect(screen.getByText(/content/i)).toBeInTheDocument()
  })

  it('should not render the gallery if no images', () => {
    render(<Game {...props} gallery={undefined} />)

    expect(screen.queryByTestId(/mock gallery/i)).not.toBeInTheDocument()
  })

  it('should not render the gallery on mobile', () => {
    render(<Game {...props} />)

    expect(screen.getByTestId(/mock gallery/i).parentElement).toHaveStyle({
      display: 'none'
    })

    expect(screen.getByTestId(/mock gallery/i).parentElement).toHaveStyleRule(
      'display',
      'block',
      {
        media: '(min-width: 768px)'
      }
    )
  })
  it('should render cover image', () => {
    render(<Game {...props} />)

    expect(screen.getByRole('image', { name: /cover/i })).toHaveStyle({
      backgroundImage: 'url(bg-image.jpg)',
      height: '39.5rem'
    })

    expect(screen.getByRole('image', { name: /cover/i })).toHaveStyleRule(
      'height',
      '70rem',
      {
        media: '(min-width: 768px)'
      }
    )

    expect(screen.getByRole('image', { name: /cover/i })).toHaveStyleRule(
      'clip-path',
      'polygon(0 0,100% 0,100% 100%,0 85%)',
      {
        media: '(min-width: 768px)'
      }
    )
  })
})
