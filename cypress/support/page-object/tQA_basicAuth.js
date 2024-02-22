class basicAuth {
    constructor() {}
  
    clickAuth() {
      cy.fixture("tQA.json").then((data) => {
        // Correctly using the cy.visit with auth option
        cy.visit('http://the-internet.herokuapp.com/basic_auth', {
          auth: {
            username: data.username, // Use data from fixture
            password: data.password, // Use data from fixture
          }
        });
  
        // Verify that the authentication was successful and the correct page content is visible
        cy.contains("Congratulations! You must have the proper credentials.", {
          timeout: 4000,
        }).should("exist");
      });
    }
  }
  
  export default basicAuth;