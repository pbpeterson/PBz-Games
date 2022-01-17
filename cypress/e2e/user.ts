import { CreateUser } from '../support/generate'

describe('User', () => {
  const user: User = {
    email: 'e2e@wongames.com',
    password: '123456'
  }

  it.skip('should sign up', () => {
    const user = CreateUser()
    cy.visit('sign-up')

    cy.signUp(user)

    cy.url().should('eq', `${Cypress.config().baseUrl}/`)
  })

  it('should sign in and log out', () => {
    cy.visit('/sign-in')

    cy.signIn(user)

    cy.findByText(/cypress/i)
      .should('exist')
      .click()

    cy.url().should('eq', `${Cypress.config().baseUrl}/`)

    cy.findByText(/sign out/i).click()

    cy.findByRole('link', { name: /sign in/i }).should('exist')

    cy.findByText(/cypress/i).should('not.exist')
  })

  it.only('should sign the user and redirect to the page that it was defined previously', () => {
    cy.visit('/profile/me')

    cy.url().should(
      'eq',
      `${Cypress.config().baseUrl}/sign-in?callbackUrl=/profile/me`
    )

    cy.signIn(user)

    cy.url().should('eq', `${Cypress.config().baseUrl}/profile/me`)

    cy.findByLabelText(/username/i).should('have.value', 'cypress')
    cy.findByLabelText(/email/i).should('have.value', 'e2e@wongames.com')
  })
})
