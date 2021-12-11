import CartButton from 'components/CartButon'
import Heading from 'components/Heading'
import Ribbon from 'components/Ribbon'
import WishlistButton from 'components/WishlistButton'
import formatPrice from 'utils/formatPrice'
import * as S from './styles'

export type GameInfoProps = {
  id: string
  title: string
  description: string
  price: number
}

const GameInfo = ({ id, title, description, price }: GameInfoProps) => (
  <S.Wrapper>
    <Heading color="black" lineBottom>
      {title}
    </Heading>

    <S.Description>{description}</S.Description>

    <Ribbon color="secondary">{formatPrice(price)}</Ribbon>

    <S.ButtonsWrapper>
      <CartButton id={id} size="large" hasText />
      <WishlistButton id={id} size="large" hasText />
    </S.ButtonsWrapper>
  </S.Wrapper>
)

export default GameInfo
