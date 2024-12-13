const { defineConfig } = require("Cypress");
const { generateMockData } = require('./cypress/e2e/helpers/utils');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        generateMockDataTask() {
          generateMockData();
          return null;
        }
      })
    },
    baseUrl: 'https://demo.us.espocrm.com/',
    defaultCommandTimeout: 15000,
    execTimeout: 12000
  },

});