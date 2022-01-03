/// <reference types="cypress" />

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
  }
}
