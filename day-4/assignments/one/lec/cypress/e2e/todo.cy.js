describe('todo testing', () => {
    beforeEach(()=>{
      cy.visit('https://example.cypress.io/todo')
    })
    it('check if it loads or not', () => {
  
      cy.visit('http://localhost:3001/')
    })
    it("should have input",()=>{
        cy.get("input").should("exist")
        cy.get(".toggle").should("exist")
    })
    it("typingcheck",()=>{
        cy.get("input.new-todo").type("ping")
    })
    it("todoadding",()=>{
        cy.get("input.new-todo").type("cypress {enter}")

    })
    it('checkingadded',()=>{
        cy.get(".todo-list").children().should("have.length",2)
        cy.get("input.new-todo").type("ping {enter}")
        cy.get(".todo-list").children().should("have.length",3)
    })
    it("checkdelete",()=>{
        cy.get(".todo-list").children().should("have.length",2)
        cy.get(".destroy").eq(1).click({force:true})
        cy.get(".todo-list").children().should("have.length",1)
    })
})