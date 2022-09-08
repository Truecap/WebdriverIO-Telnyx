class ProgrammablePage {
  get createYourFirstAppButton() {
    return $('[class*="ifHSFX"]');
  }
  get appNameInput() {
    return $('[name="application_name"]');
  }
  get urlInput() {
    return $('[name="webhook_event_url"]');
  }
  get saveButton() {
    return $('[class="Button__StyledDefaultButton-bvSDhd QRlWQ"]');
  }
  get successfullMessage() {
    return $('[class*="Message__MessageContent-gQIxgg hGlGBT"]');
  }
  get editIconButton() {
    return $('[class*="telnyx-icon-edit"]');
  }
  get trashIconButton() {
    return $('[class*="elnyx-icon-trash"]');
  }
  get deleteButtonPopupWindow() {
    return $('[class*="Button_danger-tx-25bAfo"]');
  }
}
module.exports = new ProgrammablePage();
