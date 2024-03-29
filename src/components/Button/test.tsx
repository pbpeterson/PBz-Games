import { screen, render } from '../../utils/test-utils'

import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'

import Button from '.'

describe('<Button />', () => {
  it('should render button medium by default', () => {
    render(<Button>Buy now</Button>)

    expect(screen.getByRole('button')).toHaveStyle({
      height: '4rem',
      'font-size': '1.4rem'
    })
  })

  it('should render small button', () => {
    render(<Button size="small">Buy now</Button>)

    expect(screen.getByRole('button')).toHaveStyle({
      height: '3rem',
      'font-size': '1.2rem',
      padding: '0.8rem'
    })
  })

  it('should render large button', () => {
    render(<Button size="large">Buy now</Button>)

    expect(screen.getByRole('button')).toHaveStyle({
      height: '5rem',
      'font-size': '1.6rem',
      padding: '0.8rem 4.8rem'
    })
  })

  it('should render full width', () => {
    render(<Button fullWidth>Buy now</Button>)

    expect(screen.getByRole('button')).toHaveStyle({
      width: '100%'
    })
  })

  it('should render icon button', () => {
    render(
      <Button icon={<AddShoppingCart data-testid="icon" />}>Buy now</Button>
    )

    expect(screen.getByText(/buy now/i)).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('should render button as a Link', () => {
    render(
      <Button as="a" href="/link">
        Buy now
      </Button>
    )

    expect(screen.getByRole('link')).toHaveAttribute('href', '/link')
  })

  it('should render a minimal version', () => {
    render(
      <Button icon={<AddShoppingCart data-testid="icon" />} minimal>
        Buy now
      </Button>
    )

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyle({
      background: 'none'
    })

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyleRule(
      'background',
      'none',
      {
        modifier: ':hover'
      }
    )
  })
  it('should render a disabled button', () => {
    render(<Button disabled>Buy now</Button>)

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyleRule(
      'cursor',
      'not-allowed',
      { modifier: ':disabled' }
    )
  })
})
