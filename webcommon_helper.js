const Helper = require('@codeceptjs/helper');
const {faker} = require("@faker-js/faker");
// puppeteer-extra is a drop-in replacement for puppeteer,
// it augments the installed puppeteer with plugin functionality
const puppeteer = require('puppeteer-extra')

// add recaptcha plugin and provide it your 2captcha token
// 2captcha is the builtin solution provider but others work as well.
const RecaptchaPlugin = require('puppeteer-extra-plugin-recaptcha')
puppeteer.use(
    RecaptchaPlugin({
        provider: {id: '2captcha', token: '03AGdBq24BwcsI5JYFUx0VXJfXqU-HW-suaVwajY66KFb1kd4NVBI_n16ydokA31SuLmu7rbNywuNjG_gWrJ47g1O90fohe1GYvsmqOwFL8OrOz0GYLJE45szNTN0Z05BrRT9RtiXKRTnntfQYr8vB9SVJrhUPcjn2azMVfCD72QEV-gFORMdceTyVFPstbaQH7ebRmTW2hGCGdCOax7FACJcK80r2xRU20In-7-IFdhjJhvzaAiWMy8O-yHH9Ta00upj6_XJ4TklXRu8tuolsuyX9orOqaiogQGe80Ehj2DrBWA7HlurG5Uji8Gy01MXeLEIFSHGnOHLha9dAmOIa0hpqZ2HlVcZdCXHn10TviDkUZy1uHumtJqlQJzjO-fg6_23mYO8Y4-hgvBLuWMS27o5ZfxfnTkz-7hY2KcUnyMIk_CnwPoH4W58G0wmzkyItuqfJMLpi5v6HZH-k6QvJ3rmQslz3fP0gct-r765E9Qhf-G8WTOlLu0s2-Ic4PKf_3u07A2cepKomhsuqL_EU60rShnPJRxiKESaQQ-fj9Qd6Ok1dUw9khcHstCsLJujRkA61jGXH6MPrs1s_OQIIk-cvMYWhrKzPjrXrRUQ-NgRYkH4mXThMyOO_9502bMiPzUSQYmh882Og3-6e-zqAxOMir0G2F190N8ZJp-XLrRhPV1zIDrVIivlPUv37rSkBlvyrH7Q8p2wtOW-dllB_7euNuV6rQ6FXqk-4N-VtnoIf6QxjSMIDpHkrv61kMDY84Pk5HXb3xWRWieQd5i-knUpx4sM5lZ2rWVe9WB886gItShKpDp4iwbe62ay_wksfwyO5KKUbM1klASFo6wxNQdfZ0GU7-0kqD4XOop6F6zu-vUb6F_g8B3kVtgu-u1T8wKzU07H3czOwKXyHhemE1WB1VCOpqXbtitGsbLia300y8qzoM0uL1wPdE4088cD0ER0CQEAcTSDoqWI5N-sUUeUx-wxp0QuOXWUiMGn1T0U88LmkcZ1XmXokcxuXTcJonF-PWKjWXcyAj3RDyydUw0FL8UwB91tZ5QzPN7jZsQZ_xdYzPRO8p7qOuG-7hyfCp59KfzCd5JB-dWjRuL1e5D_D86TnzfkkdKOjAeKMQ65pjh40bep4-m2phdt4sSOdxTx5P_6mWdie8lH3j3l3TPWe-IKkmoPfUN411psTSNhc8ZAMGfnltOn8rpMOK79KbXn7TZs1RcMRZa7BsC6_F6n9n4RYZFVNTLWcS-PAYEQQdINpfDby9R0'},
        visualFeedback: true // colorize reCAPTCHAs (violet = detected, green = solved)
    })
)

class Webcommon extends Helper {

    async bypassCaptcha() {
        const page = this.helpers['Puppeteer'].page;
        await page.solveRecaptchas();
        await Promise.all([
            page.waitForNavigation(),
            page.click('#recaptcha-anchor'),
            page.waitFor('.recaptcha-checkbox-checkmark')
        ]);
    }



// before/after hooks
/**
 * @protected
 */
_before()
{
    // remove if not used
}

/**
 * @protected
 */
_after()
{
    // remove if not used
}

// add custom methods here
// If you need to access other helpers
// use: this.helpers['helperName']

}

module.exports = Webcommon;
