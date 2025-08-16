import { expect } from '@playwright/test';

export class ReviewModalPage {
  constructor(page) {
    this.page = page;
    this.modal = page.locator('.modal:has-text("Review fare to Dhaka")');
    this.continueBtn = this.modal.getByRole('button', { name: 'CONTINUE' });
  }

  async verifyVisible() {
    await expect(this.modal).toBeVisible();
  }

  async getPrice() {
    return await this.modal.locator('.total-price').innerText();
  }

  async continue() {
    await this.continueBtn.click();
  }

  async closeSigninModal() {
    await this.page.locator('.signin-modal .close').click();
  }
}
