class ContactCenterPage {
  get phoneCallsButton() {
    return $('//*[text()= "Explore Elastic SIP Trunking"]');
  }
  async validatePhoneCallsButton() {
    await expect(browser).toHaveUrl("https://telnyx.com/products/sip-trunks");
  }
  get textMessagesButton() {
    return $('//*[text()= "Explore SMS API"]');
  }
  async validateTextMessagesButton() {
    await expect(browser).toHaveUrl("https://telnyx.com/products/sms-api");
  }
  get browserBasedCommsButton() {
    return $('//*[text()= "Explore WebRTC"]');
  }
  async validateBassedCommsButton() {
    await expect(browser).toHaveUrl("https://telnyx.com/products/webrtc");
  }
}
module.exports = new ContactCenterPage();
