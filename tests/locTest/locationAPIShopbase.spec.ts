import test from "@playwright/test";

test.use({
    actionTimeout: 10000
})

test("Read API response", async ({page}) => {
    const [response] = await Promise.all([
        page.waitForResponse(res => 
            res.status() == 200
            &&
            res.url() == "https://loc.beeketing.com/api/catalog/location-lookup.json"
            &&
            res.body().then(b => {   
                console.log(b);            
                return b.includes("VN")             
            })
        ),
        page.goto("https://www.shopbase.com/")
    ])
    console.log(await response.json());
})