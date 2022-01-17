/// <reference path="../support/index.d.ts" />

describe('Wishlist', () => {
  it('should add and remove games from wishlist', () => {
    cy.visit('/wishlist')

    cy.signIn({
      email: 'e2e@wongames.com',
      password: '123456'
    })

    cy.findByText(/your wishlist is empty/i).should('exist')

    cy.getByDataCy('gamecard')
      .eq(0)
      .within(() => {
        cy.findByLabelText(/add to wishlist/i).click()
      })

    cy.getByDataCy('wishlist').within(() => {
      cy.getByDataCy('gamecard').should('have.length', 1)
    })

    cy.getByDataCy('gamecard')
      .eq(0)
      .within(() => {
        cy.findByLabelText(/remove from wishlist/i).click()
      })

    cy.findByText(/your wishlist is empty/i).should('exist')
  })
})
