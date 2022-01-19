import { fireEvent, screen, render } from '../../utils/test-utils'

import Menu from '.'

describe('<Menu />', () => {
  it('should render the menu', () => {
    render(<Menu />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument()
  })

  it('should handle the open/close mobile menu', () => {
    render(<Menu />)

    //selecionar nosso menu full
    const menuFull = screen.getByRole('navigation', { hidden: true })

    //verificar se o menu ta escondido

    expect(menuFull.getAttribute('aria-hidden')).toBe('true')
    expect(menuFull).toHaveStyle({ opacity: 0 })

    //clicar no botão de abrir o menu e verificar se ele abriu

    fireEvent.click(screen.getByLabelText(/open menu/i))
    expect(menuFull.getAttribute('aria-hidden')).toBe('false')
    expect(menuFull).toHaveStyle({ opacity: 1 })

    //clicar no botão de fechar o menu e verificar se ele fechou

    fireEvent.click(screen.getByLabelText(/close menu/i))
    expect(menuFull.getAttribute('aria-hidden')).toBe('true')
    expect(menuFull).toHaveStyle({ opacity: 0 })
  })

  it('should render register box when logged out', () => {
    render(<Menu />)

    expect(screen.getByText(/sign up/i)).toBeInTheDocument()
  })

  it('should render wishlist and account when logged in', () => {
    render(<Menu username="pbpeterson" />)

    expect(screen.queryByText(/log in now/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/sign up/i)).not.toBeInTheDocument()
    expect(screen.getAllByText(/wishlist/i)).toHaveLength(2)
    expect(screen.getAllByText(/my profile/i)).toHaveLength(2)
  })
})
