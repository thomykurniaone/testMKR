const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:'https://www.cermati.com/',
  },
 
  env: {
    URL: 'https://www.cermati.com/app/gabung'
  }
  
});