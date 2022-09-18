const savingCalculatorPage = require("../pageobjects/SavingCalculatorPage.js");
const homePage = require("../pageobjects/TelnyxHomePage.js");

describe("Verify saving calculator", () => {
  it("Should verify saving calculator with messaging API", async () => {
    await homePage.launchWebApp();
    await homePage.cookieWindowAccept();
    await homePage.resourcesTab.moveTo();
    await homePage.savingCalculatorBtnResourcesDrpDwn.click();
    await savingCalculatorPage.messagingApiBtn.click();
    await savingCalculatorPage.continueButton.click();
    await savingCalculatorPage.localNumbersInput.setValue("1");
    await savingCalculatorPage.tollFreeNumbersInput.setValue("1");
    await savingCalculatorPage.continueButton.click();
    await savingCalculatorPage.validateSavingCalculator();
  });
});
