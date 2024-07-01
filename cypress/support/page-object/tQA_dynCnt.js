class DynCont {
  constructor() {
    this.txt = ".large-10.columns";
    this.img = ".large-2.columns img";
  }

  // Method for testing dynamic image source changes
  testImg() {
    let initialSrcArray = [];
    
    // Get initial image sources
    cy.get(this.img).each(($img) => {
      initialSrcArray.push($img.attr('src'));
    }).then(() => {
      cy.reload();
      
      let newSrcArray = [];
      
      // Get new image sources after reload
      cy.get(this.img).each(($img) => {
        newSrcArray.push($img.attr('src'));
      }).then(() => {
        // Compare initial and new image sources arrays
        expect(newSrcArray).to.not.deep.equal(initialSrcArray);
      });
    });
  }

  // Method for testing dynamic text content changes
  testTxt() {
    let initialText;
    cy.get(this.txt)
      .then(($text) => {
        initialText = $text.text();
      })
      .then(() => {
        cy.reload();
      })
      .get(this.txt)
      .should(($text) => {
        expect($text.text()).not.to.eq(initialText);
      });
  }
}

export default DynCont;
