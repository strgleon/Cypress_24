class ShfCont {
  constructor() {
    this.menuLink = "a[href='/shifting_content/menu']";
    // this.menuRandom = "a[href='/shifting_content/menu?mode=random']";
    this.imgLink = "a[href='/shifting_content/image']";
    this.imgRandom = "a[href='/shifting_content/menu?mode=random']";
    this.lstLink = "a[href='/shifting_content/list']";
    this.ulSelector = "div.example > ul";
    this.liSelector = "div.example > ul li";
    this.imgSelector = "img.shift";
    this.lstSelector = ".large-6.columns.large-centered";
  }

  clickMenu() {
    cy.get(this.menuLink).click();
  }
  clickImage() {
    cy.get(this.imgLink).click();
    // cy.get(this.imgRandom).click();
  }
  clickList() {
    cy.get(this.lstLink).click();
  }

  checkMenuPosition() {
    // Log and assert the width before reload
    cy.get(this.liSelector).should('be.visible').and('have.css', 'width').invoke('width').then((initialWidth) => {
      cy.log(`Initial width: ${initialWidth}`);
      expect(parseFloat(initialWidth)).to.be.greaterThan(0);
  
      // Reload the page and wait for it to fully load
      cy.reload();
      cy.wait(2000); // Increase wait time to ensure page is fully loaded
  
      // Log and assert the width after reload
      cy.get(this.liSelector).should('be.visible').and('have.css', 'width').invoke('width').then((afterReloadWidth) => {
        cy.log(`Width after reload: ${afterReloadWidth}`);
        expect(parseFloat(afterReloadWidth)).to.be.greaterThan(0);
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
