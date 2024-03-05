@TestQA
Feature: Herokuapp

    @TestQA1
    Scenario: Add/Remove Elements
        Given I open url "<baseUrl>"
        Then I click link "<addRemove>"
        Then I check description "<contAddRemove>"
        Then I interacts with the page "<addRemove>"

    
    # # @TestQA2
    # # Scenario: Basic Authorization -it is not working - browser popup window
    # #     Given I open url "<baseUrl>"
    # #     Then I click link "<basicAuth>"
    # #     Then I interacts with the "<basicAuth>"

    @TestQA3
    Scenario: Broken Images
        Given I open url "<baseUrl>"
        Then I click link "<brokenImg>"
        Then I check description "<contBrokenImg>"
        Then I interacts with the page "<brokenImg>"

    @TestQA4
    Scenario: Challenging DOM
        Given I open url "<baseUrl>"
        Then I click link "<chlgDOM>"
        Then I check description "<contChlgDOM>"
        Then I interacts with the page "<chlgDOM>"

    @TestQA5
    Scenario: Checkboxes
        Given I open url "<baseUrl>"
        Then I click link "<checkBox>"
        Then I check description "<contCheckBox>"
        Then I interacts with the page "<checkBox>"

    # @TestQA6
    # Scenario: Context Menu -it is not working- right click popup to appear
    #     Given I open url "<baseUrl>"
    #     Then I click link "<cntxMenu>"
    #     Then I check description "<contCntxMenu>"
    #     Then I interacts with the page "<cntxMenu>"
    # 


    # # @TestQA7
    # # Scenario: Digest Authentication -it is not working -type into popup window
    # #     Given I open url "<baseUrl>"
    # #     Then I click link "<dgstAuth>"
     

    @TestQA8
    Scenario: Disappearing Elements
        Given I open url "<baseUrl>"
        Then I click link "<dspEl>"
        Then I check description "<contDspEl>"
        Then I interacts with the page "<dspEl>"

    # @TestQA9
    # Scenario: Drag and Drop -it is not working -drag and drop
    #     Given I open url "<baseUrl>"
    #     Then I click link "<dragDrop>"
    #     Then I check description "<contDragDrop>"
    # # Then I interacts with the page "<dragDrop>"
    

    @TestQA10
    Scenario: Dropdown
        Given I open url "<baseUrl>"
        Then I click link "<dropDown>"
        Then I check description "<contDropDown>"
        Then I interacts with the page "<dropDown>"


    @TestQA11
    Scenario: Dynamic Content
        Given I open url "<baseUrl>"
        Then I click link "<dynCnt>"
        Then I check description "<contDynCnt>"
        Then I interacts with the page "<dynCnt>"

    @TestQA12
    Scenario: Dynamic Controls
        Given I open url "<baseUrl>"
        Then I click link "<dynCtr>"
        Then I check description "<contDynCtr>"
        Then I interacts with the page "<dynCtr>"


    @TestQA13
    Scenario: Dynamic Controls
        Given I open url "<baseUrl>"
        Then I click link "<dynLoad>"
        Then I check description "<contDynLoad>"
        Then I click link "<dynLoad1>"
        Then I interacts with the page "<dynLoad1>"
        Given I open url "<baseUrl>"
        Then I click link "<dynLoad>"
        Then I click link "<dynLoad2>"
        Then I interacts with the page "<dynLoad2>"

    @TestQA14
    Scenario: Entry Ad
        Given I open url "<baseUrl>"
        Then I click link "<entAd>"
        Then I interacts with the page "<entAd>"

    # @TestQA15
    # Scenario: Exit Intent-it is not working: Mouse out of the viewport pane and see a modal window appear.
    #     Given I open url "<baseUrl>"
    #     Then I click link "<exitInt>"
    #     Then I check description "<contExitInt>"
    # # Then I interacts with the page "<exitInt>"
    

    @TestQA16
    Scenario: Download -to check actual download
        Given I open url "<baseUrl>"
        Then I click link "<dwnLoad>"
        Then I check description "<contDwnLoad>"
        Then I interacts with the page "<dwnLoad>"
    

    # @TestQA17 cannot interact with popup
    # Scenario: Upload
    #     Given I open url "<baseUrl>"
    #     Then I click link "<upLoad>"
    #     Then I check description "<contUpLoad>"
    #     Then I interacts with the page "<upLoad>"
    #     

    @TestQA18
    Scenario: Floating Menu
         Given I open url "<baseUrl>"
         Then I click link "<floatMenu>"
         Then I check description "<contFloatMenu>"
         Then I interacts with the page "<floatMenu>"

    @TestQA19
    Scenario: Forgot Password
        Given I open url "<baseUrl>"
        Then I click link "<fgtPsw>"
        Then I check description "<contFgtPsw>"
        Then I interacts with the page "<fgtPsw>"

    @TestQA20
    Scenario: Login
        Given I open url "<baseUrl>"
        Then I click link "<logIn>"
        Then I check description "<contLogIn>"
        Then I interacts with the page "<logIn>"

    @TestQA21
    Scenario: Frames
        Given I open url "<baseUrl>"
        Then I click link "<frames>"
        Then I check description "<contFrames>"
        Then I click link "<nestedFrames>"
        Then I interacts with the page "<nestedFrames>"
        Given I open url "<baseUrl>"
        Then I click link "<frames>"
        Then I click link "<iFrame>"
        Then I interacts with the page "<iFrame>"

    # @TestQA22
    # Scenario: Geolocation -it is not working: There is no popup window for geolocation
    #     Given I open url "<baseUrl>"
    #     Then I click link "<geoLct>"
    #     Then I check description "<contGeoLct>"
    #     Then I interacts with the page "<geoLct>"
    #      

    @TestQA23
    Scenario: Horizontal Slider
        Given I open url "<baseUrl>"
        Then I click link "<hrzSlider>"
        Then I check description "<contHrzSlider>"
        Then I interacts with the page "<hrzSlider>"

    @TestQA24
    Scenario: Hovers
        Given I open url "<baseUrl>"
        Then I click link "<hovers>"
        Then I check description "<contHovers>"
        Then I interacts with the page "<hovers>"

    @TestQA25
    Scenario: Hovers
        Given I open url "<baseUrl>"
        Then I click link "<infnScroll>"
        Then I check description "<contInfnScroll>"
        Then I interacts with the page "<infnScroll>"

    @TestQA26
    Scenario: Inputs
        Given I open url "<baseUrl>"
        Then I click link "<inputs>"
        Then I check description "<contInputs>"
        Then I interacts with the page "<inputs>"

    @TestQA27
    Scenario: JQquery UI menu
        Given I open url "<baseUrl>"
        Then I click link "<jqueryUI>"
        Then I check description "<contJqueryUI>"
        Then I interacts with the page "<jqueryUI>"

    # @TestQA28 - Popup prompt typing is not working
    # Scenario: JavaScript Alerts
    #     Given I open url "<baseUrl>"
    #     Then I click link "<jsAlerts>"
    #     Then I check description "<contJsAlerts>"
    #     Then I interacts with the page "<jsAlerts>"
    #     

    # @TestQA29 
    # Scenario: JavaScript onload event error -I can't catch the error after the click, I can do it only after cy.visit
    #     Given I open url "<baseUrl>"
    #     Then I click link "<jsError>"
    #     Then I interacts with the page "<jsError>"

    @TestQA30
    Scenario: Key Presses
        Given I open url "<baseUrl>"
        Then I click link "<keyPresses>"
        Then I check description "<contKeyPressess>"
        Then I interacts with the page "<keyPresses>"

    @TestQA31
    Scenario: Large & Deep DOM
        Given I open url "<baseUrl>"
        Then I click link "<lrgDeep>"
        Then I check description "<contLrgDeep>"
        Then I interacts with the page "<lrgDeep>"

    @TestQA32
    Scenario: Multiple Windows
        Given I open url "<baseUrl>"
        Then I click link "<newWin>"
        Then I check description "<contNewWin>"
        Then I interacts with the page "<newWin>"

    @TestQA33
    Scenario: Notification Messages
        Given I open url "<baseUrl>"
        Then I click link "<notfMsg>"
        Then I check description "<contNotfMsg>"
        Then I interacts with the page "<notfMsg>"

    @TestQA34
    Scenario: Redirect Link
        Given I open url "<baseUrl>"
        Then I click link "<rdrLink>"
        Then I check description "<contRdrLink"
        Then I interacts with the page "<rdrLink>"

    # @TestQA36 I can't type in popup
    # Scenario: Secure File Download
    #     Given I open url "<baseUrl>"
    #     Then I click link "<dwnSec>"
    #     Then I interacts with the page "<dwnSec>"

    @TestQA37
    Scenario: Shadow DOM
        Given I open url "<baseUrl>"
        Then I click link "<shdDOM>"
        Then I check description "<contShdDOM"
        Then I interacts with the page "<shdDOM>"

    # @TestQA38 
    # Scenario: Shifting Content -image shift and menu shift comparisons are not working
    #     Given I open url "<baseUrl>"
    #     Then I click link "<shfCont>"
    #     Then I check description "<contShfCont"
    #     Then I interacts with the page "<shfCont>"

    @TestQA39
    Scenario: Slow Resources
        Given I open url "<baseUrl>"
        Then I click link "<slowRes>"
        Then I check description "<contSlowRes>"
        Then I interacts with the page "<slowRes>"

    @TestQA40
    Scenario: Sortable Data Tables
        Given I open url "<baseUrl>"
        Then I click link "<dataTab>"
        Then I check description "<contDataTab"
        Then I interacts with the page "<dataTab>"

    @TestQA41
    Scenario: Typos
        Given I open url "<baseUrl>"
        Then I click link "<typos>"
        Then I check description "<contTypos>"
        Then I interacts with the page "<typos>"

    # @TestQA42
    # Scenario: WYSIWYG Editor -I can't access iFrame
    #     Given I open url "<baseUrl>"
    #     Then I click link "<wys>"
    #     Then I check description "<contWys>"
    #     Then I interacts with the page "<wys>"

