import {Locator, Page} from "@playwright/test";

export class HomePage{
    readonly page: Page;
    readonly searchInput : Locator;

    constructor(page: Page){
        this.page = page;
        this.searchInput = page.locator("#search");
    }

    async navigate(){
        await this.page.goto("https://magento.softwaretestingboard.com/");
    }

    async searchShirtProduct(productName){
        await this.searchInput.fill(productName);
        await this.searchInput.press("Enter");
    }
}