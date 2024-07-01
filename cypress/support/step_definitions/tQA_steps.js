import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import "cypress-iframe";
import addRemove from "../page-object/tQA_addRemove";
import basicAuth from "../page-object/tQA_basicAuth";
import BrokenImg from "../page-object/tQA_brokenImg";
import ChlgDOM from "../page-object/tQA_chlgDOM";
import CheckBox from "../page-object/tQA_checkBox";
import CntxMenu from "../page-object/tQA_cntxMenu";
import DspEl from "../page-object/tQA_dspEl";
import DragDropAct from "../page-object/tQA_dragDrop";
import DropDownMenu from "../page-object/tQA_dropDown";
import DynCnt from "../page-object/tQA_dynCnt";
import DynCtr from "../page-object/tQA_dynCtr";
import DynLoad from "../page-object/tQA_dynLoad";
import EntAd from "../page-object/tQA_entAd";
import DwnUpLoad from "../page-object/tQA_dwnUpLoad";
import UpLoad from "../page-object/tQA_upLoad_old";
import FloatMenu from "../page-object/tQA_floatMenu";
import ForgotPass from "../page-object/tQA_fgtPsw";
import LogIn from "../page-object/tQA_login";
import NestFrames from "../page-object/tQA_nestFrames";
import IFrm from "../page-object/tQA_iFrame";
import GeoLct from "../page-object/tQA_geoLocation";
import HrzSlider from "../page-object/tQA_hrzSlider";
import Hovers from "../page-object/tQA_hovers";
import InfScroll from "../page-object/tQA_infScroll";
import Inputs from "../page-object/tQA_inputs";
import JQuery from "../page-object/tQA_jquery";
import JSAlerts from "../page-object/tQA_jsAlerts";
import JSError from "../page-object/tQA_jsError";
import KeyPasses from "../page-object/tQA_keyPresses";
import LrgDeep from "../page-object/tQA_lrgDeep";
import NewWin from "../page-object/tQA_newWindow";
import NotfMsg from "../page-object/tQA_notfMessage";
import RdrLink from "../page-object/tQA_rdrLink";
import ShdDOM from "../page-object/tQA_shdDOM";
import ShfCont from "../page-object/tQA_shfCont";
import SlowRes from "../page-object/tQA_slowRes";
import DataTab from "../page-object/tQA_dataTab";
import Typos from "../page-object/tQA_typos";
import Wys from "../page-object/tQA_wysEditor";
import ExitInt from "../page-object/tQA_exitInt";
import DwnSec from "../page-object/tQA_dwnSec";

function optimize() {
  cy.intercept("GET", "http://298279967.log.optimizely.com/*", (req) => {
    req.reply({
      statusCode: 200,
      body: {},
    });
  }).as("optimizelyRequest");
}

Given("I open url {string}", () => {
  cy.fixture("tQA.json").then((data) => {
    cy.log("Set Cookie").setCookie("optimizelyOptOut", "true");
    cy.visit(data.baseUrl);
  });
});

When("I visit {string} with clear Cookies", () => {
  cy.fixture("tQA.json").then((data) => {
    cy.clearCookies();
    cy.visit(data.baseUrl);
    cy.get(data.abTest).click();
    cy.log("Set Cookie").setCookie("optimizelyOptOut", "true");
    optimize();
  });
});

Then("I drag and drop {string}", () => {
  const dataTransfer = new DataTransfer();
  cy.fixture("tQA.json").then((data) => {
    cy.contains("A").trigger("dragstart", { dataTransfer });
    cy.contains("B").trigger("drop", { dataTransfer });
    optimize();
  });
});

Given("I visit {string}", (link) => {
  cy.fixture("tQA.json").then((data) => {
    cy.log("Set Cookie").setCookie("optimizelyOptOut", "true");
    switch (link) {
      case "<basicAuth>":
        const basicAuthUrl = `https://${data.username}:${data.password}${data.basicAuth}`;
        cy.visit(basicAuthUrl);
        break;

      case "<cntxMenu>":
        cy.visit(data.cntxMenu);
        break;

      case "<dgstAuth>":
        const dgstAuthUrl = `https://${data.username}:${data.password}${data.dgstAuth}`;
        cy.visit(dgstAuthUrl);
        break;

      case "<exitIntent>":
        cy.visit(data.exitInt);
        break;

      case "<geoLct>":
        const latitude = 34.075984;
        const longitude = 42.877656;
        cy.fixture("tQA.json").then((data) => {
          cy.visit(data.geoLct1);
          cy.window().then((win) => {
            cy.stub(win.navigator.geolocation, "getCurrentPosition").callsFake(
              (callback) => {
                return callback({ coords: { latitude, longitude } });
              }
            );
          });
          cy.contains("Where am I?")
            .click()
            .should("be.visible")
            .then(() => {
              cy.contains(latitude).should("be.visible");
              cy.contains(longitude).should("be.visible");
            });
        });
        break;

      case "<jsAlert>":
        cy.fixture("tQA.json").then((data) => {
          cy.visit(data.jsAlerts1);
          cy.contains("Click for JS Alert").click().should("be.visible");
          cy.on("window:alert", (alertText) => {
            expect(alertText).to.eq("I am a JS Alert");
          });
          cy.get("#result")
            .contains("You successfully clicked an alert")
            .should("be.visible");
        });
        break;

      case "<jsConfirm>":
        cy.fixture("tQA.json").then((data) => {
          cy.visit(data.jsAlerts1);
          cy.contains("Click for JS Confirm").click().should("be.visible");
          cy.on("window:confirm", (confirmText) => {
            expect(confirmText).to.eq("I am a JS Confirm");
            return true; // To simulate clicking "OK"
          });
          cy.get("#result").contains("You clicked: Ok").should("be.visible");
        });
        break;

      case "<jsPrompt>":
        cy.fixture("tQA.json").then((data) => {
          cy.visit(data.jsAlerts1);
          cy.window().then((win) => {
            cy.stub(win, "prompt").returns("Hello Hi!!");
            cy.contains("Click for JS Prompt").click().should("be.visible");
          });
          cy.get("#result")
            .contains("You entered: Hello Hi!!")
            .should("be.visible");
        });
        break;

      case "<jsError>":
        cy.fixture("tQA.json").then((data) => {
          cy.on("uncaught:exception", (err, runnable) => {
            // Handle specific error message
            if (
              err.message.includes(
                "Cannot read properties of undefined (reading 'xyz')"
              )
            ) {
              // Return false to prevent failing the test for this specific error
              return false;
            }

            // Let other errors fail the test
            return true;
          });
          cy.visit(data.jsError1);
        });
        break;

      case "<dwnSec>":
        const dwnS = `https://${data.username}:${data.password}${data.dwnSec}`;
        cy.visit(dwnS);
        break;

      default:
        throw new Error(`Unknown auth type: ${link}`);
    }
  });
  optimize();
});

Then("I check the message {string}", () => {
  cy.fixture("tQA.json").then((data) => {
    cy.contains(data.msgBasicAuth).should("be.visible");
  });
});

Then("I do right click {string}", () => {
  cy.fixture("tQA.json").then((data) => {
    cy.get("#hot-spot").rightclick();
    cy.on("window:alert", (alertText) => {
      expect(alertText).eq("You selected a context menu");
    });
  });
});

When("I click link {string}", (link) => {
  cy.fixture("tQA.json").then((data) => {
    switch (link) {
      case "<abTest1>":
        cy.visit(data.abTest1);
        cy.log("Handle alert");
        cy.on("window:alert", (alertText) => {
          expect(alertText).eq(
            "You have successfully opted out of Optimizely for this domain."
          );
          return true;
        });
        break;

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

      case "<dragDrop>":
        cy.get(data.dragDrop).click();
        break;

      case "<dropDown>":
        cy.get(data.dropDown).click();
        break;

      case "<dynCnt>":
        cy.get(data.dynCnt).click();
        break;

      case "<dynCtr>":
        cy.get(data.dynCtr).click();
        break;

      case "<dynLoad>":
        cy.get(data.dynLoad).click();
        break;

      case "<dynLoad1>":
        cy.get(data.dynLoad1).click();
        break;

      case "<dynLoad2>":
        cy.get(data.dynLoad2).click();
        break;

      case "<entAd>":
        cy.get(data.entAd).click();
        break;

      case "<exitInt>":
        cy.get(data.exitInt).click();
        break;

      case "<dwnLoad>":
        cy.get(data.dwnLoad).click();
        break;

      case "<upLoad>":
        cy.get(data.upLoad).click();
        break;

      case "<floatMenu>":
        cy.get(data.floatMenu).click();
        break;

      case "<fgtPsw>":
        cy.get(data.fgtPsw).click();
        break;

      case "<logIn>":
        cy.get(data.logIn).click();
        break;

      case "<frames>":
        cy.get(data.frames).click();
        break;

      case "<nestedFrames>":
        cy.get(data.nestedFrames).click();
        break;

      case "<iFrame>":
        cy.get(data.iFrame).click();
        break;

      case "<geoLct>":
        cy.get(data.geoLct).click();
        break;

      case "<hrzSlider>":
        cy.get(data.hrzSlider).click();
        break;

      case "<hovers>":
        cy.get(data.hovers).click();
        break;

      case "<infnScroll>":
        cy.get(data.infnScroll).click();
        break;

      case "<inputs>":
        cy.get(data.inputs).click();
        break;

      case "<jqueryUI>":
        cy.get(data.jqueryUI).click();
        break;

      case "<jsAlerts>":
        cy.get(data.jsAlerts).click();
        break;

      case "<jsError>":
        cy.get(data.jsError).click();
        break;

      case "<keyPresses>":
        cy.get(data.keyPresses).click();
        break;

      case "<lrgDeep>":
        cy.get(data.lrgDeep).click();
        break;

      case "<newWin>":
        cy.get(data.newWin).click();
        break;

      case "<notfMsg>":
        cy.get(data.notfMsg).click();
        break;

      case "<rdrLink>":
        cy.get(data.rdrLink).click();
        break;

      case "<shdDOM>":
        cy.get(data.shdDOM).click();
        break;

      case "<shfCont>":
        cy.get(data.shfCont).click();
        break;

      case "<slowRes>":
        cy.get(data.slowRes).click();
        break;

      case "<dataTab>":
        cy.get(data.dataTab).click();
        break;

      case "<typos>":
        cy.get(data.typos).click();
        break;

      case "<wys>":
        cy.get(data.wys).click();
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
      case "<contAbTest>":
        cy.get(data.cont).should("contain", data.contAbTest);
        break;

      case "<contAbTest1>":
        cy.get(data.cont).should("contain", data.contAbTest1);
        break;

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

      case "<contDragDrop>":
        cy.get(data.cont).should("contain", data.contDragDrop);
        break;

      case "<contDropDown>":
        cy.get(data.cont).should("contain", data.contDropDown);
        break;

      case "<contDynCnt>":
        cy.get(data.cont).should("contain", data.contDynCnt);
        break;

      case "<contDynCtr>":
        cy.get(data.cont).should("contain", data.contDynCtr);
        break;

      case "<contDynLoad>":
        cy.get(data.cont).should("contain", data.contDynLoad);
        break;

      case "<contExitInt>":
        cy.get(data.cont).should("contain", data.contExitInt);
        break;

      case "<contDwnLoad>":
        cy.get(data.cont).should("contain", data.contDwnLoad);
        break;

      case "<contUpLoad>":
        cy.get(data.cont).should("contain", data.contUpLoad);
        break;

      case "<contFloatMenu>":
        cy.get(data.cont).should("contain", data.contFloatMenu);
        break;

      case "<contFgtPsw>":
        cy.get(data.cont).should("contain", data.contFgtPsw);
        break;

      case "<contLogIn>":
        cy.get(data.cont).should("contain", data.contLogIn);
        break;

      case "<contFrames>":
        cy.get(data.cont).should("contain", data.contFrames);
        break;

      case "<contGeoLct>":
        cy.get(data.cont).should("contain", data.contGeoLct);
        break;

      case "<contHrzSlider>":
        cy.get(data.cont).should("contain", data.contHrzSlider);
        break;

      case "<contHovers>":
        cy.get(data.cont).should("contain", data.contHovers);
        break;

      case "<contInfnScroll>":
        cy.get(data.cont).should("contain", data.contInfnScroll);
        break;

      case "<contInputs>":
        cy.get(data.cont).should("contain", data.contInputs);
        break;

      case "<contJqueryUI>":
        cy.get(data.cont).should("contain", data.contJqueryUI);
        break;

      case "<contJsAlerts>":
        cy.get(data.cont).should("contain", data.contJsAlerts);
        break;

      case "<contKeyPresses>":
        cy.get(data.cont).should("contain", data.contKeyPresses);
        break;

      case "<contLrgDeep>":
        cy.get(data.cont).should("contain", data.contLrgDeep);
        break;

      case "<contNewWin>":
        cy.get(data.cont).should("contain", data.contNewWin);
        break;

      case "<contNotfMsg>":
        cy.get(data.cont).should("contain", data.contNotfMsg);
        break;

      case "<contRdrLink>":
        cy.get(data.cont).should("contain", data.contRdrLink);
        break;

      case "<contShdDOM>":
        cy.get(data.cont).should("contain", data.contShdDOM);
        break;

      case "<contShfCont>":
        cy.get(data.cont).should("contain", data.contShfCont);
        break;

      case "<contSlowRes>":
        cy.get(data.cont).should("contain", data.contSlowRes);
        break;

      case "<contDataTab>":
        cy.get(data.cont).should("contain", data.contDataTab);
        break;

      case "<contTypos>":
        cy.get(data.cont).should("contain", data.contTypos);
        break;

      case "<contWys>":
        cy.get(data.cont).should("contain", data.contWys);
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
      case "<abTest1>":
        const ab = new abTest();
        ab.clickAbLink();

        break;

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

      case "<dragDrop>":
        const drgdrp = new DragDropAct();
        drgdrp.dragDrop();
        break;

      case "<dropDown>":
        const drpdn = new DropDownMenu();
        drpdn.dropDown();
        break;

      case "<dynCnt>":
        const dyncon = new DynCnt();
        dyncon.testImg();
        dyncon.testTxt();
        break;

      case "<dynCtr>":
        const dynctr = new DynCtr();
        dynctr.checkbox();
        dynctr.swinput();
        break;

      case "<dynLoad1>":
        const dynld1 = new DynLoad();
        dynld1.Start();
        break;

      case "<dynLoad2>":
        const dynld2 = new DynLoad();
        dynld2.Start();
        break;

      case "<entAd>":
        const eAd = new EntAd();
        eAd.chkDscr();
        eAd.clsClick();
        break;

      case "<exitIntent>":
        const eInt = new ExitInt();
        eInt.trigger();
        eInt.checkModal();
        break;

      case "<dwnLoad>":
        const dwnLd = new DwnUpLoad();
        dwnLd.dir(); 
        dwnLd.dwnLoadClick();
        
        break;

      case "<upLoad>":
        const upLd = new DwnUpLoad();
        upLd.upLoadClick();
        upLd.dragDropFile();
            
        // return upLd.rmFile();
          
       
        break;

      case "<floatMenu>":
        const fltLd = new FloatMenu();
        fltLd.scrollDwn();
        fltLd.clickMenu();
        break;

      case "<fgtPsw>":
        const email = new ForgotPass();
        email.inputEmail();
        email.clickSubmit();
        break;

      case "<logIn>":
        const log = new LogIn();
        log.tstWrong();
        log.tstRight();
        log.tstLogOut();
        break;

      case "<nestedFrames>":
        const nst = new NestFrames();
        nst.frameTop();
        nst.frameBottom();
        break;

      case "<iFrame>":
        const inst = new IFrm();
        //uncomment when TinyMCE WYSIWYG Editor will be avaliable
        // inst.typeText("Amazing text!");
        break;

      case "<geoLct>":
        const geo = new GeoLct();
        geo.geoClick();
        break;

      case "<hrzSlider>":
        const hrzs = new HrzSlider();
        hrzs.sldMove();
        hrzs.sldCheck();
        break;

      case "<hovers>":
        const hov = new Hovers();
        hov.moveCheck();
        break;

      case "<infnScroll>":
        const iscrl = new InfScroll();
        iscrl.checkAddedContent();
        break;

      case "<inputs>":
        const inp = new Inputs();
        inp.typeCheck();
        break;

      case "<jqueryUI>":
        const jq = new JQuery();
        jq.click();
        break;

      case "<jsAlerts>":
        const ja = new JSAlerts();
        ja.clickAlert();
        ja.clickConfirm();
        ja.clickPrompt();
        break;

      case "<jsError>":
        const jserr = new JSError();
        jserr.chkError();
        break;

      case "<dwnSec>":
        const dwld = new DwnSec();
        dwld.dwnload();
        break;

      case "<keyPresses>":
        const keyp = new KeyPasses();
        keyp.type();
        keyp.check();
        break;

      case "<lrgDeep>":
        const lrg = new LrgDeep();
        lrg.noSib();
        lrg.sib23();
        lrg.table13();
        break;

      case "<newWin>":
        const neww = new NewWin();
        neww.click();
        neww.testnewwin();
        break;

      case "<notfMsg>":
        const notfm = new NotfMsg();
        notfm.click();
        notfm.testmsg();
        break;

      case "<rdrLink>":
        const rdr = new RdrLink();
        rdr.clickRdr();
        break;

      case "<shdDOM>":
        const sdom = new ShdDOM();
        sdom.chkdom();
        break;

      case "<shfCont>":
        const scon = new ShfCont();
        // scon.clickMenu();
        // scon.checkMenuPosition();
        // scon.clickImage();
        // scon.checkImagePosition();
        scon.clickList();
        scon.checkListContent();
        break;

      case "<slowRes>":
        const sr = new SlowRes();
        sr.slowMsg();
        break;

      case "<dataTab>":
        const dat = new DataTab();
        dat.noID();
        dat.ID();
        break;

      case "<typos>":
        const typ = new Typos();
        typ.check();
        break;

      case "<wys>":
        const wsedt = new Wys();
        wsedt.action();
        break;

      default:
        console.log("There is no page to interact with");
        break;
    }
  });
});
