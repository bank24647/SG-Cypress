const { defineConfig } = require("cypress");

module.exports = defineConfig({
  numTestsKeptInMemory : 10,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
  },
});
