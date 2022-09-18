const homePage = require("../pageobjects/TelnyxHomePage.js");

describe("Verify home page button", () => {
  it("Should click about us button then home page button", async () => {
    await homePage.launchWebApp();
    await homePage.cookieWindowAccept();
    await homePage.footerAboutUsBtn.scrollIntoView();
    await homePage.footerAboutUsBtn.click();
    await homePage.aboutuUsHeader.isDisplayed();
    await homePage.homePagebutton.click();
    await homePage.homePagePicture.isDisplayed();
    await browser.pause(3000);
  });
});
