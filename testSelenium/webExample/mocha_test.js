var assert = require('assert');
// var test = require('selenium-webdriver/testing');
var webdriver = require('selenium-webdriver');
// var driver;

// EXECUTE VIA mocha mocha_test.js

// test.describe('Google search', function() {
describe('Google search', function() {
   // test.beforeEach(function(done) {
    this.timeout(20000);
    var driver;

    beforeEach(function(done) {
     driver = new webdriver.Builder()
         .withCapabilities(webdriver.Capabilities.firefox()).build();
     // driver.get('http://www.google.com');
     done();
   });
   // test.afterEach(function(done) {
    afterEach(function(done) {
      driver.quit();
      done();
   });
    // test.it('Webpage should have expected title value', function(done) {
    it('Webpage should have expected title value', function(done) {
      var promise = driver.getTitle();
      promise
          .then(function(title) {
                assert.equal(title, 'Google');
          })
          // TODO: it goes this way and I don't know why; it claims that title is empty; is it because of timeout?
          .catch(function () {
                console.log("Promise Rejected");
          });
      done();
   });
    it("I open the blog website", function() {
        return driver.get("http://www.scottlogic.com/blog");
    });
    it('another test for title', function() {
        // Since we want the title from the page, we need to manually handle the Promise
        return driver.getTitle().then(function(title) {
            console.log("title: "+title);
            assert.equal(title, "Google");

        });
    });
    // TODO: this requires async function
    // it("youtube approach", functio() {
    //     let driver = await new Builder().forBrowser("firefox").build();
    //     await driver.get("http://google.com");
    // });
});