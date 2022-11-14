import { Page } from "@playwright/test";
import * as data from "../Data/importProduct.json";

export default class productPage {
  private page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  public async clickAddProductBtn() {
    await this.page.locator(`//span[contains(text(), "Add product")]`).click();
    await this.page.waitForSelector(
      `//input[@placeholder="Short Sleeve T-Shirt"]`,
      { state: "visible" }
    );
  }

  public async uploadProductData() {
    await this.page
      .locator(`//input[@placeholder="Short Sleeve T-Shirt"]`)
      .fill(data.Title);
    await this.page
      .frameLocator(`//iframe[@class="tox-edit-area__iframe"]`)
      .locator(`//body[@id="tinymce"]`)
      .click();
    await this.page.keyboard.type(data.Description);
    await this.page
      .locator(`//input[@placeholder="Product type"]`)
      .fill(data.Product_Type);
    await this.page
      .locator(`//input[@placeholder="Nikola's Electrical Supplies"]`)
      .fill(data.Vendor);
    await this.page.locator(`//input[@id="price"]`).fill(data.Price);
    await this.page
      .locator(`//input[@id="compare_price"]`)
      .fill(data.Compate_at_price);
    await this.page
      .locator(`//input[@id="cost_price"]`)
      .fill(data.Cost_per_item);
    await this.page
      .locator(`//div[contains(@class, 'shipping')]//input`)
      .fill(data.Weight);
    await this.page.locator(`//span[contains(text(), 'Save product')]`).click();
    await this.page.waitForLoadState("networkidle");
  }
}
