
beforeEach(() => {
    cy.log("Main before hook executed"),
    cy.visit("/todo")
})

describe('First test suite', () => {
    
    before(() => {
        cy.log("1st before hook executed")
    });
    it('First test', () => {
        
        cy.log("Current url is " + Cypress.config('baseUrl')),
        cy.get("h1").debug().should("be.visible")    })
        
    it("Test for .then", () => {
        
        cy.get('[data-test="new-todo"]').type('test{enter}');
        cy.get(".todo-list li")
        .then((number) => {
          expect(number.length).to.equal(3);
          //assert.equal(number.length, 3, 'Array number')
   });
        //cy.get(".todo-list li [data-id="1675332876604"]").should('have.value', 'Pay electric bill')
    });
});
 
describe('Second test suite', () => {
    
    before(() => {
        cy.log("2nd before hook executed")
    })
    
    it('Second test', () => {
         
        cy.log("Current url is " + Cypress.config('baseUrl')),
        cy.get("h1").debug().should("be.visible")    })
        
    it("Test for .then", () => {
         
        cy.get('[data-test="new-todo"]').type('test{enter}');
        cy.get(".todo-list li")
        .then((number) => {
          expect(number.length).to.equal(3);
          //assert.equal(number.length, 3, 'Array number')
   });
        //cy.get(".todo-list li [data-id="1675332876604"]").should('have.value', 'Pay electric bill')
    });
})

after (() => {
    console.log("after hook")
})
 