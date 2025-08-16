export class SearchResultsPage {
  constructor(page) {
    this.page = page;
  }

  async filterAirline(airline, select = true) {
    const checkbox = this.page.getByLabel(airline);
    if (select) await checkbox.check();
    else await checkbox.uncheck();
  }

  async capturePrices(airline) {
    return await this.page.$$eval(
      `.flight-card:has-text("${airline}") .price`,
      els => els.map(e => e.innerText.trim())
    );
  }

  async bookLastFlight(airline) {
    const lastBtn = this.page.locator(`.flight-card:has-text("${airline}")`)
      .last()
      .getByRole('button', { name: 'BOOK TICKET' });
    await lastBtn.scrollIntoViewIfNeeded();
    await lastBtn.click();
  }
}
