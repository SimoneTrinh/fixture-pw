import { Page } from "@playwright/test";
import Enviroment from "../Enviroments/enviroments";

export default class loginPage{
    private page: Page;
    constructor(page: Page){
        this.page = page;
    }
    public get checkWelcome(){
        return this.page.waitForSelector("//div[@class='heading']");
    }

    async isWelcome(){
        await this.page.waitForSelector(`//h2[contains(text(), "Congratulations")]`, {state: "visible"})
    }

    public get emailField(){
        return this.page.$(`[placeholder="example\@email\.com"]`);

        // const emailField = this.page.$("locator email");
        // if (emailField != null){
        //     return emailField;
        // } else throw new Error("No Element");
    }
 
    public get passwordField(){
        return this.page.$(`[placeholder="Password"]`);
    }

    public get loginBtn(){
        return this.page.$(`(//button[@type='submit'])[1]`)
    }

    async enterEmail(email: string){
        // await this.page.waitForSelector(`[placeholder="example\@email\.com"]`, {state: "visible"}); //Có thể không cần thiết
        // const emailElement = await this.emailField;
        // await emailElement?.fill(email);
        await this.page.locator(`[placeholder="example\@email\.com"]`).fill(email);
    }

    async goto(url: string){
        // await this.page.waitForSelector(`[placeholder="example\@email\.com"]`, {state: "visible"}); //Có thể không cần thiết
        // const emailElement = await this.emailField;
        // await emailElement?.fill(email);
        await this.page.goto(url);
    }
//Cần add thêm cmt
    public async enterPassword(pass: string){
        // await this.page.waitForSelector(`[placeholder="Password"]`, {state: "visible"});
        const passElement = await this.passwordField;
        await passElement?.fill(pass);
    }
//Không nhất thiết phải public
    public async clickLoginBtn(){
        // await this.page.waitForSelector(`(//button[@type='submit'])[1]`, {state: "visible"});
        const loginElement = await this.loginBtn;
        await loginElement?.click();
    }

    public async gotoMyShopDashboard(){
        await this.page.waitForSelector(`//span[text()="glowdernize.onshopbase.com"]`, {state: "visible"});
        await this.page.locator(`//span[text()="glowdernize.onshopbase.com"]`).click()
    }
    
    async selectShopbaseShop() {
        await this.page.waitForSelector(`//span[text()="sbaseglow.onshopbase.com"]`, {state: "visible"});
        await this.page.locator(`//span[text()="sbaseglow.onshopbase.com"]`).click()
    }
}