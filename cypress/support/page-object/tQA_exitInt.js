/// <reference types="cypress" />

class ExitInt {
    constructor() {
        // Define the selector for the modal title
        this.modalSelector = "div[class='modal-title']";
    }
  
    // Method to trigger the mouseleave event
    trigger() {
        cy.fixture("tQA.json").then((data) => {
            // Simulate the mouse leaving the page at coordinates (0, 0)
            cy.root().trigger('mouseleave', 0, 0);
        });
    }

    // Method to check if the modal contains expected data
    checkModal() {
        cy.fixture("tQA.json").then((data) => {
            // Get the modal element and assert that it contains the expected text from the fixture
            cy.get(this.modalSelector).should('be.visible');
            cy.get(this.modalSelector).should('contain', data.modal);
        });
    }
}

// Export the ExitInt class for use in tests
export default ExitInt;
