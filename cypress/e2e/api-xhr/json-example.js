describe('JSON object', () => {

  it('JSON Object examples', () => {

    const exampleObject = {
      "name": "Tim",
      "lastname": "Cook",
    }

    const exampleArray = [
      "Sophie",
      "Rose",
      "Steve"
    ]

    const users = {
      "firstName": "Aaron",
      "lastName": "Smith",
      "age": 25,
      "Students": [
        {
          "firstName": "Sophie",
          "lastName": "Rose",
        },
        {
          "firstName": "Steve",
          "lastName": "Smith",
        },
        {
          "firstName": "John",
          "lastName": "Doe",
        }
      ]
    }

    cy.log(exampleObject.name) // Tim
    cy.log(exampleObject.lastname) // Cook
    cy.log(exampleObject["name"]) // Tim

    cy.log(exampleArray[0]) // Sophie
    cy.log(exampleArray[1]) // Rose

    cy.log(users.Students[2].lastName) // Doe
    cy.log(users.Students[1].firstName) // Steve


  })

})