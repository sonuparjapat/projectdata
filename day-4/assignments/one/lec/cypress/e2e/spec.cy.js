describe('counter testing', () => {
  beforeEach(()=>{
    cy.visit('http://localhost:3001/')
  })
  it('check if it loads or not', () => {

    cy.visit('http://localhost:3001/')
  })
  it("chek counter persent?",()=>{
    // cy.visit('http://localhost:3001/')
    // ater line3 there is no need of line 11
    cy.get("h3").should("exist")
    cy.get(".add").should("exist")
    cy.get(".reduce").should("exist")
  })
  it("check initial value 0",()=>{
    // cy.visit('http://localhost:3001/')
    cy.get("[data-testid=counter]").should("have.text","Counter:0")

  })
  it("checkincr-dec",()=>{
    // cy.visit('http://localhost:3001/')
    cy.get(".add").click();
    cy.get("[data-testid=counter]").should("have.text","Counter:1")
    cy.get(".add").click();
    cy.get("[data-testid=counter]").should("have.text","Counter:2")
  })
  it("checking-dec",()=>{
    // cy.visit('http://localhost:3001/')
    cy.get(".reduce").click();
    cy.get("[data-testid=counter]").should("have.text","Counter:-1")
    cy.get(".reduce").click();
    cy.get("[data-testid=counter]").should("have.text","Counter:-2")
  })
})