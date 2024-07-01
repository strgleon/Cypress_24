class NotfMsg {
    constructor() {
      this.ntf = "a[href='/notification_message']";
      this.msg = "#flash"; // Updated selector to target the specific notification message element
    }
  
    click() {
      cy.get(this.ntf).click();
    }
  
    testmsg() {
      cy.get(this.msg).should("be.visible")
      // .then(($msg) => {
      //   if ($msg.text().includes("successful")) {
      //     expect($msg.text()).to.include("successful");
      //   } else if ($msg.text().includes("unsuccessful")) {
      //     expect($msg.text()).to.include("unsuccessful");
      //   } else {
      //     throw new Error("Unexpected message");
      //   }
      // });
    }
  }
  
  export default NotfMsg;
  