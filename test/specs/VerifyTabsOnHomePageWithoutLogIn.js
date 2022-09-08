describe("Verify tabs on home page without login", () => {
  const homePage = require("../pageobjects/TelnyxHomePage.js");

  it("should open pop-upwindow pricing", async () => {
    await homePage.launchWebApp();
    await homePage.cookieWindowAccept();
    await homePage.pricingTab.moveTo();
    await browser.pause(2000);
    await homePage.elementsPricingTab.isDisplayed();
  });

  it("should open pop-upwindow solutions", async () => {
    await homePage.launchWebApp();
    await homePage.cookieWindowAccept();
    await homePage.solutionsTab.moveTo();
    await browser.pause(2000);
    await homePage.elementsSolutionsTab.isDisplayed();
  });
  it("should open pop-upwindow resources", async () => {
    await homePage.launchWebApp();
    await homePage.cookieWindowAccept();
    await homePage.resourcesTab.moveTo();
    await browser.pause(2000);
    await homePage.elementsResourceTab.isDisplayed();
  });
  it("should open pop-upwindow company", async () => {
    await homePage.launchWebApp();
    await homePage.cookieWindowAccept();
    await homePage.companyTab.moveTo();
    await browser.pause(2000);
    await homePage.elementsCompanyTab.isDisplayed();
  });
  it("should open pop-upwindow products", async () => {
    await homePage.launchWebApp();
    await homePage.cookieWindowAccept();
    await homePage.productTab.moveTo();
    await browser.pause(2000);
    await homePage.elementsProductTab.isDisplayed();
  });

  it("should click on network tab and redirected to network page", async () => {
    await homePage.launchWebApp();
    await homePage.cookieWindowAccept();
    await homePage.networkTab.click();
    await browser.pause(2000);
    await homePage.headerOnNetworkPage.isDisplayed();
  });
});
