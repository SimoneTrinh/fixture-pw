import { Page } from "@playwright/test";

export default class headerPage {
    private page: Page;
    constructor(page: Page){
        this.page = page;
    }
   
    public get loginBtn(){
        const loginBtn = this.page.$(`(//button[@type='submit'])[1]`);
        if (loginBtn != null){
            return loginBtn;
        } else throw new Error("No Element");
    }

    // public async clickLoginBtn(){
    //     const loginElement = await this.loginBtn;
    //     await loginElement?.click();
    // }
}

