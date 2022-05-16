# Automation Framework by CodeceptJS

This project is building the UI automation framework based that using CodeceptJS and other libraries to simplify the
test suite.

# What containing in this automation framework?

- Support running multiple browsers and supporting parallel execution base on annotation settings.
- Support BDD by using feature file to define the test suite/test cases and test data in gherkin format.
- Support auto generating test data by using Faker library
- Ability to capture pictures while failed any steps from test case.
- Using Page object model format to define the object of web page.
- Support generate report with Allure command-line

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
- Define page object model:
```js
 include: {
        I: './steps_file.js',
        common: './webcommon_helper.js',
        homePage: './pages/home.js',
        companyPage: './pages/company.js',
        careerPage: './pages/career.js',
        Fragment: './fragments/fragment.js',
    },
```
### Page object model: 
[<img src="https://blog.testproject.io/wp-content/uploads/2020/12/Test-Automation-Framework-Benefits.jpg" width="800"/>](POM.png)




# How to define the test suite?
- We define the test suites and test scenario in the feature file in [BDD](https://en.wikipedia.org/wiki/Behavior-driven_development) with [Gherkin syntax](https://cucumber.io/docs/gherkin/).
- Step definition is defined the test steps that using in the test scenario.

### Behavior driven development testing overview:
[<img src="https://wpblog.semaphoreci.com/wp-content/uploads/tutorial-images/bdd-cycle-rails.png" width="800"/>](BDD.png)

# How to use this automation framework?
- Run the test suite by using the command line.

# Trigger test suite and generate report:
- Very simple, just run the command line to trigger all test suites:
```bash 
 npm run codeceptjs:features
```
- When finished all test suites, you can generate the report by using the command line:
```bash 
 npm run codeceptjs:report
```


## References:
- [CodeceptJS](https://codecept.io/), [Gherkin](https://cucumber.io/),[BDD](https://en.wikipedia.org/wiki/Behavior-driven_development)