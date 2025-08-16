import { request, expect } from '@playwright/test';
import { ENV } from '../config/env.js';

export class ApiClient {
  async init() {
    this.context = await request.newContext({ baseURL: ENV.apiBaseURL });
  }

  async dispose() {
    await this.context?.dispose();
  }

  // Example endpoint; adjust path/params to actual API schema when known
  async searchFlights(params) {
    const res = await this.context.get('/flights/search', { params });
    expect(res.ok()).toBeTruthy();
    return res.json();
  }
}
