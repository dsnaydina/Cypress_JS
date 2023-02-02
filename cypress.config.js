const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '1t9p37',
  e2e: {
    baseUrl: "https://example.cypress.io",
    setupNodeEvents(on, config) {
      
      // implement node event listeners here
    },
  },
});
