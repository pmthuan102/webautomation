const {I} = inject();

module.exports = {

    // insert your locators
    buttons: {
        contactUS: 'Contact us',
        joinUS: 'Join us',
        facebook: '//span[@class=\'musala musala-icon-facebook\']',
        cookies: '[id="wt-cli-accept-all-btn"]',
        company: '[href="https://www.musala.com/company/"]'
    },

    texts: {
        errorMessage: '//span[@class=\'wpcf7-not-valid-tip\']',
    },

    // Specific method that use the locators from this page
    async waitForPageLoad(time = 30) {
        await I.waitForVisible('div#navbar', time);
    },


    async acceptCookies() {
        if (I.seeElement(this.buttons.cookies)) {
            I.click(this.buttons.cookies);
        } else {
            await I.say('Cookies already accepted');
        }
    },

    async clickButton(button) {
        I.click(this.buttons[button]);
    },

}
