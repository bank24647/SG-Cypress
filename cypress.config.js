const { defineConfig } = require("cypress");

module.exports = defineConfig({
  numTestsKeptInMemory : 1,
  experimentalMemoryManagement : true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
  },
});
