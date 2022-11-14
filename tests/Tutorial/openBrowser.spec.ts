import test, { chromium  } from '@playwright/test';

test.describe('Open Browser', () =>{
    test('Expect open browser', async () => {
        const browser = await chromium.launch({
            //local browser config here     
            // headless: false 
        })
        const context = await browser.newContext(
            // {
            //     recordVideo: {
            //         dir: "./videos/",
                    
            //     }
            // }
        );
        const page = await context.newPage();
        await page.goto('https://www.shopbase.com/')
    })
    
})