class UpLoad {
  constructor() {
    this.up = "#file-upload";
    this.submit = "#file-submit";
    this.drag = "#drag-drop-upload";
  }

  upLoadClick() {
    cy.get("@downloadedFileName").then((downloadedFileName) => {
      cy.fixture("tQA.json").then((data) => {
        cy.get(this.up).selectFile(`cypress/downloads/${downloadedFileName}`);
        cy.get(this.submit).click();
        cy.go("back");
      });
    });
  }

  dragDropFile() {
    cy.get("@downloadedFileName").then((downloadedFileName) => {
      cy.fixture("tQA.json").then((data) => {
        cy.get(this.drag)
          .selectFile(`cypress/downloads/${downloadedFileName}`, {
            action: "drag-drop",
          })
          .contains(downloadedFileName)
          .should("be.visible");
      });
    });
  }

  rmFile() {
    cy.get("@downloadedFileName").then((downloadedFileName) => {
      cy.exec(`del cypress\\downloads\\${downloadedFileName}`, {
        log: true,
        failOnNonZeroExit: false, // Not to fail if the command exits with a non-zero code
      });
    });
  }
}

export default UpLoad;
