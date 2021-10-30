import { screen, render } from '../../utils/test-utils'

import Ribbon from '.'

describe('<Ribbon />', () => {
  it('should render the heading', () => {
    render(<Ribbon>Best seller</Ribbon>)

    expect(screen.getByText(/best seller/i)).toBeInTheDocument()
  })

  it('should render with the primary color', () => {
    render(<Ribbon>Best seller</Ribbon>)

    expect(screen.getByText(/best seller/i)).toHaveStyle({
      'background-color': '#f231a5'
    })
  })

  it('should render with the secondary color', () => {
    render(<Ribbon color="secondary">Best seller</Ribbon>)

    expect(screen.getByText(/best seller/i)).toHaveStyle({
      'background-color': '#3CD3C1'
    })
  })
  it('should render with the normal size as default', () => {
    render(<Ribbon>Best seller</Ribbon>)

    expect(screen.getByText(/best seller/i)).toHaveStyle({
      'font-size': '1.4rem',
      height: '3.6rem'
    })
  })
  it('should render with the small size', () => {
    render(<Ribbon size="small">Best seller</Ribbon>)

    expect(screen.getByText(/best seller/i)).toHaveStyle({
      'font-size': '1.2rem',
      height: '2.6rem'
    })
  })
})
