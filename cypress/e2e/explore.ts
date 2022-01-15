/// <reference path="../support/index.d.ts" />

import {
  priceFields,
  platformFields,
  sortFields,
  genresFields
} from '../../src/utils/filter/fields'

describe('Explore Page', () => {
  before(()=> {
    cy.visit('/games')
  })

  it('should render filters columns', () => {

    cy.findByRole('heading', { name: /sort by price/i }).should('exist')
    cy.findByRole('heading', { name: /^price/i }).should('exist')
    cy.findByRole('heading', { name: /platforms/i }).should('exist')
    cy.findByRole('heading', { name: /genres/i }).should('exist')

    cy.getFields(priceFields)
    cy.getFields(platformFields)
    cy.getFields(sortFields)
    cy.getFields(genresFields)
  })

  it('should render 15 games and show more when show more is clicked', () => {
    cy.getByDataCy('gamecard').should('have.length', 15)
    cy.findByRole('button', {name: /show more/i}).click()
    cy.getByDataCy('gamecard').should('have.length', 30)
  })

  it('should order by price', () => {
    cy.findByText(/lowest to highest/i).click()
    cy.location('href').should('contain', 'sort=price%3Aasc')
    
    cy.getByDataCy('gamecard').within(() => {
      cy.findByText(/free/i).should('exist')
    })
    
    cy.findByText(/highest to lowest/i).click()
    cy.location('href').should('contain', 'sort=price%3Adesc')
    cy.findByText(/free/i).should('not.exist')

  })
})
