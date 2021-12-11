import 'session.mock'
import 'match-media-mock'
import { screen, render } from '../../utils/test-utils'

import mockItems from './mock'

import GameCardSlider from '.'

describe('<GameCardSlider />', () => {
  it('should render the white arrow if color passed', () => {
    render(<GameCardSlider items={mockItems} />)

    expect(screen.getByLabelText(/previous game/i)).toHaveStyle({
      color: '#FAFAFA'
    })
    expect(screen.getByLabelText(/next games/i)).toHaveStyle({
      color: '#FAFAFA'
    })
  })
})
