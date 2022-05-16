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
    And I wait for 5 seconds
    Then I could see the following data:
      | General description | Requirements | Responsibilities | What we offer |
    And I click on the "Apply" button
    Then I submit in the "<Name>", "<Email>", "<Mobile>", "<Linkedin>", "<Message>" fields and upload CV with "<File>"
    Then I see the error message "popupMessage" popup from "careerPage" should be "One or more fields have an error. Please check and try again."


    Examples:
      | Name    | Email               | Mobile     | Linkedin | Message                | File                                                                 |
      | Mary    | "Mary222@yahoo.com" | 9876543210 |          | "Hello all, I'm Mary"  | "C:\Users\Thiago\Downloads\Documents\FinancialAccountingAnalysi.pdf" |
      | John    | "test@ab"           | 9876543210 | Hello    | Hello all, I'm John    |                                                                      |
      | Mary    | "11133"             | 9876543210 | Hello    | Hello all, I'm Mary    |                                                                      |
      | Thia-go | "test@   gmail.com" | 9876543210 | Hello    | Hello all, I'm Thiago  |                                                                      |
      | Alex    | "...@..           " | 9876543210 | Hello    | Hello all, I'm Alex    |                                                                      |
      | Maxwell | "Maxwell@gmail.com" | 9876543210 | Hello    | Hello all, I'm Maxwell |                                                                      |
