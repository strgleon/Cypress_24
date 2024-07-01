class SlowRes {
  constructor() {
    this.menuLink = "a[href='/shifting_content/menu']";
  }

  slowMsg() {
    cy.fixture("tQA.json").then((data) => {
      cy.wait(3000); // Wait for 30 seconds

      // After waiting, perform assertions or further actions
      cy.get(data.cont).should(
        "contain",
        "At times it can take a while for third-party site resources to load"
      );
    });
  }
}

export default SlowRes;
