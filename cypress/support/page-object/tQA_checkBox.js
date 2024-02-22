class CheckBox {
    constructor() {
      this.id = "#checkboxes input[type='checkbox']";
      
    }
    clickCheckBox() {
      cy.get(this.id).eq(0).click();
      cy.get(this.id).eq(1).click();
      
    }
    
  }
  
  export default CheckBox;