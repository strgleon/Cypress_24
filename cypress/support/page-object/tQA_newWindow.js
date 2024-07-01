class NewWin {
    constructor() {
      this.newwin = "a[href='/windows/new']";
    }
  
    click() {
      cy.fixture("tQA.json").then((data) => {
        cy.get(this.newwin).click();
      });
    }
  
    testnewwin() {
      cy.window().then((win) => {
        // Check if the new window is open
        expect(win).to.exist;
      });
    }
  }
  
  export default NewWin;
  