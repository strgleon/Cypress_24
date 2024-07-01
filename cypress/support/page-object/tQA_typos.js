class Typos {
    constructor() {}
  
    check() {
        cy.fixture("tQA.json").then((data) => {
        cy.get(data.cont)
          .contains("Sometimes you'll see a typo, other times you")
          .then(($element) => {
            const text = $element.text();
            if (text.includes("won't")) {
              console.log("Grammar is ok!");
            } else {
              console.log("Check your spelling!");
            }
          });
      });
    }
  }
  
  export default Typos;
  