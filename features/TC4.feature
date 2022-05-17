Feature: List out Available position based on location

  Background:
    Given I am on the homepage
    And I accept cookies

  @basic
  Scenario Outline: Verify all of available position based on location
    When I am on the "careers" page
    And I click on the "Check our open positions" button
    Then I should be on the "careers/join-us" page
    And I filter the Location from "get_location" to "<location>" in the list
    And I wait for 5 seconds
    And I print out the list of Job name and Job link from "<location>"

    Examples:
      | location |
      | Sofia    |
      | Skopje   |