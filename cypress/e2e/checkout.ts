import { eq, first } from 'cypress/types/lodash'
import { CreateUser } from '../support/generate'

describe('Checkout', () => {
  let user: User
  describe('Free Games', () => {
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
    before(() => {
      user = CreateUser()
    })
    it.only('should buy paid games', () => {
      cy.visit('sign-up')
      cy.signUp(user)
      cy.url().should('eq', `${Cypress.config().baseUrl}/`)
      cy.findAllByText(/explore/i)
        .first()
        .click()
      cy.wait(2000)
      cy.url().should('eq', `${Cypress.config().baseUrl}/games`)

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
        .click()

      cy.wait(2000)

      cy.findByRole('link', { name: /buy it now/i }).click()

      cy.wait(2000)

      cy.fillElementsInput('cardNumber', '4242424242424242')
      cy.fillElementsInput('cardExpiry', '1025')
      cy.fillElementsInput('cardCvc', '123')

      cy.findByRole('button', { name: /buy now/i }).click()

      cy.wait(5000)

      cy.url().should('eq', `${Cypress.config().baseUrl}/success`)
    })
  })
})
