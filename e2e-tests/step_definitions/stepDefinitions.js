'use strict';
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

// Protractor won't wait for Angular
browser.ignoreSynchronization = true;

module.exports = function() {

  this.Given(/^I go to "([^"]*)"$/, function(site,next) {
    browser.waitForAngularEnabled(false);
    browser.get(site);
    expect(browser.getCurrentUrl()).to.eventually.contain('https://www.google.es').and.notify(next);
    
  });

   this.Then(/^I am at "([^"]*)"$/, function (site, next) {
    expect(browser.getCurrentUrl()).to.eventually.equal(site).notify(next);

  });

  this.When(/^I input the text "([^"]*)"$/, function (text, next) {
    browser.driver.findElement(by.name('q')).sendKeys(text);
    next();
  });

  this.When(/^I google it$/, function (next) {
      browser.driver.findElement(By.name('q')).sendKeys(protractor.Key.ENTER).then(next);

  });

  this.Then(/^I should see some results$/, function (next) {
      expect(browser.driver.findElements(By.css('div.g'))).to.eventually.not.equal(0);
      next();
  });
};
