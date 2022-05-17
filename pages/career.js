const {I} = inject();

module.exports = {

    // insert your locators and methods here
    fields: {
        name: '[id="cf-1"]',
        email: '[id="cf-2"]',
        mobile: '[id="cf-3"]',
        linkedinProfile: '[id="cf-5"]',
        message: '[id="cf-6"]',
        CVUpload: '[id="uploadtextfield"]'
    },
    checkbox: {
        termOfUsage: '[id=\'adConsentChx\']]',
    },
    text: {
        popupMessage: '//div[@class=\'wpcf7-response-output\']',
        positionLink: 'div.card-container a',
        positionName: 'h2.card-jobsHot__title'
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
            await I.fillField(this.fields.CVUpload, './testData/career.pdf');
        } else {
            await I.fillField(this.fields.CVUpload, path);
        }
    },

    async getAllJobLinks() {
        return await I.grabAttributeFromAll(this.text.positionLink, 'href');
    },

    async getAllJobName() {
        return await I.grabAttributeFromAll(this.text.positionName, 'data-alt');
    },


    async getAllJobInfo() {
        let jobInfo = [];
        let jobLinks = await this.getAllJobLinks();
        let jobNames = await this.getAllJobName();
        if(jobLinks.length === jobNames.length){
            for (let i = 0; i < jobLinks.length; i++) {
                jobInfo.push({
                    position: jobNames[i],
                    link: jobLinks[i]
                });
            }
        } else {
            console.log('Error: job links or job names are missing');
        }
        return jobInfo;
    },


}