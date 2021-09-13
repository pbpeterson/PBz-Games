import Cart, { CartProps } from 'templates/Cart'

import cardsMock from 'components/PaymentOptions/mock'
import itemsMock from 'components/CartList/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highLightsMock from 'components/Highlight/mock'

export default function CartPage(props: CartProps) {
  return <Cart {...props} />
}

export async function getServerSideProps() {
  return {
    props: {
      items: itemsMock,
      total: 'R$ 430,00',
      cards: cardsMock,
      recommendedGames: gamesMock,
      recommendedHighlight: highLightsMock
    }
  }
}
