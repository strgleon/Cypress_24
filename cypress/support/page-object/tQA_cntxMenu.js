class CntxMenu {
  constructor() {
    this.htspt = "#hot-spot";
    // this.htspt = "div[oncontextmenu='displayMessage()']";
  }
  clickRightBtn() {
    // JavaScript alert -it is not working
    cy.get(this.htspt).rightclick();
    cy.wait(2000);
  }
}

export default CntxMenu;
