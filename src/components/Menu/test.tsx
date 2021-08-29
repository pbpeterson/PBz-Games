import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Menu from '.'

describe('<Menu />', () => {
  it('should render the menu', () => {
    renderWithTheme(<Menu />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/open shopping cart/i)).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /won games/i })).toBeInTheDocument()
  })

  it('should handle the open/close mobile menu', () => {
    renderWithTheme(<Menu />)

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
    renderWithTheme(<Menu />)

    expect(screen.getByText(/sign up/i)).toBeInTheDocument()
  })

  it('should render wishlist and account when logged in', () => {
    renderWithTheme(<Menu username="pbpeterson" />)

    expect(screen.queryByText(/log in now/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/sign up/i)).not.toBeInTheDocument()
    expect(screen.getByText(/wishlist/i)).toBeInTheDocument()
    expect(screen.getByText(/my account/i)).toBeInTheDocument()
  })
})
