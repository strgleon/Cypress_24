import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";
import "cypress-iframe";
import addRemove from "../page-object/tQA_addRemove";
import basicAuth from "../page-object/tQA_basicAuth";
import BrokenImg from "../page-object/tQA_brokenImg";
import ChlgDOM from "../page-object/tQA_chlgDOM";
import CheckBox from "../page-object/tQA_checkBox";
import CntxMenu from "../page-object/tQA_cntxMenu";
import DspEl from "../page-object/tQA_dspEl";

// Intercept requests to the unavailable link
beforeEach(() => {
  cy.intercept("GET", "http://298279967.log.optimizely.com/*", (req) => {
    req.reply({
      statusCode: 200,
      body: {},
    });
  }).as("optimizelyRequest");
});

Given("I open url {string}", () => {
  cy.fixture("tQA.json").then((data) => {
    cy.visit(data.baseUrl);
  });
});

Then("I click link {string}", (link) => {
  cy.fixture("tQA.json").then((data) => {
    switch (link) {
      case "<addRemove>":
        cy.get(data.addRemove).click();
        break;

      case "<basicAuth>":
        cy.get(data.basicAuth).click();
        break;

      case "<brokenImg>":
        cy.get(data.brokenImg).click();
        break;

      case "<chlgDOM>":
        cy.get(data.chlgDOM).click();
        break;

      case "<checkBox>":
        cy.get(data.checkBox).click();
        break;

      case "<cntxMenu>":
        cy.get(data.cntxMenu).click();
        break;

      case "<dgstAuth>":
        cy.get(data.dgstAuth).click();
        break;

      case "<dspEl>":
        cy.get(data.dspEl).click();
        break;

      default:
        console.log("I can't find the link");
        break;
    }
  });
});

Then("I check description {string}", (desc) => {
  cy.fixture("tQA.json").then((data) => {
    switch (desc) {
      case "<contAddRemove>":
        cy.get(data.cont).should("contain", data.contAddRemove);
        break;

      case "<contBrokenImg>":
        cy.get(data.cont).should("contain", data.contBrokenImg);
        break;

      case "<contChlgDOM>":
        cy.get(data.cont).should("contain", data.contChlgDOM);
        break;

      case "<contCheckBox>":
        cy.get(data.cont).should("contain", data.contCheckBox);
        break;

      case "<contCntxMenu>":
        cy.get(data.cont).should("contain", data.contCntxMenu);
        break;

      case "<contDspEl>":
        cy.get(data.cont).should("contain", data.contDspEl);
        break;

      default:
        console.log("I can't find description");
        break;
    }
  });
});

Then("I interacts with the page {string}", (page) => {
  cy.fixture("tQA.json").then((data) => {
    switch (page) {
      case "<addRemove>":
        const add = new addRemove();
        add.clickAdd();
        add.clickDelete();
        break;

      case "<basicAuth>":
        const basau = new basicAuth();
        basau.clickAuth();
        break;

      case "<brokenImg>":
        const brk = new BrokenImg();
        brk.checkBrokenImg();
        break;

      case "<chlgDOM>":
        const chlg = new ChlgDOM();
        chlg.clickBtnBig();
        chlg.checkTxt();
        chlg.clickEditDel();
        chlg.checkCanvas();
        break;

      case "<checkBox>":
        const chck = new CheckBox();
        chck.clickCheckBox();
        break;

      case "<cntxMenu>":
        const cntx = new CntxMenu();
        cntx.clickRightBtn();
        break;

      case "<dspEl>":
        const dsp = new DspEl();
        dsp.checkGal();
        break;

      default:
        console.log("There is no page to interact with");
        break;
    }
  });
});
