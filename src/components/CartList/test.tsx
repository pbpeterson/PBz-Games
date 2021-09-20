import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import mockItems from './mock'

import CartList from '.'

describe('<CartList />', () => {
  it('should render the heading', () => {
    renderWithTheme(<CartList items={mockItems} total="R$ 330,00" />)

    expect(screen.getAllByRole('heading')).toHaveLength(2)
    expect(screen.getByText('R$ 330,00')).toBeInTheDocument()
  })

  it('should render the button', () => {
    renderWithTheme(<CartList items={mockItems} total="R$ 330,00" hasButton />)

    expect(screen.getByText(/buy it now/i)).toBeInTheDocument()
  })
  it('should render empty if there are no games', () => {
    renderWithTheme(<CartList hasButton />)

    expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument()
    expect(screen.queryByText(/total/i)).not.toBeInTheDocument()
  })
})
