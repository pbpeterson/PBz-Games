/// <reference types="cypress" />

type ShowcaseAttributes = {
  name: string
  highlight?: boolean
}

type DataCyAtribbutes = string

type FieldsAttributes = {
  label: string
  name: string | number
}

type User = {
  username: string
  email: string
  password: string
}

declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to visit google page
     * @example cy.google()
     */

    google(): Chainable<Window>

    /**
     * Custom command to banner in page
     * @example cy.google()
     */

    shouldRenderBanner(): Chainable<Element>

    /**
     * Custom command to showcase in page
     * @example cy.shouldRenderShowcase()
     */

    shouldRenderShowcase(attrs: ShowcaseAttributes): Chainable<Element>

    /**
     * Custom command to showcase in page
     * @example cy.getDataCy('dataCy')
     */

    getByDataCy(attrs: DataCyAtribbutes): Chainable<Element>

    /**
     * Custom command to showcase in page
     * @example cy.getFields('dataCy')
     */

    getFields(fields: FieldsAttributes[]): Chainable<Element>

    /**
     * Custom command to showcase in page
     * @example cy.shouldBeLessThan(12)
     */

    shouldBeLessThan(value: number): Chainable<Element>

    /**
     * Custom command to showcase in page
     * @example cy.shouldBeLessThan(12)
     */

    shouldBeGreaterThan(value: number): Chainable<Element>

     /**
     * Custom command to showcase in page
     * @example cy.signUp(user)
     */

      signUp(user: User): Chainable<Element>

  }
}
