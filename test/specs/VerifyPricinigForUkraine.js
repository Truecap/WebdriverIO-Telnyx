const homePage = require("../pageobjects/TelnyxHomePage.js");
const logInPage = require("../pageobjects/LogInPage.js");
const myProfilePage = require("../pageobjects/myProfilePage.js");
const pricingPage = require("../pageobjects/PricingPage.js");

describe("Pricing", () => {
  it("Verify pricing for Ukraine", async () => {
    await homePage.launchWebApp();
    await homePage.cookieWindowAccept();
    await logInPage.logInIfNeeded();
    await browser.pause(3000);
    await myProfilePage.profileIcon.moveTo();
    await myProfilePage.pricingButton.click();
    await pricingPage.pricingContryDrpDwn.click();
    await browser.pause(3000);
    await pricingPage.ukraineFromDrpDwn.click();
    await browser.pause(3000);
    await pricingPage.numbersTab.click();
    await pricingPage.validateNumbersTab();
    await browser.pause(3000);
    await pricingPage.messagingTab.click();
    await pricingPage.validateMessagingTab();
    await browser.pause(3000);
    await pricingPage.telcoDataTab.click();
    await pricingPage.validateTelcoDataTab();
    await browser.pause(3000);
    await pricingPage.networkingTab.click();
    await pricingPage.validateNetworkingTab();
    await browser.pause(3000);
    await pricingPage.voiceTab.click();
    await pricingPage.validateVoiceTab();
  });
});
