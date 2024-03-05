class LogIn {
  constructor() {
    this.name = "#username";
    this.psw = "#password";
    this.btnSubmit = "button[type='submit']";
    this.flashMsg = "#flash";
    this.logOut = "a[href='/logout']";
    this.cnt = "Login Page";
  }

  tstWrong() {
    cy.get(this.name).type("Wrong User");
    cy.get(this.psw).type("Wrong Password");
    cy.get(this.btnSubmit).click();
    cy.get(this.flashMsg).should("contain", "Your username is invalid!");
  }

  tstRight() {
    cy.fixture("tQA.json").then((data) => {
      cy.get(this.name).type(data.logUser);
      cy.get(this.psw).type(data.logPass);
      cy.get(this.btnSubmit).click();
      cy.get(this.flashMsg).should("contain", "You logged into a secure area!");
    });
  }
  tstLogOut() {
    cy.fixture("tQA.json").then((data) => {
      cy.get(this.logOut).click();
      cy.contains(this.cnt).should("exist");
    });
  }
}

export default LogIn;
