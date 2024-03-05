/// <reference types="cypress" />

class JQuery {
  constructor() {
    this.enabled = "#menu > li:nth-child(2) > a";
    this.downloads = "a:contains('Downloads')";
    this.pdf = "a[href='/download/jqueryui/menu/menu.pdf']";
    this.csv = "a[href='/download/jqueryui/menu/menu.csv']";
    this.xls = "a[href='/download/jqueryui/menu/menu.xls']";
  }

  click() {
    cy.fixture("tQA.json").then((data) => {
      cy.get(this.enabled).click();
      cy.get(this.downloads).click();
      cy.get(this.pdf).then(($el) => {
        $el.trigger("click");
      });
      cy.get(this.csv).then(($el) => {
        $el.trigger('click');
      });
      cy.get(this.xls).then(($el) => {
        $el.trigger('click');
      });
    });
  }
}
export default JQuery;
