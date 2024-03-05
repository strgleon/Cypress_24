/// <reference types="cypress" />

class EntAd {
  constructor() {
    this.dscr = "div[class='modal-title']";
    this.cls = "div";
  }

  chkDscr() {
    cy.fixture("tQA.json").then((data) => {
      cy.get(this.dscr).should("contain", data.contModTitle);
    });
  }
  clsClick(){
    cy.get('.modal-footer > p').click();
  }
}
export default EntAd;
