class RdrLink {
  constructor() {
    this.rdr = "#redirect";
    this.c200 = "a[href='status_codes/200']";
    this.c301 = "a[href='status_codes/301']";
    this.c404 = "a[href='status_codes/404']";
    this.c500 = "a[href='status_codes/500']";
  }

  clickRdr() {
    cy.fixture("tQA.json").then((data) => {
      cy.get(this.rdr).click();
      cy.get(this.c200).click();
      cy.get(data.cont).should('contain','This page returned a 200 status code.');
      cy.go("back");
      cy.get(this.c301).click();
      cy.get(data.cont).should('contain','This page returned a 301 status code.');
      cy.go("back");
      cy.get(this.c404).click();
      cy.get(data.cont).should('contain','This page returned a 404 status code.');
      cy.go("back");
      cy.get(this.c500).click();
      cy.get(data.cont).should('contain','This page returned a 500 status code.');
      
    });
  }
}

export default RdrLink;
