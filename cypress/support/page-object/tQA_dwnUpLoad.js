class DwnUpLoad {
  constructor() {
    this.up = "#file-upload";
    this.submit = "#file-submit";
    this.drag = "#drag-drop-upload";
  }

  dir() {
    cy.log("Create downloads folder")
      .exec("mkdir cypress\\downloads", {
        log: true,
        failOnNonZeroExit: false,
      })
      .then(() => {
        cy.exec("dir cypress\\downloads").then((result) => {
          cy.log("Directory listing:", result.stdout);
        });
      });
  }

  dwnLoadClick() {
    // Click on the link to start the download
    cy.get(".example a").first().click();

    // Return a chain of Cypress commands
    return cy.wait(1000).then(() => {
      return cy.exec("dir /b cypress\\downloads").then((afterResult) => {
        const after = afterResult.stdout.split("\n").map((line) => line.trim());
        const downloadedFileName = after[0];
        cy.wrap(downloadedFileName).as("downloadedFileName"); // Set alias here
        cy.log("Downloaded file name:", downloadedFileName);
      });
    });
  }

  upLoadClick() {
    // Access the downloadedFileName alias directly
    // return cy.get("@downloadedFileName").then((downloadedFileName) => {
    cy.fixture("tQA.json").then((data) => {
      cy.get(this.up).selectFile(`cypress/downloads/Somefile.txt`);
      cy.get(this.submit).click();
      cy.go("back");
    });
    // });
  }

  dragDropFile() {
    // return this.dwnLoadClick().then((downloadedFileName) => {
    cy.fixture("tQA.json").then((data) => {
      cy.get(this.drag)
        .selectFile(`cypress/downloads/Somefile.txt`, {
          action: "drag-drop",
        })
        .contains("Somefile.txt") // Ensure correct quoting and use of the file name
        .should("be.visible");
    });
    // });
  }

  rmFile() {
    return this.dwnLoadClick().then((downloadedFileName) => {
      cy.exec(`del cypress\\downloads\\${downloadedFileName}`, {
        log: true,
        failOnNonZeroExit: false,
      });
    });
  }
}

export default DwnUpLoad;
