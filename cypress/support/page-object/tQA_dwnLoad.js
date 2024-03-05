class DwnLoad {
  constructor() {
    this.dwn = "a[href='download/sample.pdf']";
    this.dwnUrl = "https://the-internet.herokuapp.com/download/sample.pdf";
  }

  dwnLoadClick() {
   
    cy.get(this.dwn).click();

  }
}

export default DwnLoad;
