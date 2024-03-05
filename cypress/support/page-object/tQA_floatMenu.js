class FloatMenu {
  constructor() {
    this.home = "a[href='#home']";
    this.news = "a[href='#news']";
    this.contact = "a[href='#contact']";
    this.about = "a[href='#about']";
  }

  scrollDwn() {
    cy.scrollTo(0, 2000);
    cy.wait(2000);
  }

  clickMenu() {
    cy.get(this.home).click();
    cy.get(this.news).click();
    cy.get(this.contact).click();
    cy.get(this.about).click();
  }
}

export default FloatMenu;
