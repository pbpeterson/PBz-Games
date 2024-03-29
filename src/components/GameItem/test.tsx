import { screen, render } from '../../utils/test-utils'

import GameItem, { PaymentInfoProps } from '.'
import { CartContextDefaultValues } from 'hooks/use-cart'
import userEvent from '@testing-library/user-event'

const props = {
  id: '1',
  img: 'https://source.unsplash.com/user/willianjusten/151x70',
  title: 'Red Dead Redemption 2',
  price: 'R$ 251,00'
}

describe('<GameItem />', () => {
  it('should render the item', () => {
    render(<GameItem {...props} />)

    expect(
      screen.getByRole('heading', { name: /red dead redemption 2/i })
    ).toBeInTheDocument()

    expect(screen.getByText(props.price)).toBeInTheDocument()

    expect(screen.getByRole('img')).toHaveAttribute('src', props.img)
  }),
    it('should render remove if the item is inside the cart and call remove', () => {
      const cartProviderProps = {
        ...CartContextDefaultValues,
        isInCart: () => true,
        removeFromCart: jest.fn()
      }
      render(<GameItem {...props} />, { cartProviderProps })

      const removeLink = screen.getByText(/remove/i)
      expect(removeLink).toBeInTheDocument()

      userEvent.click(removeLink)
      expect(cartProviderProps.removeFromCart).toHaveBeenCalledWith('1')
    }),
    it('should render the item with download link', () => {
      const downloadLink = 'https://link'

      render(<GameItem {...props} downloadLink={downloadLink} />)

      expect(
        screen.getByRole('link', { name: `Get ${props.title} here` })
      ).toHaveAttribute('href', downloadLink)
    })
  it('should render the item payment info', () => {
    const paymentInfo: PaymentInfoProps = {
      flag: 'mastercard',
      img: '/img/cards/master-card.png',
      number: '**** **** **** 4321',
      purchaseDate: 'Purchase made on 07/20/2020/ at 14:05'
    }

    render(<GameItem {...props} paymentInfo={paymentInfo} />)
    expect(
      screen.getByRole(/img/i, {
        name: paymentInfo.flag
      })
    ).toHaveAttribute('src', paymentInfo.img)
  })
})
