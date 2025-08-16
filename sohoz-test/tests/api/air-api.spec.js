import { test, expect } from '@playwright/test';
import { ApiClient } from '../../helpers/apiClient';

test('API: Flight search response validation', async () => {
  const client = new ApiClient();
  await client.init();

  const response = await client.searchFlights({
    from: "Chattogram",
    to: "Dhaka",
    date: "2025-09-23"
  });

  expect(response.ok()).toBeTruthy();
  const data = await response.json();
  expect(data.flights.length).toBeGreaterThan(0);
});
