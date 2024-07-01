class JSError {
  constructor() {}

  chkError() {
    Cypress.on("uncaught:exception", (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      expect(err.message).to.include('is not defined')
      return false;
    });
  }
}
export default JSError;
