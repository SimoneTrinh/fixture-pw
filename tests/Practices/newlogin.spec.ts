import { test, expect } from '@playwright/test';

test("basic test", async ({ page }) => {
    await page.goto("https://accounts.shopbase.com/sign-in");
    await page.locator(`[placeholder="example\@email\.com"]`).fill("trinhthelong.bav@gmail.com");
    await page.locator(`[placeholder="Password"]`).fill("The@15122000Long");
    await page.locator(`(//button[@type='submit'])[1]`).click();
    // await page.waitForNavigation();
    await page.waitForLoadState("networkidle");
    // await Promise.all([page.locator("(//span[@class='ui-login_domain-label'])[1]").click(), page.waitForNavigation()]);
    // go to order
    await Promise.all([page.locator(`(//span[normalize-space()='Orders'])[1]`).click()]);

    await page.goto("https://simoneshop.onshopbase.com/collections/summer-sale");
    await page.waitForLoadState("networkidle");

    // await page.locator(`//p[text()='simoneshop.onshopbase.com']`).click();
    // await page.locator(`//div[text()='Open your site']`).click();
    await Promise.all([page.locator(`//span[text()="Randoseru Kids Primary School Bag Ergonomic Backpack"]`).click(), page.waitForNavigation()]); 
    await page.locator(`//span[text()='Add to cart']`).click();
    await page.waitForLoadState("networkidle");


    await page.goto("https://simoneshop.onshopbase.com/cart");
    await page.waitForLoadState("networkidle");

    // await page.waitForNavigation();

    await Promise.all([page.locator(`//button[@name='checkout']`).click(), page.waitForNavigation()]); 

    // // await page.locator(`//button[@name='checkout']`).click();
    // await page.waitForNavigation();
    

    // await page.locator(`//button[text()='CHECKOUT']`).click();
    // await page.waitForNavigation();

    await page.locator(`//input[@name='email-address']`).fill('trinhthelong.bav@gmail.com');
    await page.locator(`//input[@name='first-name']`).fill('Trinh');
    await page.locator(`//input[@name='last-name']`).fill('Long');
    await page.locator(`//input[@name='street-address']`).fill('Ha noi');
    await page.locator(`//input[@name='zip-code']`).fill('100000');
    await page.locator(`//input[@name='city']`).fill('Ha noi');
    await page.locator(`//input[@name='phone-number']`).fill('0837384840');
    // await page.pause();
    // await page.mouse.wheel(0,1000)

    // const iFrameCC = page.frameLocator(`//iframe[@title='Secure card number input frame']`)

    await page.frameLocator(`//iframe[@title='Secure card number input frame']`).locator(`//input[@name='cardnumber']`).fill('4242 4242 4242 4242');
    await page.locator(`//input[@placeholder='Cardholder name']`).fill('Long');
    await page.frameLocator(`//iframe[@title='Secure expiration date input frame']`).locator(`//input[@name='exp-date']`).fill('05/25');
    await page.frameLocator(`//iframe[@title='Secure CVC input frame']`).locator(`//input[@name='cvc']`).fill('888');
    await page.locator(`//span[text()='Place Your Order']`).click();

    await page.waitForSelector(`//h2[text()='Thank you!']`, {state: "visible"});
    
    // await expect(page.locator('.status')).toHaveText('Submitted');
    await expect(page.locator(`//h2[@class='os-header__title']`)).toHaveText('Thank you!')
    await page.goto("https://simoneshop.onshopbase.com/admin")
    await page.waitForLoadState("networkidle");
    await Promise.all([page.locator(`(//span[normalize-space()='Orders'])[1]`).click()]);
    await page.pause();
    // const thankYou = await page.innerText(`//h2[@class='os-header__title']`);
    // if(thankYou == 'Thank you!'){
    //   await page.innerText(`//h2[@class='os-header__title']`)
    //   await page.goto("https://simoneshop.onshopbase.com/admin")
    //   await page.waitForLoadState("networkidle");
    //   await Promise.all([page.locator(`(//span[normalize-space()='Orders'])[1]`).click()]);
    //   await page.pause();
    // }
    


    // await page.pause();
    // await page.locator(`//iframe[@title='Secure card number input frame']`).fill('4242 4242 4242 4242');
    // await page.locator(`//input[@placeholder='Cardholder name']`).fill('Long');
    // await page.locator(`//input[@placeholder='MM/YY']`).fill('05/25');
    // await page.locator(`//input[@placeholder='cvv']`).fill('888');
    // await page.locator(`//span[text()='Place Your Order']`).click();
    // await page.pause();
  });