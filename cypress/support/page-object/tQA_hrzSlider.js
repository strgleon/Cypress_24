class HrzSlider {
    constructor() {
      this.sld = "input[type='range']";
      this.value = '3';
      this.check = "#range";
    }
  
    sldMove() {
      cy.get(this.sld)
        .invoke("val", this.value)
        .trigger("change")
        .should('have.value', this.value); // Wait for value to be set
    }
  
    sldCheck() {
        cy.get(this.check).should("contain", this.value);
      }
    }
  
  
  export default HrzSlider;
