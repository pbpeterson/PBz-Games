/* eslint-disable @next/next/no-img-element */
import { ShoppingCart } from '@styled-icons/material-outlined'
import Button from 'components/Button'
import Heading from 'components/Heading'
import * as S from './styles'

const PaymentForm = () => {
  return (
    <S.Wrapper>
      <S.Body>
        <Heading color="black" lineBottom size="small">
          Payment
        </Heading>
      </S.Body>
      <S.Footer>
        <Button as="a" fullWidth minimal>
          Continue Shopping
        </Button>
        <Button fullWidth icon={<ShoppingCart />}>
          Buy now
        </Button>
      </S.Footer>
    </S.Wrapper>
  )
}
export default PaymentForm
