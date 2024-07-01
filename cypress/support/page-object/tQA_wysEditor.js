class Wys {
    constructor() {
      this.labelFile = ".tox-toolbar__primary .tox-mbtn__select-label";
      this.itemNewDoc = ".tox-toolbar__primary .tox-mn .tox-collection__item";
    }
  
    action() {
      // Switching to the iframe context
      cy.get("iframe").then(($iframe) => {
        // Accessing the iframe's document and finding the elements
        const $body = $iframe.contents().find('body');
        
        // Typing text into the editor
        cy.wrap($body).should('be.visible').type('Hello, this is typed using Cypress!');
        
        // Clicking on the toolbar menu to open the dropdown (assuming this.labelFile is correctly defined)
        // cy.wrap($body).find(this.labelFile).should('be.visible').click();
        
        // // Clicking on the first option in the dropdown (assuming this.itemNewDoc is correctly defined)
        // cy.wrap($body).find(this.itemNewDoc).first().should('be.visible').click();
      });
    }
    
  }
  
  export default Wys;
  