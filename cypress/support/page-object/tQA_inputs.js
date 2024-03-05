/// <reference types="cypress" />

class Inputs {
  constructor() {
    this.input = "input[type='number']";
  }

  typeCheck() {
    cy.fixture("tQA.json").then((data) => {
      cy.get(this.input).type(data.inputText).blur();
      cy.get(this.input).should("have.value", data.nothing);
      cy.get(this.input).type(data.inputNumber).blur();
      cy.get(this.input).should("have.value", data.inputNumber);
    });
  }
}
export default Inputs;
