import {Locator, Page} from "@playwright/test";

export class SearchResultPage{
    readonly page: Page;
    readonly productsItemList : Locator;
    //readonly product : Locator;
    readonly sizeButton : Locator;
    readonly colorButton : Locator;
    readonly addToCartButton : Locator;
    readonly addToCartTitle : Locator;

    constructor(page: Page){
        this.page = page;
        //this.product = page.locator("//a[contains(text(),'Balboa')and @class='product-item-link']");
        this.productsItemList = page.locator("li.product-item");
        this.sizeButton = page.locator("#option-label-size-143-item-166");
        this.colorButton = page.locator("#option-label-color-93-item-52");
        this.addToCartButton = page.locator("#product-addtocart-button");
        this.addToCartTitle = page.locator("button#product-addtocart-button");
    }

    async getProductsList(){
        let list : string[] = [];

        for(let i = 0; i < await this.productsItemList.count(); i++)
        {
            let productLink  = await this.productsItemList.nth(i).getByRole("link")
            let productName = await productLink.textContent();
            if(productName != null)
            {
                list.push(productName.trim()); //for removing  any spaces
            }
        }
        return list;
    }

    async clickOnProduct(productName){
        await this.productsItemList.getByText(productName.trim()).click();
    }
}