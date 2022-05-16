const {I} = inject();

module.exports = {

    // insert your locators and methods here
    fields: {
        name: '[id="cf-1"]',
        email: '[id="cf-2"]',
        mobile: '[id="cf-3"]',
        CVUpload: '[id="uploadtextfield"]',
        linkedinProfile: '[id="cf-5"]',
        message: '[id="cf-6"]',
    },
    checkbox: {
        termOfUsage: '[id=\'adConsentChx\']]',
    },
    text: {
        popupMessage: '//div[@class=\'wpcf7-response-output\']',
    },

    async checktheCheckBox() {
        await I.checkOption(this.checkbox.termOfUsage);
    },

    async fillForm(name, email, mobile, linkedinProfile, message, path) {
        let info = [name, email, mobile, linkedinProfile, message];
        for (let i = 0; i < info.length; i++) {
            I.wait(1);
            await I.fillField(this.fields[Object.keys(this.fields)[i]], info[i]);
        }
        if (!path) {
            await I.attachFile(this.fields.CVUpload, './testData/career.pdf');
        } else {
            await I.attachFile(this.fields.CVUpload, path);
        }
    },

}