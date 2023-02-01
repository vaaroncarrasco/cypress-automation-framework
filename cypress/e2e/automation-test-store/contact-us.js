
describe('Test Contact Us form via automation test store', () => {

  it('Should be able to submit a successful submission via contact us form', () => {

    cy.visit('https://automationteststore.com/')

    cy.get("a[href$=contact]").click()

    cy.get('input[name="first_name"]').type('Jon')
    
    cy.get('#ContactUsFrm_email').type('hola@gmail.com')
    cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email').and('have.value', 'hola@gmail.com')

    cy.xpath("//textarea[@id='ContactUsFrm_enquiry']").type('Hola, me gustaría saber más sobre sus productos')

    // cy.contains('button', 'Submit').click()
    cy.get("button[title=Submit").click()

    cy.get('.mb40 > :nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!')

  })

  // before(function() {
  //   // specific dimensions for a test // global level go to config
  //   cy.viewport('iphone-13') // overwrites the global viewport

  // })

  // it('Should be able to submit a successful submission via contact us form', () => {

  //   cy.visit('https://automationteststore.com/')

  //   // cy.get('.info_links_footer > :nth-child(5) > a').click()
  //   // cy.xpath("//a[contains(@href, 'contact')]").click()
  //   cy.get("a[href$=contact]").click()

  //   cy.get('input[name="first_name"]').type('Jon')
  //   cy.get('#ContactUsFrm_email').type('hola@gmail.com')
  //   cy.xpath("//textarea[@id='ContactUsFrm_enquiry']").type('Hola, me gustaría saber más sobre sus productos')

  

  // })

})

