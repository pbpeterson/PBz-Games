import Link from 'next/link'
import { Done } from 'styled-icons/material-outlined'
import * as S from './styles'

const Success = () => (
  <S.Wrapper>
    <h1>Your purchase was successful!</h1>
    <S.CheckMark>
      <Done aria-label="success icon" />
    </S.CheckMark>
    <S.Text>
      Wait for your payment details by email. Your game is now available for
      download inside your{' '}
      <Link href="/profile/orders">
        <a>Orders List</a>
      </Link>
      . Enjoy!
    </S.Text>
  </S.Wrapper>
)

export default Success
