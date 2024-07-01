/// <reference types="cypress" />

class GeoLct {
  constructor() {
    this.where = "button[onclick='getLocation()']";
  }

  geoClick() {
    cy.get(this.where).click();
  }
}
export default GeoLct;
