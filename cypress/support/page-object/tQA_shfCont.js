class ShfCont {
  constructor() {
    this.menuLink = "a[href='/shifting_content/menu']";
    this.imgLink = "a[href='/shifting_content/image']";
    this.lstLink = "a[href='/shifting_content/list']";
    this.ulSelector = "div.example > ul";
    this.imgSelector = "img.shift";
    this.lstSelector = ".large-6.columns.large-centered";
  }

  clickMenu() {
    cy.get(this.menuLink).click();
  }
  clickImage() {
    cy.get(this.imgLink).click();
  }
  clickList() {
    cy.get(this.lstLink).click();
  }

  checkMenuPosition() {
    // Get the initial position of the ul element
    let initialPosition;
    cy.get(this.ulSelector).then(($element) => {
      initialPosition = $element.position();
      cy.reload();
      cy.get(this.ulSelector).then(($newElement) => {
        const newPosition = $newElement.position();
        // Assert that the element has shifted to a new position
        expect(newPosition.top).to.not.equal(initialPosition.top);
        expect(newPosition.left).to.not.equal(initialPosition.left);
      });
    });
  }

  checkImagePosition() {
    let initialPosition;

    // Get the initial position of the image
    cy.get(this.imgSelector).then(($img) => {
      initialPosition = $img.position();

      // Reload the page to trigger the shift
      cy.reload();

      // Get the new position of the image after reload
      cy.get(this.imgSelector).then(($newImg) => {
        const newPosition = $newImg.position();

        // Assert that the new position is different from the initial position
        expect(newPosition.top).to.not.equal(initialPosition.top);
        expect(newPosition.left).to.not.equal(initialPosition.left);
      });
    });
  }
  checkListContent() {
    let initialContent;

    // Get the initial content of the div
    cy.get(this.lstSelector).then(($div) => {
      initialContent = $div.text().trim();

      // Reload the page to trigger the content change
      cy.reload();

      // Get the new content of the div after reload
      cy.get(this.lstSelector).then(($newDiv) => {
        const newContent = $newDiv.text().trim();

        // Assert that the new content is different from the initial content
        expect(newContent).to.not.equal(initialContent);
      });
    });
  }
}

export default ShfCont;
