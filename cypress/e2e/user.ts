import { CreateUser } from '../support/generate'

describe('User', () => {
  it('should sign up', () => {
    const user = CreateUser()
    cy.visit('sign-up')

    cy.signUp(user)

    cy.url().should('eq', `${Cypress.config().baseUrl}/`)
  })
})
