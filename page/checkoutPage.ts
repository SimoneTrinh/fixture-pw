import { Page } from "@playwright/test";

export default class checkoutPage{
    private page: Page;
    constructor(page: Page){
        this.page = page;
    }

    public get userEmailField(){
        return this.page.$(`//input[@name='email-address']`);       
    }

    public async enterUserEmail(email: string){
        await this.page.waitForSelector(`//input[@name='email-address']`, {state: "visible"});
        const emailElement = await this.userEmailField;
        await emailElement?.fill(email);
    }

    public get firstNameField(){
        return this.page.$(`//input[@name='first-name']`);
    }

    public async enterFirstName(fname: string){
        const fNameElement = await this.firstNameField;
        await fNameElement?.fill(fname);
    }

    public get lastNameField(){
        return this.page.$(`//input[@name='last-name']`);
    }

    public async enterLastName(lname: string){
        const lNameElement = await this.lastNameField;
        await lNameElement?.fill(lname);
    }

    public get streetAddressField(){
        return this.page.$(`//input[@name='street-address']`);
    }

    public async enterStreetAddress(streetAddress: string){
        const streetAddressElement = await this.streetAddressField;
        await streetAddressElement?.fill(streetAddress);
    }

    public get zipcodeField(){
        return this.page.$(`//input[@name='zip-code']`);
    }

    public async enterZipcode(zipCode: string){
        const zipcodeElement = await this.zipcodeField;
        await zipcodeElement?.fill(zipCode);
    }

    public get cityField(){
        return this.page.$(`//input[@name='city']`);
    }

    public async enterCity(city: string){
        const cityElement = await this.cityField;
        await cityElement?.fill(city);
    }

    public get phonenumField(){
        return this.page.$(`//input[@name='phone-number']`);
    }

    public async enterPhone(phoneNum: string){
        const phoneElement = await this.phonenumField;
        await phoneElement?.fill(phoneNum);
    }

    public get ccNumField(){
        return this.page.frameLocator(`//iframe[@title='Secure card number input frame']`).locator(`//input[@name='cardnumber']`);
    }

    public async enterCC(ccNum: string){
        const ccElement = await this.ccNumField;
        await ccElement?.fill(ccNum);
    }


    public get cardHolderField(){
        return this.page.$(`//input[@placeholder='Cardholder name']`);
    }

    public async enterCardHolder(cardHolder: string){
        const cardHolderElement = await this.cardHolderField;
        await cardHolderElement?.fill(cardHolder);
    }

    public get expField(){
        return this.page.frameLocator(`//iframe[@title='Secure expiration date input frame']`).locator(`//input[@name='exp-date']`);
    }

    public async enterExp(exp: string){
        const expElement = await this.expField;
        await expElement?.fill(exp);
    }

    public get cvcField(){
        return this.page.frameLocator(`//iframe[@title='Secure CVC input frame']`).locator(`//input[@name='cvc']`);
    }

    public async enterCVC(cvc: string){
        const cvcElement = await this.cvcField;
        await cvcElement?.fill(cvc);
    }

    public get btnPlaceOrder(){
        return this.page.$(`//span[text()='Place Your Order']`);
    }

    public async clickPlaceOrderBtn(){
        const placeOrderBtnElement = await this.btnPlaceOrder;
        await placeOrderBtnElement?.click();
    }

    public get checkThankYou(){
        return this.page.waitForSelector(`//h2[text()='Thank you!']`);
    }

    public async logOrderSummary(){
        const email = await this.page.innerText(`//p[@class='os-step__info']`);
        // const phone = await this.page.innerText(`//address[@class='address']`);
        const productName = await this.page.innerText(`//span[@class='checkout-product__name']`);
        const price = await this.page.innerText(`//td[@class='checkout-product__price']//span`);
        const subtotal = await this.page.innerText(`//div[@class="order-summary__section order-summary__section--total-lines"]//table[1]//tr[1]//span[@class="order-summary__emphasis"]`);
        const shipping = await this.page.innerText(`//div[@class="order-summary__section order-summary__section--total-lines"]//table[1]//tr[2]//span[@class="order-summary__emphasis"]`);
        const total = await this.page.innerText(`//span[@class="payment-due__price"]`);
        
        let info = `
        Email: ${email}
        Product Name: ${productName}
        Price: ${price}
        Subtotal: ${subtotal}
        Shipping: ${shipping}
        Total: ${total}
        `
        console.log(info);
    }

// NEED TO ADD CHECK THANK YOU TEXT ASYNC

/* LOCATORS ORDER SUMMARY
Email: //p[@class='os-step__info']
Phone: //address[@class='address']//br[3]
Product name: //span[@class='checkout-product__name']
Price: //td[@class='checkout-product__price']//span
Subtotal: //div[@class="order-summary__section order-summary__section--total-lines"]//table[1]//tr[1]//span[@class="order-summary__emphasis"]
Shipping: //div[@class="order-summary__section order-summary__section--total-lines"]//table[1]//tr[2]//span[@class="order-summary__emphasis"]
Total: //span[@class="payment-due__price"]
*/
}