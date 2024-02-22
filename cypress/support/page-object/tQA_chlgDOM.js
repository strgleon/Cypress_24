class ChlgDOM {
  constructor() {
    this.btn = "a[class='button']";
    this.btnAlert = "a[class='button alert']";
    this.btnSuccess = "a[class='button success']";
  }
  clickBtnBig() {
    cy.get(this.btn).click();
    cy.get(this.btnAlert).click();
    cy.get(this.btnSuccess).click();
  }
  checkTxt() {
    // Assuming the table has a consistent structure and no specific IDs or classes
    cy.get("tr:nth-child(6) > td:nth-child(4)").should(
      "contain",
      "Definiebas5"
    );
  }
  clickEditDel() {
    // Assuming the table has a consistent structure and no specific IDs or classes
    cy.get('tbody > tr:nth-child(3) > td:nth-child(7) > a[href="#edit"]').click();
    cy.get('tbody > tr:nth-child(3) > td:nth-child(7) > a[href="#delete"]').click();
  }
  checkCanvas() {
    cy.get("#canvas").should("exist");
    // I need to check word Answer
  }
}

export default ChlgDOM;
