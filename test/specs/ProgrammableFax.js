const homePage = require("../pageobjects/TelnyxHomePage.js");
const logInPage = require("../pageobjects/LogInPage.js");
const myProfilePage = require("../pageobjects/myProfilePage.js");
const programmabelFaxPage = require("../pageobjects/ProgrammabelFaxPage.js");

describe("Programble Fax", () => {
  it("Create Programble Fax App.", async () => {
    await homePage.launchWebApp();
    await homePage.cookieWindowAccept();
    await logInPage.logInIfNeeded();
    await browser.pause(3000);
    await myProfilePage.programmabelFaxButton.click();
    await browser.pause(2000);
    await programmabelFaxPage.createYourFirstAppButton.click();
    await browser.pause(2000);
    await programmabelFaxPage.appNameInput.addValue("test");
    await browser.pause(2000);
    await programmabelFaxPage.urlInput.addValue("https://example.com");
    await programmabelFaxPage.saveButton.click();
    await browser.pause(2000);
    await programmabelFaxPage.successfullMessage.isDisplayed();
  });
  it("Edit Programble Fax App.", async () => {
    await homePage.launchWebApp();
    await homePage.cookieWindowAccept();
    await logInPage.logInIfNeeded();
    await browser.pause(3000);
    await myProfilePage.programmabelFaxButton.click();
    await browser.pause(2000);
    await programmabelFaxPage.editIconButton.click();
    await browser.pause(2000);
    await programmabelFaxPage.appNameInput.setValue("EnotherTest");
    await browser.pause(2000);
    await programmabelFaxPage.saveButton.click();
    await browser.pause(2000);
    await programmabelFaxPage.successfullMessage.isDisplayed();
  });
  it("Delete Programble Fax App.", async () => {
    await homePage.launchWebApp();
    await homePage.cookieWindowAccept();
    await logInPage.logInIfNeeded();
    await browser.pause(3000);
    await myProfilePage.programmabelFaxButton.click();
    await browser.pause(2000);
    await programmabelFaxPage.trashIconButton.click();
    await browser.pause(2000);
    await programmabelFaxPage.deleteButtonPopupWindow.click();
    await browser.pause(2000);
    await programmabelFaxPage.successfullMessage.isDisplayed();
  });
});
