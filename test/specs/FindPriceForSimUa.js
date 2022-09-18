const homePage = require("../pageobjects/TelnyxHomePage.js");
const wirelessPage = require("../pageobjects/WirelessPage.js");

describe("Find price for Sim for Ukraine", () => {
  it("Should to show price for SIM for Ukraine in usd", async () => {
    await homePage.launchWebApp();
    await homePage.cookieWindowAccept();
    await homePage.pricingTab.moveTo();
    await homePage.wirelessBtnPricingDrpDwn.click();
    await wirelessPage.countryDrpDwn.click();
    await wirelessPage.ukraineFromDrpDwn.click();
    await wirelessPage.validateForSimUaUsd();
  });

  it("Check if the price for Multi-size SIM card for Ukrain will change in Euro.", async () => {
    await homePage.launchWebApp();
    await homePage.cookieWindowAccept();
    await homePage.pricingTab.moveTo();
    await homePage.wirelessBtnPricingDrpDwn.click();
    await wirelessPage.countryDrpDwn.click();
    await wirelessPage.ukraineFromDrpDwn.click();
    await wirelessPage.currencyDrpDwn.click();
    await wirelessPage.euroFromDrpDwnCurrency.click();
    await wirelessPage.validateForSimUaEuro();
  });
});
