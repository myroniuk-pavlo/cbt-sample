require('dotenv').config();

exports.config = {
    runner: 'local',

    hostname: 'hub.crossbrowsertesting.com',
    port: 80,
    path: '/wd/hub',

    services: ['crossbrowsertesting'],
    user: process.env.CBT_USERNAME,
    key: process.env.CBT_AUTHKEY,
    cbtTunnel: false, //set to true if a local connection is needed

    specs: [
        './test/specs/**/*.js'
    ],
    exclude: [
        // 'path/to/excluded/files'
    ],

    maxInstances: 10,

    capabilities: [{
        maxInstances: 5,
        name: 'WDIO Selenium Test Example',
        'browserName': 'Safari',
        'deviceName': 'iPhone 12 Pro Max',
        'platformVersion': '14.0',
        'platformName': 'iOS',
        'deviceOrientation': 'portrait',
        // 'browserName': 'Chrome',
        // 'deviceName': 'Pixel 5',
        // 'platformVersion': '11.0',
        // 'platformName': 'Android',
        // 'deviceOrientation': 'portrait',
        record_video: 'true'
    }],



    logLevel: 'info',

    bail: 0,

    baseUrl: 'http://localhost',

    waitforTimeout: 10000,

    connectionRetryTimeout: 90000,

    connectionRetryCount: 3,

    framework: 'mocha',

    reporters: ['spec'],


    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
}