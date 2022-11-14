import { Page } from "@playwright/test";

export default class loginPage{
    private page: Page;
    constructor(page: Page){
        this.page = page;
    }

    // public get emailField(){
    //     return this.page.$(`[placeholder="example\@email\.com"]`);

    //     // const emailField = this.page.$("locator email");
    //     // if (emailField != null){
    //     //     return emailField;
    //     // } else throw new Error("No Element");
    // }

    emailField = async () => await this.page.$(`[placeholder="example\@email\.com"]`)

    // public get passwordField(){
    //     return this.page.$(`[placeholder="Password"]`);
    // }

    passwordField = async () => await this.page.$(`[placeholder="Password"]`)


    public get loginBtn(){
        return this.page.$(`(//button[@type='submit'])[1]`)
    }

    public async enterEmail(email: string){
        const emailElement = await this.emailField();
        await emailElement?.fill(email);
    }

    public async enterPassword(pass: string){
        const passElement = await this.passwordField();
        await passElement?.fill(pass);
    }

    public async clickLoginBtn(){
        const loginElement = await this.loginBtn;
        await loginElement?.click();
    }
}