const { defineConfig } = require("cypress");

module.exports = defineConfig({
  watchForFileChanges : false,
  e2e: {
    experimentalStudio: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl : 'https://webportal-dev.arrivo.ai',
        //defaultCommandTimeout: 100000,
        "defaultCommandTimeout": 20000,
        "pageLoadTimeout": 200000
  },
});
