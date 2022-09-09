const homePage = require("../pageobjects/TelnyxHomePage.js");

class LoginPage {
  get emailInput() {
    return $('form>div>div input[name="email"]');
  }
  get passwordInput() {
    return $('form>div>div input[name="password"]');
  }
  get submitButton() {
    return $('button[class*="LoginForm__LoginButton"]');
  }
  get errorMessage() {
    return $('[class*="ilxvtf"]');
  }

  async validateLoginError() {
    await this.errorMessage.isDisplayed();
  }
  async logInIfNeeded() {
    await homePage.logInBtn.click();
    if (await this.emailInput.isDisplayed()) {
      await this.emailInput.addValue("testsne13@gmail.com");
      await this.passwordInput.addValue("Test1234test!");
      await browser.pause(3000);
      await this.submitButton.click();
      await browser.waitUntil(
        async () => await $('[class*="tx-27OtCC"]').isDisplayed(),
        {
          timeout: 120000,
        }
      );
    }
  }
}
module.exports = new LoginPage();
