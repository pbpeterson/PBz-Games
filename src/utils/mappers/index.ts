import {
  Home_banners,
  Home_NewGames,
  Home_sections_freeGames_highlight
} from 'graphql/generated/Home'
import { QueryGames_games } from 'graphql/generated/QueryGames'
import formatPrice from 'utils/formatPrice'

export const bannerMapper = (banners: Home_banners[]) => {
  return banners.map((banner) => ({
    img: banner.image?.url,
    title: banner.title,
    subtitle: banner.subtitle,
    buttonLabel: banner.button?.label,
    buttonLink: banner.button?.link,
    ribbon: banner.ribbon?.text || null,
    ribbonColor: banner.ribbon?.color || null,
    ribbonSize: banner.ribbon?.size || null
  }))
}

export const gamesMapper = (games: Home_NewGames[] | null | undefined) => {
  return games
    ? games.map((game) => ({
        id: game.id,
        title: game.name,
        slug: game.slug,
        developer: game.developers[0].name,
        img: game.cover?.url,
        price: game.price
      }))
    : []
}

export const highlightMapper = (
  highlight: Home_sections_freeGames_highlight | null | undefined
) => {
  return (
    highlight && {
      title: highlight.title,
      subtitle: highlight.subtitle,
      backgroundImage: highlight.background?.url,
      buttonLabel: highlight.buttonLabel,
      buttonLink: highlight.buttonLink
    }
  )
}

export const cartMapper = (games: QueryGames_games[] | undefined) => {
  return games
    ? games.map((game) => ({
        id: game.id,
        img: `http://localhost:1337${game.cover?.url}`,
        title: game.name,
        price: formatPrice(game.price)
      }))
    : []
}
