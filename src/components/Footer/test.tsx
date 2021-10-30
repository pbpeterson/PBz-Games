import { screen, render } from '../../utils/test-utils'

import Footer from '.'

describe('<Footer />', () => {
  it('should render the footer', () => {
    render(<Footer />)

    expect(screen.getByText(/contact/i)).toBeInTheDocument()
    expect(screen.getByText(/follow us/i)).toBeInTheDocument()
    expect(screen.getByText(/links/i)).toBeInTheDocument()
    expect(screen.getByText(/location/i)).toBeInTheDocument()
  })
})
