/// <reference path="../support/index.d.ts" />

describe('Cart', () => {
  it('should add and remove items from cart', () => {
    cy.visit('/')

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

    cy.findAllByLabelText(/cart items/i)
      .first()
      .click()
    cy.findAllByLabelText(/cart items/i)
      .first()
      .click()

    cy.getByDataCy('gamecard')
      .eq(0)
      .within(() => {
        cy.findByLabelText(/remove from cart/i).click()
      })
    cy.getByDataCy('gamecard')
      .eq(1)
      .within(() => {
        cy.findByLabelText(/remove from cart/i).click()
      })

    cy.findAllByLabelText(/shopping cart/i)
      .first()
      .click()

    cy.findByRole('heading', { name: /your cart is empty/i }).should('exist')

  })
})
