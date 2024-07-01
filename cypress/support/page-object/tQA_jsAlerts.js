/// <reference types="cypress" />

class JSAlerts {
    constructor() {
      
      this.alert = "button[onclick='jsAlert()']";
      this.confirm = "button[onclick='jsConfirm()']";
      this.prompt = "button[onclick='jsPrompt()']";
      this.result = "#result";
    }
  
    clickAlert() {
      cy.fixture("tQA.json").then((data) => {
        cy.get(this.alert).click();
        Cypress.on('window:alert', (message) => {
            // Handle alert
            // You can assert on the message or perform any other action
            // For example, to assert on the message:
            expect(message).to.equal('I am a JS Alert');
          });
        cy.get(this.result).should('contain','You successfully clicked an alert');
      });
    }
    clickConfirm() {
        cy.fixture("tQA.json").then((data) => {
          cy.get(this.confirm).click();
          Cypress.on('window:confirm', (message) => {
              // Handle alert
              // You can assert on the message or perform any other action
              // For example, to assert on the message:
              expect(message).to.equal('I am a JS Confirm');
            });
          cy.get(this.result).should('contain','You clicked: Ok');
        });
      }
      clickPrompt() {
        cy.fixture("tQA.json").then((data) => {
          cy.get(this.prompt).click();
          Cypress.on('window:prompt', (message, defaultValue) => {
            expect(message).to.equal('I am a JS prompt');
            return 'test prompt'; // Provide the desired input value
          });
      
          // Assert on the result after providing input in the prompt
          cy.get(this.result).should('contain', 'You entered: test prompt');
        });
      }
  }
  export default JSAlerts;
  