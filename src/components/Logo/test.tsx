import { screen, render } from '../../utils/test-utils'

import 'jest-styled-components'

import Logo from '.'

describe('<Logo />', () => {
  it('should render a white label by default', () => {
    render(<Logo />)
    expect(
      screen.getByLabelText(/pbz games/i).parentElement
    ).toBeInTheDocument()
  })
})
