class DragDropAct {
    constructor() {
      this.boxASelector = "#column-a";
      this.boxBSelector = "#column-b";
    }
    dragDrop() {
      cy.get(this.boxASelector).trigger("mousedown", { which: 1, force: true });
      cy.get(this.boxBSelector).trigger("mousemove").trigger("mouseup", { force: true });
    }
  }
  
  export default DragDropAct;
