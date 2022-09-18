class WirelessPage {
  get countryDrpDwn() {
    return $('//*[@class="sc-ecffda1a-4 dCDohY"][1]');
  }
  get currencyDrpDwn() {
    return $('//*[@class="sc-ecffda1a-4 dCDohY"][2]');
  }
  get ukraineFromDrpDwn() {
    return $('[href="/pricing/wireless-pricing/ua"]');
  }
  get multiSizeSim() {
    return $('//div[text() ="Multi-size SIM card"]');
  }
  get priceUsdMultiSizeSim() {
    return $('//div[text() ="$1.00"]');
  }
  get euroFromDrpDwnCurrency() {
    return $('//div[text() ="EUR"]');
  }
  async validateForSimUaUsd() {
    await this.multiSizeSim.isDisplayed();
    await this.priceUsdMultiSizeSim.isDisplayed();
  }
  get priceInEuroMultiSizeSim() {
    return $('//div[text() ="€0.8500"]');
  }
  async validateForSimUaEuro() {
    await this.multiSizeSim.isDisplayed();
    await this.priceInEuroMultiSizeSim.isDisplayed();
  }
}
module.exports = new WirelessPage();
