class DynCont {
    constructor() {
    this.txt = ".large-10.columns";
    this.img = ".large-2.columns img";
    }
    // Method for testing dynamic image source changes
    testImg() {
      let initialSrc;
      
        cy.get(this.img).then(($img) => {
          initialSrc = $img.attr('src');
        })
        .reload()
        .get(this.img).should(($img) => {
          expect($img.attr('src')).not.to.eq(initialSrc);
        });
    }
  
    // Method for testing dynamic text content changes
    testTxt() {
      let initialText;
      cy.get(this.txt).then(($text) => {
          initialText = $text.text();
        })
        .reload()
        .get(this.txt).should(($text) => {
          expect($text.text()).not.to.eq(initialText);
        });
    }
  }
  
  export default DynCont;