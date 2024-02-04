describe('Home Page', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/')

  })
  context('header',() => {
  it.only('verify header text', () => {
    cy.getByData("course-0")
  })
})

  it('verify bullet feature', () => {
    cy.get("dt").eq(0).contains(/4 Courses/i)
    cy.get("dt").eq(1).contains("25+ Lessons")
    cy.get("dt").eq(2).contains("Free and Open Source")
  })
  context('section_2',() => {
    it('verify header text', () => {
      cy.getByData("course-0").find("a").contains("Get started").click()
      cy.location("pathname").should("equal", "/testing-your-first-application")
    })
  })
  context('section_3',() => {
    it('verify Testing Foundations', () => {
      cy.getByData("course-1").find("a").contains("Get started").click()
      cy.location("pathname").should("equal", "/testing-foundations")
    })
  })
  context('section_4',() => {
    it.only('verify Cypress Fundamentals', () => {
      cy.getByData("course-2").find("a").contains("Get started").click()
      cy.location("pathname").should("equal", "/cypress-fundamentals")
    })
  })
})