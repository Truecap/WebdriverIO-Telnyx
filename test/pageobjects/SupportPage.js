class SupportPage {
  get searchInput() {
    return $('[class*="search__input"]');
  }
  get lookUpSearchResult() {
    return $('[href="/en/articles/4366901-your-number-lookup-guide"]');
  }
  get lookUpGuideHeader() {
    return $('[class="t__h1"]');
  }
}
module.exports = new SupportPage();
