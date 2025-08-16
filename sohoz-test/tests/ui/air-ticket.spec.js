import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { SearchResultsPage } from '../../pages/SearchResultsPage';
import { ReviewModalPage } from '../../pages/ReviewModalPage';
import { flightSearchData } from '../../config/testData';

test('Air ticket booking flow with US-Bangla vs Novo Air', async ({ page }) => {
  const home = new HomePage(page);
  const results = new SearchResultsPage(page);
  const review = new ReviewModalPage(page);

  // Search Flights
  await home.goto();
  await home.selectFrom(flightSearchData.from);
  await home.selectTo(flightSearchData.to);
  await home.selectDate(flightSearchData.departureDate);
  await home.selectTravellersAndClass(flightSearchData.travellers, flightSearchData.travelClass);
  await home.search();

  // Filter US-Bangla
  await results.filterAirline("US-Bangla Airlines");
  const usbanglaPrices = await results.capturePrices("US-Bangla");
  await results.bookLastFlight("US-Bangla");

  // Verify Modal
  await review.verifyVisible();
  const modalPrice = await review.getPrice();
  expect(modalPrice).toContain(usbanglaPrices[usbanglaPrices.length - 1]);
  await review.continue();
  await review.closeSigninModal();

  // Switch to Novo Air
  await results.filterAirline("US-Bangla Airlines", false);
  await results.filterAirline("Novo Air", true);
  const novoPrices = await results.capturePrices("Novo");

  // Validate differences
  expect(usbanglaPrices.length).toBeGreaterThan(0);
  expect(novoPrices.length).toBeGreaterThan(0);
  expect(novoPrices).not.toEqual(usbanglaPrices);
});
