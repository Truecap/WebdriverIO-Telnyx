const homePage = require("../pageobjects/TelnyxHomePage.js");
const logInPage = require("../pageobjects/LogInPage.js");
const myProfilePage = require("../pageobjects/myProfilePage.js");
const lookUpPage = require("../pageobjects/LookUpPage.js");

describe("Look Up request", () => {
  it("Try to create look up request", async () => {
    await homePage.launchWebApp();
    await homePage.cookieWindowAccept();
    await logInPage.logInIfNeeded();
    await browser.pause(3000);
    await myProfilePage.lookUpButton.click();
    await browser.pause(3000);
    await lookUpPage.selectBoxCountry.selectByVisibleText("Ukraine");
    await lookUpPage.phoneNumberInput.addValue("971360117");
    await lookUpPage.lookUpNumberButton.click();
    await browser.pause(3000);
    await lookUpPage.errorMessage.isDisplayed();
  });
});
