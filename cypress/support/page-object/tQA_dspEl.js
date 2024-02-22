/// <reference types="cypress" />

class DspEl {
  constructor() {
    //   this.addButton = "button[onclick='addElement()']";
  }

  checkGal() {
    cy.fixture("tQA.json").then((data) => {
      cy.get('body').then(($body) => {
        // Check if the 'Gallery' link exists in the body
        if ($body.find('a:contains("Gallery")').length) {
          // The Gallery link exists, now check for visibility
          cy.get('ul').contains('a', 'Gallery').should('be.visible').then(() => {
            // If the link is visible, the function completes successfully
            console.log('Gallery element is visible.');
          });
        } else {
          // If the Gallery link does not exist, log and reload
          console.log('No Gallery element, reloading...');
          cy.reload().then(() => {
            // Call checkGal recursively to check again after reload
            this.checkGal();
          });
        }
      });
    });
  }
}
export default DspEl;
