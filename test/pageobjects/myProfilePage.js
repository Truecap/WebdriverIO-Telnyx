class MyProfilePage {
  get profileIcon() {
    return $('[class*="tx-27OtCC"]');
  }
  get homePagebutton() {
    return $('(//ul[@class="list-unstyled"])[3]//li[1]');
  }
  get logOutButton() {
    return $('[class="tx-1Iv0kw"]');
  }
  get supportCenterButton() {
    return $('(//*[@href="https://support.telnyx.com"])[2]');
  }
  get apiDocsButton() {
    return $('(//*[@class="d-flex align-items-center external-nav-link"])[8]');
  }
  get lookUpButton() {
    return $('(//ul[@class="list-unstyled"])[3]//li[15]');
  }
  get networkingButton() {
    return $('(//ul[@class="list-unstyled"])[3]//li[14]');
  }
  get verifyButton() {
    return $('(//ul[@class="list-unstyled"])[3]//li[4]');
  }
  get programmabelFaxButton() {
    return $('(//ul[@class="list-unstyled"])[3]//li[6]');
  }
  get pricingButton() {
    return $('[href="/#/app/pricing"]');
  }

  async logOut() {
    await this.profileIcon.moveTo();
    await browser.pause(2000);
    await this.logOutButton.click();
  }
  async validateSuccessfulLogin() {
    await this.profileIcon.isDisplayed();
  }
}
module.exports = new MyProfilePage();
