

describe('template spec', () => {
  beforeEach(() => {
  
    cy.visit('http://localhost:3000/')
  })
  it("checkvisit",()=>{
cy.visit("http://localhost:3000/")
  }
  )
  it("checkinputvalue",()=>{
    cy.visit('http://localhost:3000/')
    cy.get(".input-class").should('exist')
    // make an assertion on the value
// cy.get('input').type( 'abc')
  })
  it("checkinputvalueexist",()=>{
    cy.visit('http://localhost:3000/')
cy.get(".input-class").type("ping")
  })
 
})