import Empty from 'components/Empty'
import GameItem, { GameItemProps, PaymentInfoProps } from 'components/GameItem'
import Heading from 'components/Heading'
import * as S from './styles'

type OrderProps = {
  id: string
  paymentInfo: PaymentInfoProps
  games: GameItemProps[]
}

export type OrderListProps = {
  items?: OrderProps[]
}

const OrdersList = ({ items }: OrderListProps) => (
  <S.Wrapper>
    <Heading lineBottom lineColor="primary" color="black" size="small">
      My orders
    </Heading>

    {items?.length ? (
      items.map((order) => {
        return order.games.map((game) => {
          return (
            <GameItem
              key={order.id}
              {...game}
              paymentInfo={order.paymentInfo}
            />
          )
        })
      })
    ) : (
      <Empty
        title="You have no orders yet"
        description="Go back to the store"
      />
    )}
  </S.Wrapper>
)

export default OrdersList
