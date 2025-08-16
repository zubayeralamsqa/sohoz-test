export class HomePage {
  constructor(page) {
    this.page = page;
    this.fromInput = page.locator('#fromAirport');
    this.toInput = page.locator('#toAirport');
    this.departureDate = page.locator('#departureDate');
    this.travellerClass = page.locator('#travellerClass');
    this.searchBtn = page.getByRole('button', { name: 'Search' });
  }

  async goto() {
    await this.page.goto('https://www.shohoz.com/air-tickets');
  }

  async selectFrom(city) {
    await this.fromInput.click();
    await this.page.getByText(city, { exact: true }).click();
  }

  async selectTo(city) {
    await this.toInput.click();
    await this.page.getByText(city, { exact: true }).click();
  }

  async selectDate(dateLabel) {
    await this.departureDate.click();
    await this.page.getByRole('button', { name: dateLabel }).click();
  }

  async selectTravellersAndClass(travellers, travelClass) {
    await this.travellerClass.click();
    await this.page.getByText(travellers).click();
    await this.page.getByText(travelClass).click();
    await this.page.getByRole('button', { name: 'Done' }).click();
  }

  async search() {
    await this.searchBtn.click();
  }
}
