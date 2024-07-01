/// <reference types="cypress" />

class InfScroll {
    constructor() {
        this.initialText = '';
      }
    
      checkAddedContent() {
        cy.get('body').invoke('text').then((text) => {
          this.initialText = text;
        });
    
        cy.scrollTo('bottom');
    
        cy.wait(2000);
    
        cy.get('body').invoke('text').then((newText) => {
          expect(newText).not.to.equal(this.initialText);
        });
    }
}
export default InfScroll;
