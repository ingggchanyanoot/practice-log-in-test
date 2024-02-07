describe('Login', () => {
    beforeEach(() => {
      cy.visit('https://practicetestautomation.com/practice-test-login/')
    })
    it('Positive LogIn test', () => {
        cy.get('#username').type("student")
        cy.get("#password").type("Password123")
        cy.get("#submit").click()
        cy.url({ decode: true }).should('contain', "practicetestautomation.com/logged-in-successfully/")
        cy.contains("Congratulations")
        cy.contains("Log out").click()
    })
    it('Negative username test', () => {
      cy.get('#username').type("incorrectUser")
      cy.get("#password").type("Password123")
      cy.get("#submit").click()
      cy.get("#error").contains("Your username is invalid!")
    })
    it('Negative password test', () => {
      cy.get('#username').type("student")
      cy.get("#password").type("incorrectPassword")
      cy.get("#submit").click()
      cy.get("#error").contains("Your password is invalid!")
    })
})