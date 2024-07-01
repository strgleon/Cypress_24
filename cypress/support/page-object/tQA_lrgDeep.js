class LrgDeep {
  constructor() {
    this.idnosib = "div#no-siblings";
    this.table = "#large-table";
  }

  noSib() {
    cy.fixture("tQA.json").then((data) => {
      cy.get(this.idnosib).should("have.text", data.no_siblings);
    });
  }

  sib23() {
    cy.fixture("tQA.json").then((data) => {
      cy.get("#siblings")
        .should("exist")
        .find("div#sibling-" + data.deep)
        .should("have.text", data.deepText);
    });
  }

  table13() {
    cy.fixture("tQA.json").then((data) => {
      cy.get(this.table) // Replace 'table-selector' with the appropriate selector for your table
        .find("tr:nth-child(" + data.row + ")") // Select the 13th row
        .find("td:nth-child(" + data.column + ")") // Select the 13th column cell in that row
        .should("contain", data.tableText);
    });
  }
}
export default LrgDeep;
