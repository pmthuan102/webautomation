# Automation Framework by CodeceptJS

This project is building the UI automation framework based that using CodeceptJS and other libraries to simplify the
test suite.

# What containing in this automation framework?

- Support running multiple browsers and supporting parallel execution base on annotation settings.
- Support BDD by using feature file to define the test suite/test cases and test data in gherkin format.
- Support auto generating test data by using Faker library
- Ability to capture pictures while failed any steps from test case.
- Using Page object model format to define the object of web page.

# Prerequisites:

- Installed Node.js and npm (Node Package Manager)
- Installed CodeceptJS and necessary libraries (faker, chai)
- The target web browsers should be installed and configured in the system.

# How to config the framework?
From the codecept.conf.js file, we have serveral options to adjust our test framework following below:
- Multiple browsers and parrallel execution settings:
```js
multiple: {
  basic: { // To define annotation, that trigger this run
    browsers: ['chrome', 'firefox'] //To define target browsers will be run with this annotation
  },
  smoke: {
    parallel: {
      browsers: ['chrome'],
              chunk: 2 //Triggering parallel test: [number] is how many test scenario are running in the same time.
    },
  }
},
```
- Include the page object model

# How to define the test suite?
- Define the test suite in feature file.


# How to use this automation framework?
- Run the test suite by using the command line.

