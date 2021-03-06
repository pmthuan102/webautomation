Feature: Submit Contact US form

  Background:
    Given I am on the homepage
    And I accept cookies
    When I scroll to the "bottom" of the page
    And I click on the "Contact us" button
    Then I could see the following data:
      | Name | Email | Mobile | Subject | Message |

  @regression @basic
  Scenario Outline: Verify that user able to submit contact us form with a list accounts has been defined
    When I submit in the "<Name>","<Email>","<Mobile>","<Subject>","<Message>" fields
    And I wait for the captcha to be bypassed
    And I click on the "Send" button
    Then I could see the "The e-mail address entered is invalid." text

    Examples:
      | Name    | Email             | Mobile     | Subject | Message                |
      | John    | test@ab           | 9876543210 | Hello   | Hello all, I'm John    |
      | Mary    | 11133             | 9876543210 | Hello   | Hello all, I'm Mary    |
      | Thiago  | test@   gmail.com | 9876543210 | Hello   | Hello all, I'm Thiago  |
      | Alex    | ...@..            | 9876543210 | Hello   | Hello all, I'm Alex    |
      | Maxwell |                   | 9876543210 | Hello   | Hello all, I'm Maxwell |



# Additional test cases to simulate another way of filling the form by using random UserData
# This scenario should be run with the random valid account:
  @regression
  Scenario: Verify that user able to submit Contact US form with Random valid format account
    Then I submit the Contact US form with random "valid" data
    And I wait for the captcha to be bypassed
    And I click on the "Send" button

# This scenario should be run with the random invalid account:
  @regression
  Scenario: Verify that user able to submit contact us form with Random invalid format account
    Then I submit the Contact US form with random "invalid" data
    And I wait for the captcha to be bypassed
    And I click on the "Send" button
    Then I see the error message "The e-mail address entered is invalid."
