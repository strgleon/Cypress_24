@Test_QA
Feature: HomeDepot

    @Test_QA_1
    Scenario: Add/Remove Elements
        Given I open url "<baseUrl>"
        Then I click link "<addRemove>"
        Then I check description "<contAddRemove>"
        Then I interacts with the page "<addRemove>"


    # @Test_QA_2
    # Scenario: Basic Authorization
    #     Given I open url "<baseUrl>"
    #     Then I click link "<basicAuth>"
    #     Then I interacts with the "<basicAuth>"

    @Test_QA_3
    Scenario: Broken Images
        Given I open url "<baseUrl>"
        Then I click link "<brokenImg>"
        Then I check description "<contBrokenImg>"
        Then I interacts with the page "<brokenImg>"

    @Test_QA_4
    Scenario: Challenging DOM
        Given I open url "<baseUrl>"
        Then I click link "<chlgDOM>"
        Then I check description "<contChlgDOM>"
        Then I interacts with the page "<chlgDOM>"

    @Test_QA_5
    Scenario: Checkboxes
        Given I open url "<baseUrl>"
        Then I click link "<checkBox>"
        Then I check description "<contCheckBox>"
        Then I interacts with the page "<checkBox>"

    @Test_QA_6
    Scenario: Context Menu
        Given I open url "<baseUrl>"
        Then I click link "<cntxMenu>"
        Then I check description "<contCntxMenu>"
        Then I interacts with the page "<cntxMenu>"
        # right click popup to appear


    # @Test_QA_7
    # Scenario: Digest Authentication
    #     Given I open url "<baseUrl>"
    #     Then I click link "<dgstAuth>"
    #     # type into popup window
    
     @Test_QA_8
    Scenario: Disappearing Elements
        Given I open url "<baseUrl>"
        Then I click link "<dspEl>"
        Then I check description "<contDspEl>"
        Then I interacts with the page "<dspEl>"