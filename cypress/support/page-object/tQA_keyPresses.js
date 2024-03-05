class KeyPresses {
  constructor() {
    this.idinput = "input[id='target']";
    this.idresult = "p[id='result']";
  }

  type() {
    cy.fixture("tQA.json").then((data) => {
      cy.get(this.idinput).type(data.input);
    });
  }

  check() {
    cy.fixture("tQA.json").then((data) => {
      const expectedText = data.input;
      cy.get(this.idresult)
        .invoke("text")
        .then((actualText) => {
          const actualTextLowerCase = actualText.toLowerCase();
          const expectedTextLowerCase = expectedText.toLowerCase();

          expect(actualTextLowerCase).to.include(expectedTextLowerCase);
        });
    });
  }
}
export default KeyPresses;
