class LookUpPage {
  get selectBoxCountry() {
    return $('[name="phoneNumberCountry"]');
  }
  get phoneNumberInput() {
    return $('[class*="PhoneNumberField"]');
  }
  get lookUpNumberButton() {
    return $('[class="Button__StyledDefaultButton-bvSDhd QRlWQ"]');
  }
  get errorMessage() {
    return $('[class*="Message__MessageContent"]');
  }
}
module.exports = new LookUpPage();
