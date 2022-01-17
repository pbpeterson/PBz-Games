/// <reference path="../support/index.d.ts" />

describe('Reset Password', () => {
  it('should show error if passwords not match', () => {
    cy.visit('/reset-password?code=123456')

    cy.findByPlaceholderText(/^password/i).type('123')
    cy.findByPlaceholderText(/confirm password/i).type('321')

    cy.findByRole('button', { name: /reset password/i }).click()

    cy.findByText('confirm password does not match with password').should(
      'exist'
    )
  })

  it('should show error if code is not valid', () => {
    cy.intercept('POST', '**/auth/reset-password', (res) => {
      res.reply({
        status: 400,
        body: {
          error: 'Bad Request',
          message: [
            {
              messages: [
                {
                  message: 'Incorrect code provided'
                }
              ]
            }
          ]
        }
      })
    })

    cy.visit('/reset-password?code=wrong_code')
    cy.findByPlaceholderText(/^password/i).type('123')
    cy.findByPlaceholderText(/confirm password/i).type('123')

    cy.findByRole('button', {
      name: /reset password/i
    }).click()

    cy.findByText(/incorrect code provided/i).should('exist')
  })
})
