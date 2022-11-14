import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
  // Go to https://accounts.shopbase.com/
  await page.goto('https://accounts.shopbase.com/');
  // Go to https://accounts.shopbase.com/sign-in
  await page.goto('https://accounts.shopbase.com/sign-in');
  // Click [placeholder="example\@email\.com"]
  await page.locator('[placeholder="example\\@email\\.com"]').click();
  // Fill [placeholder="example\@email\.com"]
  await page.locator('[placeholder="example\\@email\\.com"]').fill('trinhthelong.bav@gmail.com');
  // Press Tab
  await page.locator('[placeholder="example\\@email\\.com"]').press('Tab');
  // Fill [placeholder="Password"]
  await page.locator('[placeholder="Password"]').fill('The@15122000Long');
  // Press Enter
  await page.locator('[placeholder="Password"]').press('Enter');
  // Go to https://accounts.shopbase.com/shop/select
  await page.goto('https://accounts.shopbase.com/shop/select');
  // Go to https://simoneshop.onshopbase.com/admin/?access_token=482adb29f33eca20da17a417411e568a4f3924193b2efeb32f2f5613b5170e91&scopes=JTVCJTIyYWRtaW4vKiUyMiU1RA%3D%3D&shop_data=JTdCJTIyaWQlMjI6MTAzNDc3MjUsJTIyZW1haWwlMjI6JTIydHJpbmh0aGVsb25nLmJhdkBnbWFpbC5jb20lMjIlN0Q%3D&locale_code=en
  // await page.goto('https://simoneshop.onshopbase.com/admin/?access_token=482adb29f33eca20da17a417411e568a4f3924193b2efeb32f2f5613b5170e91&scopes=JTVCJTIyYWRtaW4vKiUyMiU1RA%3D%3D&shop_data=JTdCJTIyaWQlMjI6MTAzNDc3MjUsJTIyZW1haWwlMjI6JTIydHJpbmh0aGVsb25nLmJhdkBnbWFpbC5jb20lMjIlN0Q%3D&locale_code=en');
  await page.url();
  // Click text=Fetching shop information
  await page.locator('text=Fetching shop information').click();
  // await expect(page).toHaveURL('https://simoneshop.onshopbase.com/admin/?shop_data=JTdCJTIyaWQlMjI6MTAzNDc3MjUsJTIyZW1haWwlMjI6JTIydHJpbmh0aGVsb25nLmJhdkBnbWFpbC5jb20lMjIlN0Q%3D');
  // Click text=Orders >> nth=0
  await page.locator('text=Orders').first().click();
  await expect(page).toHaveURL('https://simoneshop.onshopbase.com/admin/plb/orders');
  // Click tbody >> text=#plb10347725_1003
  await page.locator('tbody >> text=#plb10347725_1003').click();
  await expect(page).toHaveURL('https://simoneshop.onshopbase.com/admin/orders/450807011');
  // Click p:has-text("Soft Footbed Comfortable Floral Sandals")
  await page.locator('p:has-text("Soft Footbed Comfortable Floral Sandals")').click();
  // Click text=Black / 5.5
  await page.locator('text=Black / 5.5').click();
  // Click text=SKU: SB1074-BL-35-1PCS
  await page.locator('text=SKU: SB1074-BL-35-1PCS').click();
  // Click text=$39.19 >> nth=2
  await page.locator('text=$39.19').nth(2).click();

  await page.pause();
});