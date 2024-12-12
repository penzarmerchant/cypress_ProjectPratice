const { defineConfig } = require("Cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:'https://demo.us.espocrm.com/',
    defaultCommandTimeout:15000,
    execTimeout:12000
  },
  
});
