import OrdersList, { OrderListProps } from 'components/OrdersList'
import Profile from 'templates/Profile'

import mockOrders from 'components/OrdersList/mock'
import protectedRoutes from 'utils/protected-routes'
import { GetServerSidePropsContext } from 'next'

export default function Orders({ items }: OrderListProps) {
  return (
    <Profile>
      <OrdersList items={items} />
    </Profile>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)

  return {
    props: {
      session,
      items: mockOrders
    }
  }
}
