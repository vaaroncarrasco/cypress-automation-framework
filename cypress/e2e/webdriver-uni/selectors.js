describe('selectors', () => {

  before(() => {
    cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
  })

  it('should select elements', () => {
    //By tag name
    cy.get("input")

    //By attribute name and value
    cy.get("input[name='first_name']")

    //By id
    cy.get("#contact_me")

    //By class
    cy.get(".feedback-input")

    //By multiple classes
    cy.get("[class='navbar navbar-inverse navbar-fixed-top']")

    //By two different attributes
    cy.get("[name='email'][placeholder='Email Address']")

    //By xpath
    cy.xpath("//input[@name='first_name']")

    // cy.contains('button', 'Submit').click()
    cy.get("button[title=Submit]").click()
  })

})