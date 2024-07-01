class DropDownMenu {
    constructor() {
      this.id = "#dropdown";
      
    }
    dropDown() {
      cy.get(this.id).select('1');
      cy.get(this.id).select('2');
      
      
    }
    
  }
  
  export default DropDownMenu;