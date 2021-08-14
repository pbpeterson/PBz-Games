import { BannerProps } from 'components/Banner'
import BannerSlider from 'components/BannerSlider'
import { Container } from 'components/Container'
import Footer from 'components/Footer'
import { GameCardProps } from 'components/GameCard'
import GameCardSlider from 'components/GameCardSlider'
import Heading from 'components/Heading'
import Highlight, { HighlightProps } from 'components/Highlight'
import Menu from 'components/Menu'

export type HomeTemplateProps = {
  banners: BannerProps[]
  newGames: GameCardProps[]
  mostPopularHighlight: HighlightProps
  mostPopularGames: GameCardProps[]
  upComingHighlight: HighlightProps
  upComingGames: GameCardProps[]
  upComingMoreGames: GameCardProps[]
  freeGamesHighlight: HighlightProps
  freeGames: GameCardProps[]
}

const Home = ({
  banners,
  newGames,
  mostPopularHighlight,
  mostPopularGames,
  upComingHighlight,
  upComingGames,
  upComingMoreGames,
  freeGamesHighlight,
  freeGames
}: HomeTemplateProps) => (
  <section>
    <Container>
      <Menu />
      <BannerSlider items={banners} />
    </Container>

    <Container>
      <Heading color="black" lineLeft lineColor="secondary">
        News
      </Heading>

      <GameCardSlider items={newGames} color="black" />
    </Container>

    <Container>
      <Heading lineLeft lineColor="secondary" color="white">
        Most Populars
      </Heading>

      <Highlight {...mostPopularHighlight} />
      <GameCardSlider items={mostPopularGames} />
    </Container>

    <Container>
      <Heading lineLeft lineColor="secondary" color="white">
        Upcoming
      </Heading>
      <GameCardSlider items={upComingGames} />
      <Highlight {...upComingHighlight} />
      <GameCardSlider items={upComingMoreGames} />
    </Container>

    <Container>
      <Heading lineLeft lineColor="secondary" color="white">
        Free Games
      </Heading>

      <Highlight {...freeGamesHighlight} />
      <GameCardSlider items={freeGames} />
    </Container>

    <Container>
      <Footer />
    </Container>
  </section>
)

export default Home
