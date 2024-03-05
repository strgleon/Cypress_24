class DwnSec {
    constructor() {
     
    }
  
    logpsw() {
      cy.fixture("tQA.json").then((data) => {
        cy.window().then(win => {
            win.prompt = () => {
              return data.username; // Return the username from fixture
            };
            win.confirm = () => {
              return data.password; // Return the password from fixture
            };
          });
        
      });
    }
  }
  
  export default DwnSec;