import {
  Home_banners,
  Home_NewGames,
  Home_sections_freeGames_highlight
} from 'graphql/generated/Home'
import { QueryGames_games } from 'graphql/generated/QueryGames'
import { QueryOrders_orders } from 'graphql/generated/QueryOrders'
import { QueryWishlists_wishlists_games } from 'graphql/generated/QueryWishlists'
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

export const gamesMapper = (
  games: Home_NewGames[] | QueryWishlists_wishlists_games[] | null | undefined
) => {
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
        img: `${game.cover?.url}`,
        title: game.name,
        price: formatPrice(game.price)
      }))
    : []
}

export const ordersMapper = (orders: QueryOrders_orders[]) => {
  return orders
    ? orders.map((order) => {
        return {
          id: order.id,
          paymentInfo: {
            flag: order.card_brand,
            img: order.card_brand ? `/img/cards/${order.card_brand}.png` : null,
            number: order.card_last4
              ? `**** **** **** ${order.card_last4}`
              : 'Free Game',
            purchaseDate: `Purchase made on ${new Intl.DateTimeFormat('en-US', {
              day: 'numeric',
              month: 'short',
              year: 'numeric'
            }).format(new Date(order.created_at))}`
          },
          games: order.games.map((game) => {
            return {
              id: game.id,
              title: game.name,
              downloadLink:
                'https://wongames.com/game/download/yuYT56Tgh431LkjhNBgdf',
              img: `http://localhost:1337${game.cover?.url}`,
              price: formatPrice(game.price)
            }
          })
        }
      })
    : []
}
