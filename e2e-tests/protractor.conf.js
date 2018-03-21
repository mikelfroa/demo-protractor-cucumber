//jshint strict: false
exports.config = {

    allScriptsTimeout: 11000,

    capabilities: {
        'browserName': 'chrome'
    },

    baseUrl: 'http://localhost:8000/',

    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    specs: [
        'features/*.feature'
    ],

    // cucumber command line options
    cucumberOpts: {
        strict: true,
        require: [
            'step_definitions/*.js'
        ],  // require step definition files before executing features
        format: [
            'pretty'
            // 'json:./reports/cucumber_report.json'
        ]
    },

    onPrepare: function() {
        // Override the timeout for webdriver.
        browser.manage().timeouts().setScriptTimeout(60000);
    }

};
