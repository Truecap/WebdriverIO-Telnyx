const homePage = require("../pageobjects/TelnyxHomePage.js");
const logInPage = require("../pageobjects/LogInPage.js");
const myProfilePage = require("../pageobjects/myProfilePage.js");
const supportPage = require("../pageobjects/SupportPage.js");

describe("Support Center", () => {
  it("Verify support center button", async () => {
    await homePage.launchWebApp();
    await homePage.cookieWindowAccept();
    await logInPage.logInIfNeeded();
    await myProfilePage.supportCenterButton.click();
    await browser.switchWindow("Telnyx Support");
    await browser.pause(3000);
    await supportPage.searchInput.addValue("lookup");
    await browser.keys("Enter");
    await supportPage.lookUpSearchResult.click();
    await browser.pause(3000);
    await supportPage.lookUpGuideHeader.isDisplayed();
  });
});
