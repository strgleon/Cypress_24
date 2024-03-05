class DynCtr {
  constructor() {
    this.chb = "input[type='checkbox']";
    this.onclc = "button[onclick='swapCheckbox()']";
    this.idmsg = "#message";
    this.swp = "button[onclick='swapInput()']";
    this.txt = "input[type='text']"
  }

  checkbox() {
    cy.get(this.chb).click();
    cy.get(this.onclc).click();
    cy.get(this.idmsg).should("contain", "It's gone!");
    cy.get(this.onclc).click();
    cy.get(this.chb).should("exist");
  }

  swinput() {
    cy.get(this.swp).click();
    cy.get(this.txt).type("Test");
    cy.get(this.swp).click();
    cy.get(this.txt).should('be.disabled');
  }
}

export default DynCtr;
