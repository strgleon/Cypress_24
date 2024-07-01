/// <reference types="cypress" />

class addRemove {
  constructor() {
    this.addButton = "button[onclick='addElement()']";
    this.delButton = "button[onclick='deleteElement()']";
    
  }

  clickAdd() {
    cy.fixture("tQA.json").then((data) => {
      cy.get(this.addButton).click(); 
    });
  }
  clickDelete() {
    cy.fixture("tQA.json").then((data) => {
      cy.get(this.delButton).click(); 
    });
  }

}
export default addRemove;
