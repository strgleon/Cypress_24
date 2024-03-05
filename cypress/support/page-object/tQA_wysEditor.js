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
  
        // Clicking on the toolbar menu to open the dropdown
        cy.wrap($body).find(this.labelFile).click();
  
        // Clicking on the first option in the dropdown
        cy.wrap($body).find(this.itemNewDoc).first().click();
      });
    }
  }
  
  export default Wys;
  