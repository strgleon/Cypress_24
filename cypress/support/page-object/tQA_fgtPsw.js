class ForgotPass {
  constructor() {
    this.email = "input[name='email']";
    this.btnSubmit = "#form_submit";
  }

  inputEmail() {
    cy.get(this.email).type("email@email.com");
  }

  clickSubmit() {
    cy.get(this.btnSubmit).click();
  }
}

export default ForgotPass;
