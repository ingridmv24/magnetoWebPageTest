import {Locator, Page} from "@playwright/test";

export class ProductPage{
    readonly page: Page;
    readonly sizeButton : Locator;
    readonly colorButton : Locator;
    readonly addToCartButton : Locator;
    readonly addToCartTitle : Locator;
    readonly cartCounter : Locator;

    constructor(page: Page){
        this.page = page;
        this.sizeButton = page.locator("#option-label-size-143-item-166");
        this.colorButton = page.locator("#option-label-color-93-item-52");
        this.addToCartButton = page.locator("#product-addtocart-button");
        this.cartCounter = page.locator(".counter-number");
    }

    async clickOnSize(){
        await this.sizeButton.click();
    }

    async clickOnColor(){
        await this.colorButton.click();
    }

    async clickOnAddToCart(){
        await this.addToCartButton.click();
    }

    async getAddToCartTitle(){
        await this.addToCartButton.waitFor({ state: "visible" }); // Espera a que sea visible

        // Utilizar getByRole para verificar el texto del botón
        const cartTitleButton = await this.addToCartButton.filter({ hasText: "Added" });

        // Esperar hasta que el botón esté visible y contenga el texto esperado
        await cartTitleButton.waitFor({ state: "visible" });

        // Obtener el texto del botón
        let cartTitle = await cartTitleButton.textContent();
        
        if (cartTitle !== null && cartTitle !== undefined) { // it could be replaced by return title?.trim();
            return cartTitle.trim();
        }
        // reutn "No title available" instead of undefined
        return "No title available";
    }

    async getCartCounter(){
        await this.cartCounter.waitFor({state : "visible"});
        await this.cartCounter.textContent();
    }
}