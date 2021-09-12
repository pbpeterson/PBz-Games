import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import mockPaymentOptions from './mock'

import PaymentOptions from '.'

describe('<PaymentOptions />', () => {
  it('should render the saved card options and the add new card button', () => {
    renderWithTheme(
      <PaymentOptions cards={mockPaymentOptions} handlePayment={jest.fn} />
    )

    expect(screen.getByLabelText(/1234/)).toBeInTheDocument()
    expect(screen.getByLabelText(/4321/)).toBeInTheDocument()
    expect(screen.getByText(/add a new credit card/i)).toBeInTheDocument()
  })
})
