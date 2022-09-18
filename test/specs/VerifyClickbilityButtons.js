const contactCenterPage = require("../pageobjects/ContactCenterPage.js");
const homePage = require("../pageobjects/TelnyxHomePage.js");

describe("Verify clickability buttons", () => {
  it("Should verify clickability buttons on contact center page", async () => {
    await homePage.launchWebApp();
    await homePage.cookieWindowAccept();
    await homePage.solutionsTab.moveTo();
    await homePage.contactCenterBtnSolutionsDrpDwn.click();
    await contactCenterPage.phoneCallsButton.click();
    await contactCenterPage.validatePhoneCallsButton();
    await browser.back();
    await contactCenterPage.textMessagesButton.click();
    await contactCenterPage.validateTextMessagesButton();
    await browser.back();
    await contactCenterPage.browserBasedCommsButton.click();
    await contactCenterPage.validateBassedCommsButton();
  });
});
