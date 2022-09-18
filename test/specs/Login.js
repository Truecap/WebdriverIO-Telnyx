const logInPage = require("../pageobjects/LogInPage.js");
const myProfilePage = require("../pageobjects/myProfilePage.js");
const homePage = require("../pageobjects/TelnyxHomePage.js");

describe("Login functionality", () => {
  xit("Login with valid credentials", async () => {
    await homePage.launchWebApp();
    await homePage.cookieWindowAccept();
    await homePage.logInBtn.click();
    await logInPage.emailInput.waitForDisplayed({ timeout: 20000 });
    await logInPage.emailInput.addValue("testsne13@gmail.com");
    await browser.pause(2000);
    await logInPage.passwordInput.addValue("Test1234test!");
    await logInPage.submitButton.waitForClickable({ timeout: 20000 });
    await logInPage.submitButton.click();
    await browser.pause(5000);
    await myProfilePage.validateSuccessfulLogin();
    await browser.pause(5000);
    await myProfilePage.logOut();
    await browser.pause(5000);
    await logInPage.emailInput.isDisplayed();
  });
  it("Login with invalid email", async () => {
    await homePage.launchWebApp();
    await homePage.cookieWindowAccept();
    await homePage.logInBtn.click();
    await logInPage.emailInput.addValue("someemail@gmail.com");
    await browser.pause(2000);
    await logInPage.passwordInput.addValue("Test1234test!");
    await browser.pause(2000);
    await logInPage.submitButton.click();
    await browser.pause(5000);
    await logInPage.validateLoginError();
    await browser.pause(5000);
  });
  it("Login with invalid password", async () => {
    await homePage.launchWebApp();
    await homePage.cookieWindowAccept();
    await homePage.logInBtn.click();
    await logInPage.emailInput.addValue("testsne13@gmail.com");
    await browser.pause(2000);
    await logInPage.passwordInput.addValue("12345");
    await browser.pause(2000);
    await logInPage.submitButton.click();
    await browser.pause(5000);
    await logInPage.validateLoginError();
    await browser.pause(5000);
  });
});
