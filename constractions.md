.then () - method to create a chain and connect with previous method

cy.get(".todo-list li")
        .then((number) => {
          cy.log(number);

          выводит список того, что есть в классе

          cy.get(".todo-list li")
        .then((number) => {
          cy.log(number[0]);

          выводит 1ый элемент массива

          cy.get(".todo-list li")
        .then((number) => {
          cy.log(typeof number[0]);

          показывает тип объектов

                    cy.log(JSON.stringify(number)); - выводит json


