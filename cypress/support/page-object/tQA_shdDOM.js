class ShdDOM {
  constructor() {
    this.par = "my-paragraph";
  }

  chkdom() {
    cy.get(this.par).contains("ul", "Let's have some different text!"); // Assuming you're targeting the list within 'my-paragraph' component
    cy.get(this.par).contains("ul", "In a list");
  }
}

export default ShdDOM;
