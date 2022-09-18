const homePage = require("../pageobjects/TelnyxHomePage.js");
const logInPage = require("../pageobjects/LogInPage.js");
const myProfilePage = require("../pageobjects/myProfilePage.js");
const apiDocsPage = require("../pageobjects/ApiDocsPage.js");

describe("API Docs", () => {
  xit("Should click API docs link in new tab and switch tab back", async () => {
    await homePage.launchWebApp();
    await homePage.cookieWindowAccept();
    await logInPage.logInIfNeeded();
    await myProfilePage.homePagebutton.click();
    await browser.pause(3000);
    await myProfilePage.apiDocsButton.click();
    await apiDocsPage.headerApiDocsPage.isDisplayed();
    await browser.pause(5000);
    await browser.switchWindow("Home / Telnyx Customer Portal");
    await browser.pause(5000);
    await myProfilePage.profileIcon.isDisplayed();
  });
});
