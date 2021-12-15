import { Container } from 'components/Container'
import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'
import ShowCase from 'components/ShowCase'
import { useCart } from 'hooks/use-cart'
import Link from 'next/link'
import { useEffect } from 'react'
import { Done } from 'styled-icons/material-outlined'
import * as S from './styles'

export type SuccessProps = {
  recommendedGames?: GameCardProps[]
  recommendedTitle?: string
  recommendedHighlight?: HighlightProps
}

const Success = ({
  recommendedGames,
  recommendedTitle,
  recommendedHighlight
}: SuccessProps) => {
  const { clearCart } = useCart()

  useEffect(() => {
    clearCart()
  }, [clearCart])

  return (
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
      <Container>
        <ShowCase
          games={recommendedGames}
          title={recommendedTitle}
          highlight={recommendedHighlight}
        />
      </Container>
    </S.Wrapper>
  )
}

export default Success
