// http://markbirbeck.com/2015/12/11/using-selenium-webdriver-with-mocha/
// https://sqa.stackexchange.com/questions/32651/driver-manage-timeouts-is-not-a-function
'use strict';
require('chai').should();

let webdriver = require('selenium-webdriver');
let By = webdriver.By;
let until = webdriver.until;

let driver = new webdriver.Builder()
    .forBrowser('firefox')
    .build();


// TODO: this doesn't work and I have no clue why
const TIMEOUT = 20000;
// driver.manage().setTimeouts(TIMEOUT);
driver.manage().setTimeouts( { implicit: TIMEOUT, pageLoad:
    TIMEOUT, script: TIMEOUT } );



describe('my blog', function() {
    // this.timeout = 20000;
    it('should navigate to post', function(done) {

        driver.get('http://markbirbeck.com/')
            .then(() => driver.getTitle())
            .then(title => title.should.equal('Mark Birbeck\'s Blog'))
            .then(() => driver.quit())
            .then(() => done())
            .catch(error => done(error))
        ;
    });
});

//
// var chai = require('chai');
// chai.use(require('chai-as-promised'));
// chai.should();
//
// require('webdriver-mocha');
// let webdriver = require('selenium-webdriver');
// let By = webdriver.By;
// let until = webdriver.until;
//
// let driver = new webdriver.Builder()
//     .forBrowser('firefox')
//     .build();
//
// driver.setTimeout({
//     'pageLoad': 10000,
//     'script': 60000
// });
// describe('my blog', () => {
//     it('should navigate to post', () => {
//         driver.executeAsync((done) => {
//             setTimeout(done, 59000);
//
//         return driver.get('http://markbirbeck.com/')
//             .then(driver.getTitle)
//             .then(title => title.should.equal('Mark Birbeck\'s Blog'))
//             .then(() =>
//                 driver.findElement(
//                     By.linkText('A Mixin Approach to Material Design Lite Using Sass')
//                 ).click()
//             )
//             .then(
//                 driver.getTitle()
//                     .should.eventually.equal('A Mixin Approach to Material Design Lite Using Sass')
//             )
//         ;
//         });
//     });
// });
