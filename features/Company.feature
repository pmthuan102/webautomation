Feature: Company and Facebook profile

  Background:
    Given I am on the homepage
    And I accept cookies

  @basic
  Scenario: Verify the Company and Facebook profile is displayed as expected
    When I click on the "company" link
    Then I should be on the "Company" page
    And I scroll to the "bottom" of the page
    Then I checking Leadership section should contain "Leadership"
    And I click on the "facebook" icon
    And I wait for 10 seconds
    And I switch to the "new" browser tab
    Then I should be on page "https://www.facebook.com/MusalaSoft?fref=ts"
    Then I could see the "Musala Soft" text
    And I switch to the "previous" browser tab
    Then I should be on the "Company" page