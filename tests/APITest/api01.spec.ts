import { test, expect, Page, request } from "@playwright/test";

// test.use({
//     baseURL: 'https://monitor.onshopbase.com/api/catalog/next/product/ombre-jumbo-braids-hair-24inch-100g-synthetic-braiding-hair-crochet-braid-hair-extension-for-women-blond-brown-pink-purple.json ',
// });
const baseURL = `https://monitor.onshopbase.com/api/catalog/next/product/ombre-jumbo-braids-hair-24inch-100g-synthetic-braiding-hair-crochet-braid-hair-extension-for-women-blond-brown-pink-purple.json`;

test("Get Information", async ({ request }) => {
    const _response = await (await request.get(`${baseURL}`));
    
    const parseString = JSON.stringify(await _response.json());
    // console.log(parseString);
    expect(await parseString).toContain('"id":1000000072213752')

});
//Code Long
test("get product info",async ({request}) => {
    const id = 1000000072213752;
    const baseURL ="https://monitor.onshopbase.com/api/catalog/next/product";
    const response = await request.get(`${baseURL}/ombre-jumbo-braids-hair-24inch-100g-synthetic-braiding-hair-crochet-braid-hair-extension-for-women-blond-brown-pink-purple.json`);
    console.log(await response.json());
    expect(await response.json()).toMatchObject({
      "result": {
        id: id,
      }
    })
  })
//Code chi Van
test('bai2', async ({ request }) => {
    const response = await request.get(`https://monitor.onshopbase.com/api/catalog/next/product/ombre-jumbo-braids-hair-24inch-100g-synthetic-braiding-hair-crochet-braid-hair-extension-for-women-blond-brown-pink-purple.json`);
    expect(response.ok()).toBeTruthy();
    const idProduct= await response.json().then(infor => infor.result.id);
    expect(idProduct).toEqual(1000000072213752);
})
//Code Linh
test('Su dung API', async ({ request }) => {
    const response = await request.get("https://diahihi123.onshopbase.com/api/catalog/next/product/t-shirt-shopbase.json");
    expect(response.ok()).toBeTruthy();
    const titleProduct= await response.json().then(infor => infor.result.title);
    expect(titleProduct).toEqual("T Shirt Shopbase");
});

//Note lai hoi anh Truong.
