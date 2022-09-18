class SavingCalculatorPage {
  get messagingApiBtn() {
    return $("//*[text() ='Messaging API']");
  }
  get continueButton() {
    return $("main div>button.hBNXWZ");
  }
  get localNumbersInput() {
    return $("#local-numbers");
  }
  get tollFreeNumbersInput() {
    return $("#toll-free-numbers");
  }
  get possibleSavingsImg() {
    return $("[class='sc-1d1c658f-0 iHDmXz']");
  }
  async validateSavingCalculator() {
    await this.possibleSavingsImg.isDisplayed();
  }
}
module.exports = new SavingCalculatorPage();
