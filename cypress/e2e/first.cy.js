import textData from "../fixtures/todoItemsTexts.json";

describe.only(("To do list"), () => {
    it("Add items", () => {
        const inputField = '[data-test="new-todo"]';
    cy.visit('/todo');

    cy.log(textData[0].text);
    
    textData.forEach((item) => {
    cy.enterText(inputField, item);

})
    //cy.enterText(inputField, textData[0].text);
    //cy.enterText(inputField, textData[1].text);
    //cy.enterText(inputField, textData[2].text);
    
    //cy.enterText(inputField, 'First');
    //cy.enterText(inputField, 'Second');
    //cy.enterText(inputField, 'Third');
    
    //cy.get('[data-test="new-todo"]').type('First{enter}');
    //cy.get('[data-test="new-todo"]').type('Second{enter}');
    //cy.get('[data-test="new-todo"]').type('Third{enter}');

    });
});