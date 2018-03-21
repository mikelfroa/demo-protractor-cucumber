#features/cucumber1.feature
Feature: Search protractor in google
    As a user of Protractor
    I should be able to use Cucumber
    In order to run my E2E tests

    Scenario: Google cucumber search
        Given I go to "https://www.google.es"
        When I input the text "protractor"
        And I google it
        Then I should see some results