class NestFrames {
  constructor() {
    this.leftFrameSelector = '[name="frame-left"]';
    this.middleFrameSelector = '[name="frame-middle"]';
    this.rightFrameSelector = '[name="frame-right"]';
  }

  frameTop() {
    cy.frameLoaded('[name="frame-top"]');
    cy.iframe('[name="frame-top"]').within(() => {
      cy.iframe(this.leftFrameSelector).contains("LEFT").should("exist");
      cy.iframe(this.middleFrameSelector).contains("MIDDLE").should("exist");
      cy.iframe(this.rightFrameSelector).contains("RIGHT").should("exist");
    });
  }
  frameBottom() {
    cy.frameLoaded('[name="frame-bottom"]');
    cy.iframe('[name="frame-bottom"]').within(() => {
      // Perform actions within the context of the bottom frame
      cy.contains("BOTTOM").should("exist");
      // Add additional assertions or interactions as needed
    });
  }
}

export default NestFrames;
