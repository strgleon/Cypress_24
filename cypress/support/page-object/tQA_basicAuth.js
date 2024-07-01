class BasicAuth {
  constructor() {}

  clickAuth() {
    cy.fixture("tQA.json").then((data) => {
      const username = data.username;
      const password = data.password;
      
      it.only('Successfully login by appending username and password in URL', function() {
        cy.visit(`https://${username}:${password}@the-internet.herokuapp.com/basic_auth`);
        cy.get('p').should('include.text', 'Congratulations! You must have the proper credentials.');
      });
    });
  }
}
export default BasicAuth;