const homePage = require("../pageobjects/TelnyxHomePage.js");

describe("Verify search input on blog page", () => {
  it("Should click on blog button on the resources drop down menu and enter Number pool to search input", async () => {
    await homePage.launchWebApp();
    await homePage.cookieWindowAccept();
    await homePage.resourcesTab.moveTo();
    await browser.pause(2000);
    await homePage.blogBtnResorcesDrpDwn.click();
    await homePage.searchIpnutBlogPage.addValue("number pool");
    await browser.keys("Enter");
    await expect(browser).toHaveUrl(
      "https://telnyx.com/resources/search?q=number%20pool"
    );
  });
});
