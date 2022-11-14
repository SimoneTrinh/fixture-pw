import { Page } from "@playwright/test";

export default class headerPage {
    private page: Page;
    constructor(page: Page){
        this.page = page;
    }

    public get emailField(){
        const emailField = this.page.$("locator email");
        if (emailField != null){
            return emailField;
        } else throw new Error("No Element");
    }

    public get passwordField(){
        const passwordField = this.page.$("locator password");
        if (passwordField != null){
            return passwordField;
        } else throw new Error("No Element");
    }
    
    public get loginBtn(){
        const loginBtn = this.page.$("locator password");
        if (loginBtn != null){
            return loginBtn;
        } else throw new Error("No Element");
    }

    public async clickLogin(){
        const loginElement = await this.loginBtn;
        await loginElement?.click();
    }
}

