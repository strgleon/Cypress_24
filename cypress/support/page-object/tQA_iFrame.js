class IFrm {
    constructor() {
      this.iframeSelector = 'iframe'; // Adjust this selector to target TinyMCE's iframe specifically
      this.bodyId = '#tinymce'; // The ID TinyMCE uses for its content body
    }
  
    typeText(text) {
      cy.get(this.iframeSelector).then($iframe => {
        const doc = $iframe.contents();
        const body = doc.find(this.bodyId);
        cy.wrap(body).clear().type(text);
      });
    }
  }
  
  export default IFrm;