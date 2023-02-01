

describe('Contact us feature tests', () => {

  beforeEach(() => {
    cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
  })

  it.only('Should be able to submit a successful submission via contact us form', () => {

    // ? Referencing windows
    cy.document().should('have.property', 'charset').and('eq', 'UTF-8') // * active document: HTML

    cy.title().should('include', 'WebDriver | Contact Us') // * HTML title prop

    cy.url().should('include', 'contactus') // * HTML url prop



    cy.get('input[name="first_name"]').type('Jon')
    cy.get('input[name="last_name"]').type('Snow')
    cy.get('input[name="email"]').type('jonsnow@got.com')
    cy.get('textarea[name="message"]').type('Winter is coming')

    cy.get('input[type="submit"]').click()

    cy.get('h1').should('have.text', 'Thank You for your Message!')
    // cy.get('h1').contains('Thank You for your Message!')
  })

  it('Should be able to submit a successful submission via contact us form', () => {
    cy.get('[name="first_name"]').type('Jon')
    cy.get('input[name="last_name"]').type('Snow')
    // cy.get('input[name="email"]').type('jonsnow@got.com')
    cy.get('textarea[name="message"]').type('Winter is coming')

    cy.get('[type="submit"]').click()

    cy.get('body').contains('Error: all fields are required')

  })

})