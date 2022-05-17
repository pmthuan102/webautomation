Feature: Filter job and apply CV

  Background:
    Given I am on the homepage
    And I accept cookies

  @basic
  Scenario Outline: Verify that user could filter job by location and apply the CV properly
    When I am on the "careers" page
    And I click on the "Check our open positions" button
    Then I should be on the "careers/join-us" page
    And I filter the Location from "get_location" to "Anywhere" in the list
    And I wait for 5 seconds
    And I click on the "Automation QA Engineer" button
    Then I could see the following data:
      | General description | Requirements | Responsibilities | What we offer |
    And I click on the "Apply" button
    And I submit in the '<Name>','<Email>','<Mobile>','<Linkedin>','<Message>','<File>' in Apply Form
    And I select checkbox
    And I wait for the captcha to be bypassed
    And I click on the "Send" button
    Then I see the error message '<Error Message>'

    Examples:
      | Name    | Email               | Mobile           | Linkedin                 | Message | File                | Error Message                          |
      |         | "Mary222@yahoo.com" | 9876543210       | http://linkedin.com/mary |         | testData/career.pdf | The field is required.                 |
      | John    | "test@ab"           | 9876543210       | http://linkedin.com/John |         |                     | The e-mail address entered is invalid. |
      | Mary    | "Mary222@yahoo.com" | 9876543210 x3000 |                          |         |                     |                                        |
      | Thia-go |                     | 9876543210       |                          |         |                     | The field is required.                 |
      | Alex    | "...@..           " | 9876543210       |                          |         |                     | The e-mail address entered is invalid. |
      | Maxwell | "Maxwell@gmail.com" |                  |                          |         |                     |                                        |
