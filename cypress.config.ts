const { defineConfig } = require("cypress");
const fs = require('fs-extra')
const path = require('path')

const getConfigurationByFile = (file) => {
    const pathToConfigFile = path.resolve(
        '.',
        '/cypress/configFiles',
        `${file}.json`
    )
    return fs.readJson(pathToConfigFile);
}

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config){
      // implement node event listeners here
          require('cypress-mochawesome-reporter/plugin')(on);
          const file = config.env.fileConfig || 'server';
          return getConfigurationByFile(file);
    },

    reporter:"cypress-mochawesome-reporter",
    reporterOptions: {
      reportDir: "cypress/reports",
      charts: true,
      reportPageTitle: "Mpeke Rx e2e Tests",
      embeddedScreenshots: true,
      inlineAssets: true
    },
    pageLoadTimeout: 24000,
    specPattern:"**/*.cy.ts"
  },
    viewportWidth: 1536,
    viewportHeight: 960,
    // retries:1

});


