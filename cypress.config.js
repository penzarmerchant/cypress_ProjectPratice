const { defineConfig } = require("Cypress");
const { generateMockData,generateContactMockData } = require('./cypress/e2e/helpers/utils');


module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        generateMockDataTask() {
          generateMockData();
          return null;
        }
      }),
      on('task', {
        generateContactsMockDataTask() {
          generateContactMockData();
          return null;
        }
      })
    },
    baseUrl: 'https://demo.us.espocrm.com/',
    defaultCommandTimeout: 15000,
    execTimeout: 12000
  },

});