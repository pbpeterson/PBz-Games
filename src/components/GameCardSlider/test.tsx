import 'match-media-mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import mockItems from './mock'

import GameCardSlider from '.'

describe('<GameCardSlider />', () => {
  it('should render the white arrow if color passed', () => {
    renderWithTheme(<GameCardSlider items={mockItems} />)

    expect(screen.getByLabelText(/previous game/i)).toHaveStyle({
      color: '#FAFAFA'
    })
    expect(screen.getByLabelText(/next games/i)).toHaveStyle({
      color: '#FAFAFA'
    })
  })
})
