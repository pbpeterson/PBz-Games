import ExploreSideBar, { ItemProps } from 'components/ExploreSideBar'
import GameCard, { GameCardProps } from 'components/GameCard'
import Base from 'templates/Base'

import * as S from './styles'
import { Grid } from 'components/Grid'
import { KeyboardArrowDown } from '@styled-icons/material-outlined'

export type GamesTemplateProps = {
  games?: GameCardProps[]
  filterItems: ItemProps[]
}

const GamesTemplate = ({ games = [], filterItems }: GamesTemplateProps) => {
  const handleFilter = () => {
    return
  }
  const handleShowMore = () => {
    return
  }

  return (
    <Base>
      <S.Main>
        <ExploreSideBar items={filterItems} onFilter={handleFilter} />

        <div>
          <Grid>
            {games.map((item) => (
              <GameCard key={item.title} {...item} />
            ))}
          </Grid>

          <S.ShowMore role="button" onClick={handleShowMore}>
            <p>Show More</p>
            <KeyboardArrowDown size={24} />
          </S.ShowMore>
        </div>
      </S.Main>
    </Base>
  )
}
export default GamesTemplate
