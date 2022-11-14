import test, {expect} from "../../Fixtures/basePages";
import * as prdData from "../../Data/importProduct.json"

//Test case
test.describe('Test case 01', () =>{
    test('Expect can Login and push new product', async ({LoginPage, DashBoardPage, ProductPage}) => {
        await DashBoardPage.clickProductsBtn();
        await ProductPage.clickAddProductBtn();
        await ProductPage.uploadProductData();
    })

    test('Check is API have title', async({request}) => {
        const baseURL = `https://sbaseglow.onshopbase.com/api/catalog/next/product/`; 
        const productDomain = prdData.Title.toLowerCase().split(' ').join('-'); //replaceAll
        const URL = baseURL + productDomain + '.json';
        const _response = await (await request.get(`${URL}`));
        const parseString = JSON.stringify(await _response.json());
        expect(await parseString).toContain(prdData.Title);
    })
})

