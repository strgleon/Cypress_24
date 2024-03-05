class NotfMsg {
    constructor() {
      this.ntf = "a[href='/notification_message']";
      this.msg = "#flash-messages .flash.notice"; // Updated selector to target the specific notification message element
    }
  
    click() {
      cy.get(this.ntf).click();
    }
  
    testmsg() {
      cy.get(this.msg).should("be.visible").then(($msg) => {
        if ($msg.text().includes("Action successful")) {
          expect($msg.text()).to.include("Action successful");
        } else if ($msg.text().includes("Action unsuccessful")) {
          expect($msg.text()).to.include("Action unsuccessful, please try again");
        } else {
          throw new Error("Unexpected message");
        }
      });
    }
  }
  
  export default NotfMsg;
  