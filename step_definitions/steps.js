const {I, homePage, careerPage, companyPage, Webcommon, Fragment} = inject();
const {faker} = require('@faker-js/faker');
const {assert} = require('assert');

// Add in your custom step files

Given('I am on the homepage', () => {
    I.amOnPage('/');
});

When('I am on the {string} page', (page) => {
    I.amOnPage('/' + page);
})

When('I am on the Homepage', () => {
    I.amOnPage('/');
});

And('I accept cookies', async () => {
    await Fragment.acceptCookies()
    I.wait(2); //To make sure cookie has accepted and the page has loaded
});

Then('I see the error message {string}', async(expectedString) => {
    let actualString = await I.getTextFromElement(Fragment.texts.errorMessage);
    console.log(actualString);
    if (actualString === expectedString) {
        console.log('The expected string is present in the actual string');
    } else {
        return false;
    }
});

Then('I could see the {string} text', (text) => {
    I.see(text);
});


Then('I should be on the {string} page', (url) => {
    I.amOnPage('/' + url);
});

Then('I see the error message {string} popup from {string} should be {string}', async (message, location, expected) => {
    await I.getTextFromElement(location.text[message]).then(r => {
        assert.equal(r, expected, 'The error message is not as expected');
    });
});


Then('I could see the following data:', (table) => {
    for (const id in table.rows) {
        if (id < 1) {
            continue;
        }
        const row = table.rows[id];
        const field = row[0];
        I.see(field);
        I.say('I saw ' + field + ' on the webpage');
    }
});


And('I scroll to the {string} of the page', (position) => {
    if (position === 'bottom') {
        I.scrollPageToBottom()
        I.wait(2)
    } else if (position === 'top') {
        I.scrollPageToTop()
        I.wait(2)
    }
});


And('I wait for {int} seconds', (seconds) => {
    I.wait(seconds);
});

Then('I should see the {string} message', (string) => {
    I.see(string);
});



When('I click on the {string} link', (link) => {
    I.click(link);
});

When('I click on the {string} button', async (button) => {
    await Fragment.clickButton(button);
});

And('I click on the {string} button', (button) => {
    I.click(button);
});


When('I fill in the {string} field with {string}', (field, value) => {
    I.fillField(field, value);
});

When('I fill in the {string} field with {string} and press enter', (field, value) => {
    I.fillField(field, value);
    I.pressKey('Enter');
});

When('I fill in the {string} field with {string} and press tab', (field, value) => {
    I.fillField(field, value);
    I.pressKey('Tab');
});


When('I fill in the {string} field with {string} and press enter and wait for {int} seconds', (field, value, seconds) => {
    I.fillField(field, value);
    I.pressKey('Enter');
    I.wait(seconds);
});

And('I fill in the {string} field with {string} and press tab and wait for {int} seconds', (field, value, seconds) => {
    I.fillField(field, value);
    I.pressKey('Tab');
    I.wait(seconds);
});

Given('I am at the page {string}', (url) => {
    I.amOnPage('/' + url);
});


Then('I should be on page {string}', async (url) => {
    I.wait(4);
    const actualURL = await I.grabCurrentUrl()
    if (actualURL === url) {
        console.log('URL is correct ' + actualURL)
    } else {
        console.log('URL is incorrect ' + actualURL)
        return false
    }

});

And('I switch to the {string} browser tab', (tab) => {
    if (tab === 'new' || tab === 'next') {
        I.switchToNextTab();
    } else if (tab === 'previous') {
        I.switchToPreviousTab();
    }
});

When('I fill in the {string} field with {string}', (field, value) => {
    I.fillField(field, value);
});

When('I press the {string} button', (button) => {
    I.click(button);
});

Then('I should see the {string} page', (page) => {
    I.see(page);
});

Then(/^I fill in the (.*) field with (.*)$/, async (field, messsage) => {
    await homePage.inputField(field, messsage);
});

When('I scroll until I see {string} section', async (position) => {
    I.wait(4)
    I.scrollTo(position);

});

And('I click on the {string} icon', async (icon) => {
    await Fragment.clickButton(icon);
});

Then('I checking Leadership section should contain {string}', async (expectedString) => {
    let actualString = await companyPage.getText('teamMember');
    if (actualString === expectedString) {
        console.log('The expected string is present in the actual string');
    } else {
        return false;
    }
});


Then('I could see the {string} section at the {string} screen should be {string}', async (inName, pageScreen, expected) => {
    let actual = await I.getobjectfromPage(pageScreen.texts[inName]);
    assert.equal(actual, expected, `${inName} is not ${expected}`);
});

Then(/^I submit in the (.*),(.*),(.*),(.*),(.*) fields$/, async (name, email, mobile, subject, message) => {
    await homePage.submitContactUSForm(name, email, mobile, subject, message);
});

Then(/^I submit in the (.*), (.*), (.*), (.*), (.*) fields and upload CV with (.*)$/, async (name, email, mobile, linkedinProfile, message, file) => {
    await careerPage.fillForm(name, email, mobile, linkedinProfile, message, file);
});

Then('I submit the Contact US form with random {string} data', async (emailValid) => {
    let userData;
    if (emailValid === 'valid') {
        userData = I.randomUserData(true);
    } else if (emailValid === 'invalid' || !emailValid) {
        userData = I.randomUserData(false);
    }
    await homePage.submitContactUSForm(userData.name, userData.email, userData.mobile, userData.subject, userData.message);
});

And('I filter the Location from {string} to {string} in the list', (before, after) => {
    I.selectOption(before, after);
});


// Here's the function to bypass captcha but seems it requires some functionality to be implemented
// In general, We not usually include the captcha in the testing environment but I still leave it here
And('I bypass the captcha', async () => {
    I.switchTo('[title="reCAPTCHA"]');
    I.bypassCaptcha()
});

// For current situation, I put the waiting with timeout = 60s and we could manually bypass the captcha if needed
And('I wait for the captcha to be bypassed', async () => {
    console.log('Waiting for the captcha to be bypassed...')
    I.wait(15);
});
Then(/^I submit the Contact US form with random invalid data$/, function () {

});