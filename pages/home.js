const { I } = inject();

module.exports = {

    // insert your locators and methods of Homepage here
    text: {
        company: 'Company',
        career: 'Careers',

    },

    fields: {
        name: '[id="cf-1"]',
        email: '[id="cf-2"]',
        mobile: '[id="cf-3"]',
        subject: '[id="cf-4"]',
        message: '[id="cf-5"]',

        nameError: '#name-error',
        emailError: '#email-error',
        messageError: '#message-error',
        successMessage: '#success-message',
        errorMessage: '#error-message',
    },


    async submitContactUSForm(name, email, mobile, subject, message) {
        I.fillField(this.fields.name, name);
        I.fillField(this.fields.email, email);
        I.fillField(this.fields.mobile, mobile);
        I.fillField(this.fields.subject, subject);
        I.fillField(this.fields.message, message);
        I.wait(4);
    },


}
