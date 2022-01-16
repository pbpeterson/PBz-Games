/// <reference path="../support/index.d.ts" />

import {
  priceFields,
  platformFields,
  sortFields,
  genresFields
} from '../../src/utils/filter/fields'

describe('Explore Page', () => {
  before(() => {
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
    cy.findByRole('button', { name: /show more/i }).click()
    cy.getByDataCy('gamecard').should('have.length', 30)
  })

  it('should order by price', () => {
    cy.findByText(/lowest to highest/i).click()
    cy.location('href').should('contain', 'sort=price%3Aasc')

    cy.wait(500)

    cy.getByDataCy('gamecard').within(() => {
      cy.findByText(/free/i).should('exist')
    })

    cy.findByText(/highest to lowest/i).click()
    cy.location('href').should('contain', 'sort=price%3Adesc')

    cy.wait(500)

    cy.getByDataCy('gamecard').within(() => {
      cy.findByText(/free/i).should('not.exist')
    })
  })

  it('should filter by price', () => {
    cy.findByText(/highest to lowest/i).click()

    cy.findByText(/free/i).click()
    cy.location('href').should('contain', 'price_lte=0')

    cy.wait(500)

    cy.getByDataCy('gamecard')
      .first()
      .within(() => {
        cy.findByText('FREE').should('exist')
      })

    cy.findByText('Under $50').click()
    cy.location('href').should('contain', 'price_lte=50')

    cy.wait(500)

    cy.getByDataCy('gamecard')
      .first()
      .within(() => {
        cy.shouldBeLessThan(50)
      })

    cy.findByText('Under $100').click()

    cy.wait(500)

    cy.location('href').should('contain', 'price_lte=100')
    cy.getByDataCy('gamecard')
      .first()
      .within(() => {
        cy.shouldBeLessThan(100)
      })

    cy.findByText('Under $150').click()

    cy.wait(500)

    cy.location('href').should('contain', 'price_lte=150')
    cy.getByDataCy('gamecard')
      .first()
      .within(() => {
        cy.shouldBeLessThan(150)
      })

    cy.findByText('Under $250').click()

    cy.wait(500)

    cy.location('href').should('contain', 'price_lte=250')
    cy.getByDataCy('gamecard')
      .first()
      .within(() => {
        cy.shouldBeLessThan(250)
      })

    cy.findByText('Under $500').click()

    cy.wait(500)

    cy.location('href').should('contain', 'price_lte=500')
    cy.getByDataCy('gamecard')
      .first()
      .within(() => {
        cy.shouldBeLessThan(500)
      })
  })

  it('should filter by platform and genre', () => {
    cy.findByText(/windows/i).click()
    cy.location('href').should('contain', 'platforms=windows')

    cy.findByText(/linux/i).click()
    cy.location('href').should('contain', 'platforms=linux')

    cy.findByText(/mac os/i).click()
    cy.location('href').should('contain', 'platforms=mac')

    cy.findByText(/action/i).click()
    cy.location('href').should('contain', 'categories=action')
  });

  it('should return empty when no games match', () => {
    cy.visit('/games')

    //there are no games in this group
    cy.findByText(/linux/i).click()
    cy.findByText(/sports/i).click()

    cy.getByDataCy('gamecard').should('not.exist')
    cy.findByText(/we didn't find any games with this filter/i).should('exist')

  })
})
