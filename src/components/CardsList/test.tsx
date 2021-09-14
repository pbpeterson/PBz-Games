import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import cardsMock from 'components/PaymentOptions/mock'

import CardsList from '.'

describe('<CardsList />', () => {
  it('should render cards lists', () => {
    renderWithTheme(<CardsList cards={cardsMock} />)

    expect(
      screen.getByRole('heading', { name: /my cards/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /visa/i })).toHaveAttribute(
      'src',
      cardsMock[0].img
    )
    expect(screen.getByText(/1234/i)).toBeInTheDocument()
  })
})