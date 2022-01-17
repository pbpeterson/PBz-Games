import { CreateUser } from '../support/generate'

describe('Checkout', () => {
  describe('Free Games', () => {
    let user: User
    before(() => {
      user = CreateUser()
    })

    it('should buy free games', () => {
      cy.visit('sign-up')
      cy.signUp(user)

      cy.url().should('eq', `${Cypress.config().baseUrl}/`)

      cy.findByRole('link', { name: /explore/i }).click()

      cy.wait(2000)

      cy.url().should('eq', `${Cypress.config().baseUrl}/games`)

      cy.findAllByText(/free/i).first().click()

      cy.wait(2000)

      cy.url().should('contain', `price_lte=0`)

      cy.getByDataCy('gamecard')
        .eq(0)
        .within(() => {
          cy.findByLabelText(/add to cart/i).click()
        })
      cy.getByDataCy('gamecard')
        .eq(1)
        .within(() => {
          cy.findByLabelText(/add to cart/i).click()
        })
      cy.getByDataCy('gamecard')
        .eq(2)
        .within(() => {
          cy.findByLabelText(/add to cart/i).click()
        })

      cy.findAllByLabelText(/cart items/i)
        .first()
        .should('have.text', 3)
        .click()

      cy.getByDataCy('cart-list').within(() => {
        cy.findByText(/buy it now/i).click()
      })

      cy.wait(2000)

      cy.findByText(/only free games, click buy and enjoy/i).should('exist')

      cy.findByRole('button', { name: /buy now/i }).click()

      cy.url().should('eq', `${Cypress.config().baseUrl}/success`)

      cy.findByRole('heading', {
        name: /your purchase was successful!/i
      }).should('exist')
    })

    it('should show games in order page', () => {
      cy.visit('/profile/orders')

      cy.url().should(
        'eq',
        `${Cypress.config().baseUrl}/sign-in?callbackUrl=/profile/orders`
      )

      cy.signIn({
        email: user.email,
        password: user.password
      })

      cy.url().should('eq', `${Cypress.config().baseUrl}/profile/orders`)

      cy.getByDataCy('gameitem').should('have.length', 3)
    })
  })

  describe('Paid Games', () => {
    it('should ', () => {})
  })
})
