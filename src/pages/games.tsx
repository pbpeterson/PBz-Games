import GamesTemplate, { GamesTemplateProps } from 'templates/Games'

import gamesMock from 'components/GameCardSlider/mock'
import mockFilterItems from 'components/ExploreSideBar/mock'

export default function GamesPage(props: GamesTemplateProps) {
  return <GamesTemplate {...props} />
}

export async function getServerSideProps() {
  return {
    props: {
      games: gamesMock,
      filterItems: mockFilterItems
    }
  }
}
