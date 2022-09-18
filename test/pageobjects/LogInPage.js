const homePage = require("../pageobjects/TelnyxHomePage.js");
const profilePage = require("../pageobjects/myProfilePage.js");

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
    await browser.pause(3000);
    await browser.saveScreenshot("./screenshots/screenshot.png");
    if (await this.emailInput.isDisplayed()) {
      await this.emailInput.waitForDisplayed({ timeout: 20000 });
      await this.emailInput.addValue("testsne13@gmail.com");
      await this.passwordInput.addValue("Test1234test!");
      await this.submitButton.waitForClickable({ timeout: 20000 });
      await browser.pause(5000);
      await this.submitButton.click();
      await profilePage.profileIcon.waitForDisplayed({ timeout: 90000 });

    }
  }
}
module.exports = new LoginPage();
