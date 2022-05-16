const { I } = inject();

module.exports = {

  // insert your locators and methods here

    texts: {
        teamMember: 'div[class=\'cm-content\'] h2',
    },
    buttons: {
        innovateForm: 'Let`s innovate and grow together',
    },

    async getText(text) {
        I.waitForElement(this.texts[text]);
        return I.grabTextFrom(this.texts[text]);
    },

}
