class DwnSec {
    constructor() {
     
    }
  
    dwnload() {
      cy.fixture("tQA.json").then((data) => {
        cy.exec("dir cypress\\downloads").then((beforeResult) => {
          const before = beforeResult.stdout.split("\n").map((line) => line.trim());
          cy.contains(data.dwnFile1).click();
    
          cy.wait(1000);
    
          cy.exec("dir cypress\\downloads").then((afterResult) => {
            const after = afterResult.stdout.split("\n").map((line) => line.trim());
    
            expect(after.length).to.be.eq(before.length + 1);
    
            const downloadedFileName = after.find((file) => !before.includes(file));
            cy.wrap(downloadedFileName).as('downloadedFileName');
            expect(downloadedFileName).to.be.a("string").and.include(data.dwnFile1);
          });
        });
      });
    }
  }
  
  export default DwnSec;