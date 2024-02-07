describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('https://practicetestautomation.com/practice-test-login/')
  })
  context('header',() => {
  it('verify header text', () => {
    cy.get("h2").contains("Test login")
  })
})
})