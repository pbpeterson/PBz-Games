import {
  Home_banners,
  Home_NewGames,
  Home_sections_freeGames_highlight
} from 'graphql/generated/Home'

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
  return (
    games &&
    games.map((game) => ({
      title: game.name,
      slug: game.slug,
      developer: game.developers[0] ? game.developers[0].name : 'Unknown',
      img: game.cover?.url || null,
      price: game.price
    }))
  )
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
