class UpLoad {
  constructor() {
    this.up = "#file-upload";
  }

  upLoadClick() {
    cy.get(this.up).click();
  }
}

export default UpLoad;
