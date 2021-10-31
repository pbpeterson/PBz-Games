// should render button to add and remove items from cart if method is clicked

import userEvent from '@testing-library/user-event'
import { CartContextDefaultValues } from 'hooks/use-cart'
import { render, screen } from 'utils/test-utils'
import CartButton from '.'

describe('CartButton', () => {
  it('Should render button to add and remove items from cart if method is clicked', () => {
    const cartProviderProps = {
      ...CartContextDefaultValues,
      isInCart: () => false,
      addToCart: jest.fn()
    }
    render(<CartButton id="1" />, {
      cartProviderProps
    })

    expect(screen.getByLabelText(/add to cart/i)).toBeInTheDocument()

    userEvent.click(screen.getByLabelText(/add to cart/i))
    expect(cartProviderProps.addToCart).toHaveBeenCalledWith('1')
  })
  it('should render button to remove and call the method if clicked', () => {
    const cartProviderProps = {
      ...CartContextDefaultValues,
      isInCart: () => true,
      removeFromCart: jest.fn()
    }

    render(<CartButton id="1" />, { cartProviderProps })

    const button = screen.getByLabelText(/remove from cart/i)
    expect(button).toBeInTheDocument()

    userEvent.click(button)
    expect(cartProviderProps.removeFromCart).toHaveBeenCalledWith('1')
  })
})
