/// <reference types="cypress" />

type ShowcaseAttributes = {
  name: string
  highlight?: boolean
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
  }
}
