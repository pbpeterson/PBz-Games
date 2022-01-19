import Link from 'next/link'

import * as S from './styles'
import Logo from 'components/Logo'
import Heading from 'components/Heading'

const Footer = () => (
  <S.Wrapper>
    <Logo color="black" />
    <S.Content>
      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Contact
        </Heading>

        <a href="mailto:petersonbozza11@gmail.com">sac@pbzgames.com</a>
      </S.Column>

      <S.Column aria-labelledby="social-media">
        <Heading color="black" lineColor="secondary" lineBottom size="small">
          Follow me
        </Heading>

        <nav id="social-media">
          <a
            href="https://www.linkedin.com/in/pbpeterson/"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            LinkdIn
          </a>
          <a
            href="https://github.com/pbpeterson"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Github
          </a>
          <a
            href="https://github.com/pbpeterson"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Personal Website
          </a>
        </nav>
      </S.Column>

      <S.Column aria-labelledby="resources">
        <Heading color="black" lineColor="secondary" lineBottom size="small">
          Links
        </Heading>

        <nav id="resources">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/games">
            <a>Store</a>
          </Link>
          <Link href="/search">
            <a>Buscar</a>
          </Link>
        </nav>
      </S.Column>

      <S.Column aria-labelledby="contact">
        <Heading color="black" lineColor="secondary" lineBottom size="small">
          About
        </Heading>
        <span>
          Este projeto é feito com testes do inicio ao fim, para saber mais dê
          uma olhadinha no repositório 😊.
        </span>
      </S.Column>
    </S.Content>
    <S.Copyright>Pbz Games 2022 © All rights reserved.</S.Copyright>
  </S.Wrapper>
)

export default Footer
