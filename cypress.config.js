const { defineConfig } = require("cypress");
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({

  reporter: 'cypress-mochawesome-reporter',
  e2e: {

    //"specPattern": "**/*.feature",
    projectId: "zymrvg",
    "chromeWebSecurity": false,
    "viewportWidth": 1920,
    "viewportHeight": 1080,
    "pageLoadTimeout": 120000,
    "defaultCommandTimeout": 20000,
    "baseUrl": "https://opensource-demo.orangehrmlive.com",
    "video": true,
    //"retries":{"openMode":3, "runMode":5},
    "env":{

      
      allureReuseAfterSpec: true,
      "allureResultsPath": "allure-results",
      "clienturl": "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
      "username": "Admin",
      "password": "admin123"

    },
    //"videosFolder": "cypress/Ramya",
    "videoCompression": 51,
    "watchForFileChanges": true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      return require('./cypress/plugins/index.js')(on, config)
      allureWriter(on, config);
      return config;
      require('cypress-mochawesome-reporter/plugin')(on);
      on('task', {downloadFile})
    },
  },
});
