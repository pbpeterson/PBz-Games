import ExploreSideBar, { ItemProps } from 'components/ExploreSideBar'
import GameCard, { GameCardProps } from 'components/GameCard'
import Base from 'templates/Base'

import * as S from './styles'
import { Grid } from 'components/Grid'
import { KeyboardArrowDown } from '@styled-icons/material-outlined'
import { useQueryGames } from 'graphql/queries/games'
import Loading from 'components/Loading'

export type GamesTemplateProps = {
  games?: GameCardProps[]
  filterItems: ItemProps[]
}

const GamesTemplate = ({ filterItems }: GamesTemplateProps) => {
  const { data, loading, fetchMore } = useQueryGames({
    variables: { limit: 15 }
  })

  const handleFilter = () => {
    return
  }
  const handleShowMore = () => {
    fetchMore({
      variables: {
        limit: 15,
        start: data?.games.length
      }
    })
  }
  return (
    <Base>
      <S.Main>
        <ExploreSideBar items={filterItems} onFilter={handleFilter} />

        {loading ? (
          <Loading />
        ) : (
          <div>
            <Grid>
              {data?.games.map((game) => (
                <GameCard
                  key={game.slug}
                  title={game.name}
                  slug={game.slug}
                  developer={
                    game.developers[0] ? game.developers[0].name : 'Unknown'
                  }
                  img={game.cover!.url}
                  price={game.price}
                />
              ))}
            </Grid>

            <S.ShowMore role="button" onClick={handleShowMore}>
              <p>Show More</p>
              <KeyboardArrowDown size={24} />
            </S.ShowMore>
          </div>
        )}
      </S.Main>
    </Base>
  )
}
export default GamesTemplate
