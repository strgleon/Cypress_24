@TestQA
Feature: Herokuapp

    @TestQA1
    Scenario: 1 A/B Test with clear Cookies
        Given I visit "<abTest>" with clear Cookies
        Then I check description "<contAbTest>"

    @TestQA2
    Scenario: 2 A/B Test
        Given I click link "<abTest1>"
        Then I check description "<contAbTest1>"

    @TestQA3
    Scenario: 3 Add/Remove Elements
        Given I open url "<baseUrl>"
        When I click link "<addRemove>"
        Then I check description "<contAddRemove>"
        Then I interacts with the page "<addRemove>"

    @TestQA4
    Scenario: 4 Basic Authorization
        Given I visit "<basicAuth>"
        Then I check the message "<mesgBasicAuth>"

    @TestQA5
    Scenario: 5 Broken Images
        Given I open url "<baseUrl>"
        Then I click link "<brokenImg>"
        Then I check description "<contBrokenImg>"
        Then I interacts with the page "<brokenImg>"

    @TestQA6
    Scenario: 6 Challenging DOM
        Given I open url "<baseUrl>"
        Then I click link "<chlgDOM>"
        Then I check description "<contChlgDOM>"
        Then I interacts with the page "<chlgDOM>"

    @TestQA7
    Scenario: 7 Checkboxes
        Given I open url "<baseUrl>"
        Then I click link "<checkBox>"
        Then I check description "<contCheckBox>"
        Then I interacts with the page "<checkBox>"

    @TestQA8
    Scenario: 8 Context Menu
        Given I visit "<cntxMenu>"
        Then I check description "<contCntxMenu>"
        Then I do right click "<cntxMenu>"

    @TestQA9
    Scenario: 9 Digest Authentication - it is not working
    #     Given I visit "<dgstAuth>"
    #     # Then I check the message "<mesgBasicAuth>"

    @TestQA10
    Scenario: 10 Disappearing Elements
        Given I open url "<baseUrl>"
        Then I click link "<dspEl>"
        Then I check description "<contDspEl>"
        Then I interacts with the page "<dspEl>"

    @TestQA11
    Scenario: 11 Drag and Drop
        Given I open url "<baseUrl>"
        Then I click link "<dragDrop>"
        Then I check description "<contDragDrop>"
        Then I drag and drop "<dragDrop>"

    @TestQA12
    Scenario: 12 Dropdown
        Given I open url "<baseUrl>"
        Then I click link "<dropDown>"
        Then I check description "<contDropDown>"
        Then I interacts with the page "<dropDown>"

    @TestQA13
    Scenario: 13 Dynamic Content
        Given I open url "<baseUrl>"
        Then I click link "<dynCnt>"
        Then I check description "<contDynCnt>"
        Then I interacts with the page "<dynCnt>"

    @TestQA14
    Scenario: 14 Dynamic Controls
        Given I open url "<baseUrl>"
        Then I click link "<dynCtr>"
        Then I check description "<contDynCtr>"
        Then I interacts with the page "<dynCtr>"

    @TestQA15
    Scenario: 15 Dynamic Controls
        Given I open url "<baseUrl>"
        Then I click link "<dynLoad>"
        Then I check description "<contDynLoad>"
        Then I click link "<dynLoad1>"
        Then I interacts with the page "<dynLoad1>"
        Given I open url "<baseUrl>"
        Then I click link "<dynLoad>"
        Then I click link "<dynLoad2>"
        Then I interacts with the page "<dynLoad2>"

    @TestQA16
    Scenario: 16 Entry Ad
        Given I open url "<baseUrl>"
        Then I click link "<entAd>"
        Then I interacts with the page "<entAd>"

    @TestQA17
    Scenario: 17 Exit Intent
        Given I visit "<exitIntent>"
        Then I check description "<contExitInt>"
        Then I interacts with the page "<exitIntent>"

    @TestQA18
    Scenario: 18 Download - uncomment when there is no 500 error
        Given I open url "<baseUrl>"
        Then I click link "<dwnLoad>"
        # Then I check description "<contDwnLoad>"
        # Then I interacts with the page "<dwnLoad>"

    @TestQA19
    Scenario: 19 Upload - how to pass file name from download?
        Given I open url "<baseUrl>"
        Then I click link "<upLoad>"
    #     Then I check description "<contUpLoad>"
    #     Then I interacts with the page "<upLoad>"

    @TestQA20
    Scenario: 20 Floating Menu
        Given I open url "<baseUrl>"
        Then I click link "<floatMenu>"
        Then I check description "<contFloatMenu>"
        Then I interacts with the page "<floatMenu>"

    @TestQA21
    Scenario: 21 Forgot Password
        Given I open url "<baseUrl>"
        Then I click link "<fgtPsw>"
        Then I check description "<contFgtPsw>"
        Then I interacts with the page "<fgtPsw>"

    @TestQA22
    Scenario: 22 Login
        Given I open url "<baseUrl>"
        Then I click link "<logIn>"
        Then I check description "<contLogIn>"
        Then I interacts with the page "<logIn>"

    @TestQA23
    Scenario: 23 Frames - uncomment when TinyMCE WYSIWYG Editor will be avaliable
        Given I open url "<baseUrl>"
        Then I click link "<frames>"
        Then I check description "<contFrames>"
        Then I click link "<nestedFrames>"
        Then I interacts with the page "<nestedFrames>"
        Given I open url "<baseUrl>"
        Then I click link "<frames>"
        Then I click link "<iFrame>"
        Then I interacts with the page "<iFrame>"

    @TestQA24
    Scenario: 24 Geolocation
        Then I visit "<geoLct>"

    @TestQA25
    Scenario: 25 Horizontal Slider
        Given I open url "<baseUrl>"
        Then I click link "<hrzSlider>"
        Then I check description "<contHrzSlider>"
        Then I interacts with the page "<hrzSlider>"

    @TestQA26
    Scenario: 26 Hovers
        Given I open url "<baseUrl>"
        Then I click link "<hovers>"
        Then I check description "<contHovers>"
        Then I interacts with the page "<hovers>"

    @TestQA27
    Scenario: 27 Infinite Scroll
        Given I open url "<baseUrl>"
        Then I click link "<infnScroll>"
        Then I check description "<contInfnScroll>"
        Then I interacts with the page "<infnScroll>"

    @TestQA28
    Scenario: 28 Inputs
        Given I open url "<baseUrl>"
        Then I click link "<inputs>"
        Then I check description "<contInputs>"
        Then I interacts with the page "<inputs>"

    @TestQA29
    Scenario: 29 JQquery UI menu
        Given I open url "<baseUrl>"
        Then I click link "<jqueryUI>"
        Then I check description "<contJqueryUI>"
        Then I interacts with the page "<jqueryUI>"

    @TestQA30
    Scenario: 30 JavaScript Alerts
        Then I visit "<jsAlert>"
        Then I visit "<jsConfirm>"
        Then I visit "<jsPrompt>"

    @TestQA31
    Scenario: 31 JavaScript onload event error
        Then I visit "<jsError>"

    @TestQA32
    Scenario: 32 Key Presses
        Given I open url "<baseUrl>"
        Then I click link "<keyPresses>"
        Then I check description "<contKeyPressess>"
        Then I interacts with the page "<keyPresses>"

    @TestQA33
    Scenario: 33 Large & Deep DOM
        Given I open url "<baseUrl>"
        Then I click link "<lrgDeep>"
        Then I check description "<contLrgDeep>"
        Then I interacts with the page "<lrgDeep>"

    @TestQA34
    Scenario: 34 Multiple Windows
        Given I open url "<baseUrl>"
        Then I click link "<newWin>"
        Then I check description "<contNewWin>"
        Then I interacts with the page "<newWin>"

    @TestQA35
    Scenario: 35 Notification Messages
        Given I open url "<baseUrl>"
        Then I click link "<notfMsg>"
        Then I check description "<contNotfMsg>"
        Then I interacts with the page "<notfMsg>"

    @TestQA36
    Scenario: 36 Redirect Link
        Given I open url "<baseUrl>"
        Then I click link "<rdrLink>"
        Then I check description "<contRdrLink"
        Then I interacts with the page "<rdrLink>"

    @TestQA37
    Scenario: 37 Secure File Download - uncomment when there is no 500 error
        # Then I visit "<dwnSec>"
        # Then I interacts with the page "<dwnSec>"

    @TestQA38
    Scenario: 38 Shadow DOM
        Given I open url "<baseUrl>"
        Then I click link "<shdDOM>"
        Then I check description "<contShdDOM"
        Then I interacts with the page "<shdDOM>"

    @TestQA39
    Scenario: 39 Shifting Content - image shift and menu shift comparisons are not working
        Given I open url "<baseUrl>"
        Then I click link "<shfCont>"
        Then I check description "<contShfCont"
        Then I interacts with the page "<shfCont>"

    @TestQA40
    Scenario: 40 Slow Resources
        Given I open url "<baseUrl>"
        Then I click link "<slowRes>"
        Then I check description "<contSlowRes>"
        Then I interacts with the page "<slowRes>"

    @TestQA41
    Scenario: 41 Sortable Data Tables
        Given I open url "<baseUrl>"
        Then I click link "<dataTab>"
        Then I check description "<contDataTab"
        Then I interacts with the page "<dataTab>"

    @TestQA42
    Scenario: 42 Typos
        Given I open url "<baseUrl>"
        Then I click link "<typos>"
        Then I check description "<contTypos>"
        Then I interacts with the page "<typos>"

    @TestQA43
    Scenario: 43 WYSIWYG Editor
        Given I open url "<baseUrl>"
        Then I click link "<wys>"
        Then I check description "<contWys>"
        Then I interacts with the page "<wys>"

