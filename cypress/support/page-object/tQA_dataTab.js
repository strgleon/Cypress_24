class DataTab {
    constructor() {
      this.noid = "a[href='/shifting_content/menu']";
    }
  
    ID() {
      cy.fixture("tQA.json").then((data) => {
        cy.get('#table2 tbody tr td.email').contains('fbach@yahoo.com');
      });
    }
    noID() {
      cy.fixture("tQA.json").then((data) => {
        cy.get('#table1 tbody tr td:nth-child(3)').contains('fbach@yahoo.com');
      });
    }
    
  }
  
  export default DataTab;
  