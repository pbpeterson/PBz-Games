import {
  Home_banners,
  Home_NewGames,
  Home_sections_freeGames_highlight
} from 'graphql/generated/Home'
import { QueryGames_games } from 'graphql/generated/QueryGames'
import { QueryOrders_orders } from 'graphql/generated/QueryOrders'
import {
  bannerMapper,
  gamesMapper,
  highlightMapper,
  cartMapper,
  ordersMapper
} from '.'

describe('bannerMapper(', () => {
  it('should return the right format when mapped', () => {
    const banner = {
      image: {
        url: 'image.jpeg'
      },
      title: 'Banner title',
      subtitle: 'Banner subtitle',
      button: {
        label: 'Button label',
        link: 'Button link'
      },
      ribbon: {
        text: 'Ribbon text',
        color: 'primary',
        size: 'small'
      }
    } as Home_banners

    expect(bannerMapper([banner])).toStrictEqual([
      {
        img: 'image.jpeg',
        title: 'Banner title',
        subtitle: 'Banner subtitle',
        buttonLabel: 'Button label',
        buttonLink: 'Button link',
        ribbon: 'Ribbon text',
        ribbonColor: 'primary',
        ribbonSize: 'small'
      }
    ])
  })
})

describe('gamesMapper()', () => {
  it('should render an empty array when have no data', () => {
    expect(gamesMapper(null)).toStrictEqual([])
  })

  it('should return the right format when mapped', () => {
    const game = {
      id: '1',
      name: 'name',
      cover: {
        url: 'image.jpeg'
      },
      slug: 'game',
      developers: [
        {
          name: 'developer'
        }
      ],
      price: 10
    } as Home_NewGames

    expect(gamesMapper([game])).toStrictEqual([
      {
        id: '1',
        title: 'name',
        img: 'image.jpeg',
        developer: 'developer',
        price: 10,
        slug: 'game'
      }
    ])
  })
})

describe('highlightMapper()', () => {
  it('should render correcty highlight format when mapped', () => {
    const highlight = {
      title: 'Highlight title',
      subtitle: 'Highlight subtitle',
      background: {
        url: 'image.jpeg'
      },
      buttonLink: 'Button link',
      buttonLabel: 'Button label'
    } as Home_sections_freeGames_highlight

    expect(highlightMapper(highlight)).toStrictEqual({
      title: 'Highlight title',
      subtitle: 'Highlight subtitle',
      backgroundImage: 'image.jpeg',
      buttonLabel: 'Button label',
      buttonLink: 'Button link'
    })
  })
})

describe('cartMapper()', () => {
  it('should return empty array if no games', () => {
    expect(cartMapper(undefined)).toStrictEqual([])
  })

  it('should return mapped items', () => {
    const game = {
      id: '1',
      cover: {
        url: '/image.jpg'
      },
      name: 'game',
      price: 10
    } as QueryGames_games

    expect(cartMapper([game])).toStrictEqual([
      {
        id: '1',
        img: '/image.jpg',
        title: 'game',
        price: '$10.00'
      }
    ])
  })
})

describe('orders()', () => {
  it('should return empty array if no ', () => {
    expect(cartMapper(undefined)).toStrictEqual([])
  })

  it('should return mapped items', () => {
    const orders = [
      {
        __typename: 'Order',
        id: '1',
        card_brand: 'visa',
        card_last4: '4242',
        created_at: '2021-04-14T18:41:48.358Z',
        games: [
          {
            id: '1',
            name: 'game',
            developers: [
              {
                name: 'developer'
              }
            ],
            slug: 'game',
            cover: {
              url: '/image.jpg'
            },
            price: 10
          }
        ]
      }
    ] as QueryOrders_orders[]

    expect(ordersMapper(orders)).toStrictEqual([
      {
        id: '1',
        paymentInfo: {
          flag: 'visa',
          img: '/img/cards/visa.png',
          number: '**** **** **** 4242',
          purchaseDate: 'Purchase made on Apr 14, 2021'
        },
        games: [
          {
            id: '1',
            title: 'game',
            downloadLink:
              'https://wongames.com/game/download/yuYT56Tgh431LkjhNBgdf',
            img: 'http://localhost:1337/image.jpg',
            price: '$10.00'
          }
        ]
      }
    ])
  })

  it('should return freeGame when its free', () => {
    const orders = [
      {
        __typename: 'Order',
        id: '1',
        card_brand: null,
        card_last4: null,
        created_at: '2021-04-14T18:41:48.358Z',
        games: [
          {
            id: '1',
            name: 'game',
            developers: [
              {
                name: 'developer'
              }
            ],
            slug: 'game',
            cover: {
              url: '/image.jpg'
            },
            price: 0
          }
        ]
      }
    ] as QueryOrders_orders[]

    expect(ordersMapper(orders)).toStrictEqual([
      {
        id: '1',
        paymentInfo: {
          flag: null,
          img: null,
          number: 'Free Game',
          purchaseDate: 'Purchase made on Apr 14, 2021'
        },
        games: [
          {
            id: '1',
            title: 'game',
            downloadLink:
              'https://wongames.com/game/download/yuYT56Tgh431LkjhNBgdf',
            img: 'http://localhost:1337/image.jpg',
            price: 'FREE'
          }
        ]
      }
    ])
  })
})
