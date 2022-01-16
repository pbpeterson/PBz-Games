import { CreateUser } from '../support/generate'

describe('User', () => {
  it.skip('should sign up', () => {
    const user = CreateUser()
    cy.visit('sign-up')

    cy.signUp(user)

    cy.url().should('eq', `${Cypress.config().baseUrl}/`)
  })

  it('should sign in and log out', () => {
    cy.visit('/sign-in')

    const user: User = {
      email: 'e2e@wongames.com',
      password: '123456'
    }

    cy.signIn(user)

    cy.findByText(/cypress/i)
      .should('exist')
      .click()

    cy.url().should('eq', `${Cypress.config().baseUrl}/`)

    cy.findByText(/sign out/i).click()

    cy.findByRole('link', { name: /sign in/i }).should('exist')

    cy.findByText(/cypress/i)
    .should('not.exist')
  })
})
