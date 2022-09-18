const homePage = require("../pageobjects/TelnyxHomePage.js");
const logInPage = require("../pageobjects/LogInPage.js");
const myProfilePage = require("../pageobjects/myProfilePage.js");
const networkingPage = require("../pageobjects/NetworkingPage.js");

describe("Networking functionality", () => {
  xit("Create networking", async () => {
    await homePage.launchWebApp();
    await homePage.cookieWindowAccept();
    await logInPage.logInIfNeeded();
    await browser.pause(3000);
    await myProfilePage.networkingButton.click();
    await browser.pause(3000);
    await networkingPage.createNetworkButton.click();
    await browser.pause(3000);
    await networkingPage.nameInputPopUpWindow.addValue("test");
    await browser.pause(3000);
    await networkingPage.createButtonPopUpWindow.click();
    await browser.pause(3000);
    await networkingPage.networkSuccessfulMessage.isDisplayed();
  });
  xit("Delete networking", async () => {
    await homePage.launchWebApp();
    await homePage.cookieWindowAccept();
    await logInPage.logInIfNeeded();
    await browser.pause(3000);
    await myProfilePage.networkingButton.click();
    await browser.pause(3000);
    await networkingPage.trashIconButton.click();
    await browser.pause(3000);
    await networkingPage.deleteButtonPopUpwindow.click();
    await browser.pause(3000);
    await networkingPage.networkSuccessfulMessage.isDisplayed();
    await browser.pause(3000);
  });
});
