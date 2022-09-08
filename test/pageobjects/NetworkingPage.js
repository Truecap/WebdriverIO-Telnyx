class NetworkingPage {
  get createNetworkButton() {
    return $('[class*="EmptyState__InfoButton"]');
  }
  get nameInputPopUpWindow() {
    return $('[name="name"]');
  }
  get createButtonPopUpWindow() {
    return $('[class="Button__StyledDefaultButton-bvSDhd QRlWQ"]');
  }
  get networkSuccessfulMessage() {
    return $('[class*="Message__MessageContent-gQIxgg hGlGBT"]');
  }
  get trashIconButton() {
    return $('[class*="NetworkTableRow"]:last-child');
  }
  get deleteButtonPopUpwindow() {
    return $('[class*="Button__Danger"]');
  }
}
module.exports = new NetworkingPage();
