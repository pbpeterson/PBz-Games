import { render, screen } from 'utils/test-utils'

import Success from '.'

describe('<Success />', () => {
  it('should render the success components', () => {
    render(<Success />)

    expect(
      screen.getByRole('heading', { name: /your purchase was successful!/i })
    ).toBeInTheDocument()

    expect(screen.getByLabelText(/success icon/i)).toBeInTheDocument()
  })
})
