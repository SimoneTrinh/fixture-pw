import { test, expect, Page, request } from "@playwright/test";

// test.use({
//     baseURL: 'https://monitor.onshopbase.com/api/catalog/next/product/ombre-jumbo-braids-hair-24inch-100g-synthetic-braiding-hair-crochet-braid-hair-extension-for-women-blond-brown-pink-purple.json ',
// });
const baseURL = `https://sbaseglow.onshopbase.com/api/recsys/cross-sell.json?product_id=1000000399953605`;

test("Get Information", async ({ request }) => {
    const _response = await (await request.get(`${baseURL}`));
    
    const parseString = JSON.stringify(await _response.json());
    expect(await parseString).toContain('HM SIGN TEE / BLACK COLOR')
    // expect(await parseJSON.includes(`"id":1000000072213752`));



    // console.log(await _response.json());
    // expect(await _response.json()).toHaveText(
    //     'id: 1000000072213752'
    // )
    // let data = await _response.json();
    // const parseString = await (await _response.body()).toString();
    // const parseJSON = JSON.stringify(parseString);
    // expect(await (await _response.body()))
});