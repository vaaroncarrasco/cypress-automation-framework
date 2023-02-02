const { defineConfig } = require("cypress");
// promisified fs module
const fs = require('fs-extra');
const path = require('path');

const cucumber = require('cypress-cucumber-preprocessor').default;


function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve('cypress/config', `${file}.json`);

  if(!fs.existsSync(pathToConfigFile)) {
    console.log("No custom config file found.");
    return {};
  }

  return fs.readJson(pathToConfigFile);
}



module.exports = defineConfig({
  projectId: 'uknd1y',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', cucumber())

      // implement node event listeners here
      const file = config.env.configFile || ''

      return getConfigurationByFile(file)

    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    excludeSpecPattern: "cypress/e2e/other/*.js",
    baseUrl: "http://www.webdriveruniversity.com",
    chromeWebSecurity: false,
    experimentalSessionAndOrigin: true,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 120000,
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true,
    video: false,
    videoUploadOnPasses: false,
    viewportHeight: 1080,
    viewportWidth: 1920,
    reporter: 'cypress-multi-reporters',
    reporterOptions: {
      configFile: 'reporter-config.json'
    },
    env: {
      webdriveruni_homepage: "http://www.webdriveruniversity.com",
      first_name: "Sarah"
    },
    retries: {
      runMode: 0,
      openMode: 0,
    },
    experimentalStudio: true,
  },
});
