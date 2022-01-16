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

    cy.findByPlaceholderText(/email/i).type('e2e@wongames.com')
    cy.findByPlaceholderText(/password/i).type('123456')
    cy.findByRole('button', { name: /sign in now/i }).click()

    cy.findByText(/cypress/i)
      .should('exist')
      .click()

    cy.findByText(/sign out/i).click()

    cy.findByRole('link', { name: /sign in/i }).should('exist')

    cy.findByText(/cypress/i)
    .should('not.exist')
  })
})
