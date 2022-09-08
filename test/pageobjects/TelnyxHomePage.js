class HomePage {
  get logInBtn() {
    return $('[id="dialogAudio"] +a +a');
  }
  get closeButtonCookie() {
    return $('[aria-label="close and deny"]~div>div>button');
  }
  get pricingTab() {
    return $('[class*="khahzD"]:last-of-type');
  }
  get elementsPricingTab() {
    return $('[class*="khahzD"]:last-of-type');
  }
  get elementsSolutionsTab() {
    return $('header .mchNoDecorate[href*="/solutions/"]');
  }
  get solutionsTab() {
    return $('[class*="khahzD"]:nth-of-type(2)');
  }
  get resourcesTab() {
    return $('[class*="khahzD"]:nth-of-type(4)');
  }
  get elementsResourceTab() {
    return $('header .mchNoDecorate[href*="/customer-stories"]');
  }

  get elementsSolutionsTab() {
    return $('header .mchNoDecorate[href*="/customer-stories"]');
  }
  get companyTab() {
    return $('[class*="khahzD"]:nth-of-type(5)');
  }
  get elementsCompanyTab() {
    return $('header .mchNoDecorate[href*="/company/"]');
  }
  get elementsProductTab() {
    return $('header .mchNoDecorate[href*="/products/"]');
  }
  get productTab() {
    return $('[class*="khahzD"]:nth-of-type(1)');
  }
  get networkTab() {
    return $('[class*="khahzD"]:nth-of-type(3)');
  }
  get headerOnNetworkPage() {
    return $('h1[class*="clNvhv gVIlze"]');
  }
  async launchWebApp() {
    await browser.url("https://telnyx.com");
    await browser.setWindowSize(1920, 1080);
  }

  async cookieWindowAccept() {
    if (await this.closeButtonCookie.isDisplayed()) {
      await this.closeButtonCookie.click();
    }
  }
}
module.exports = new HomePage();
