export class Utils {
  // Convert a currency string like "৳ 5,490" or "5,490 BDT" → 5490
  static currencyTextToNumber(text) {
    if (!text) return NaN;
    const cleaned = String(text).replace(/[^0-9.]/g, '');
    return Number.parseFloat(cleaned);
  }

  // Ensure a locator is visible then click
  static async clickVisible(locator) {
    await locator.waitFor({ state: 'visible' });
    await locator.click();
  }

  // Simple network idle heuristic after actions like Search
  static async waitForCalmNetwork(page, idleMs = 1200) {
    const end = Date.now() + 10_000; // max 10s
    while (Date.now() < end) {
      await page.waitForTimeout(idleMs);
      return; // treat the first idle window as "calm"
    }
  }

  // Compare arrays; return true if any difference exists
  static arraysHaveAnyDifference(a = [], b = []) {
    if (a.length !== b.length) return true;
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return true;
    }
    return false;
  }
}