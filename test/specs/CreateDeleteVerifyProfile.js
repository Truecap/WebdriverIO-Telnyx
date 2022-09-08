const homePage = require("../pageobjects/TelnyxHomePage.js");
const logInPage = require("../pageobjects/LogInPage.js");
const myProfilePage = require("../pageobjects/myProfilePage.js");
const verifyPage = require("../pageobjects/VerifyPage.js");

describe("Verify profile functionality", () => {
  it("Create Verify profile", async () => {
    await homePage.launchWebApp();
    await homePage.cookieWindowAccept();
    await logInPage.logInIfNeeded();
    await browser.pause(5000);
    await myProfilePage.verifyButton.click();
    await browser.pause(5000);
    await verifyPage.createVerifyProfileBtn.click();
    await browser.pause(3000);
    await verifyPage.inputProfileName.addValue("test");
    await browser.pause(3000);
    await verifyPage.createButton.click();
    await browser.pause(3000);
    await verifyPage.successfulMessage.isDisplayed();
  });
  it("Delete Verify profile", async () => {
    await homePage.launchWebApp();
    await homePage.cookieWindowAccept();
    await logInPage.logInIfNeeded();
    await browser.pause(5000);
    await myProfilePage.verifyButton.click();
    await browser.pause(5000);
    await verifyPage.trashIconButton.click();
    await browser.pause(3000);
    await verifyPage.deleteButtonPopupWindow.click();
    await browser.pause(3000);
    await verifyPage.createVerifyProfileBtn.isDisplayed();
  });
});
