class Hovers {
    constructor() {
      this.fg = ".figure";
      this.fgcap = ".figcaption";
    }
  
    moveCheck() {
      cy.get(this.fg).each(($el, index) => {
        cy.wrap($el).trigger("mouseover");
        cy.get(this.fgcap).eq(index).should("contain", `name: user${index + 1}`);
      });
    }
  }
  
  export default Hovers;
