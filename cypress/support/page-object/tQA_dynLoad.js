class DynLoad {
  constructor() {
    this.btnStart = "#start button";
    this.fin = "#finish";
  }
  Start() {
    cy.get(this.btnStart).click();
    cy.wait(1000);
    cy.get(this.fin).should("contain", "Hello World!");
  }
  
 
}

export default DynLoad;
