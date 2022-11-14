import {test, chromium} from "@playwright/test";

test.use({
    actionTimeout: 30000
})


test("Observe All Requests", async () => {
    const browser = await chromium.launch()
    const context = await browser.newContext()
    const page = await context.newPage()
    
    page.on('request', req => console.log(`>>: ${req.method()} | ${req.resourceType()} | ${req.url()}`))

    await page.goto("https://www.shopbase.com/")
    await page.waitForLoadState("networkidle");
})