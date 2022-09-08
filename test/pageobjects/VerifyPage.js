class VerifyPage {
  get createVerifyProfileBtn() {
    return $('[class="Button__StyledDefaultButton-bvSDhd QRlWQ"]');
  }
  get inputProfileName() {
    return $('[name="name"]');
  }
  get createButton() {
    return $('[data-testid*="form-submit"]');
  }
  get successfulMessage() {
    return $(
      '//*[@type="success" and @class="Message__MessageContent-gQIxgg hGlGBT"]'
    );
  }
  get trashIconButton() {
    return $('[class*="VerifyProfilesTable__ButtonIcon"]');
  }
  get deleteButtonPopupWindow() {
    return $('[style*="flex-end"]>button:last-child');
  }
}
module.exports = new VerifyPage();
