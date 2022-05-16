exports.config = {
    output: './output',
    helpers: {
        Puppeteer: {
            url: 'https://www.musala.com',
            show: true,
            defaultViewport: {'width': 1920, 'height': 1080},
            args: ['--start-maximized'],
        },
        Webcommon: {
            require: './webcommon_helper.js',
        },
    },
    multiple: {
        basic: {
            browsers: ['chrome', 'firefox']
        },
        smoke: {
            parallel: {
                chunks: 2,
            },
            browsers: ['chrome'],
        }
    },
    include: {
        I: './steps_file.js',
        common: './webcommon_helper.js',
        homePage: './pages/home.js',
        companyPage: './pages/company.js',
        careerPage: './pages/career.js',
        Fragment: './fragments/fragment.js',
    },
    mocha: {},
    bootstrap: null,
    timeout: null,
    teardown: null,
    hooks: [],
    gherkin: {
        features: './features/*.feature',
        steps: ['./step_definitions/steps.js']
    },
    plugins: {
        screenshotOnFail: {
            enabled: true
        }
    },
    stepTimeout: 0,
    stepTimeoutOverride: [{
        pattern: 'wait.*',
        timeout: 0
    },
        {
            pattern: 'amOnPage',
            timeout: 0
        }
    ],
    tests: './*_test.js',
    name: 'musalaSoft'
}