import { test, expect } from "playwright/test";
import { HomePage } from "../src/pages/HomePage";
import { SearchResultPage } from "../src/pages/SearchResultPage";
import { ProductPage } from "../src/pages/ProductPage";

test(`TC1 - Add a product to the cart successfully`, async ({ page }) => {

    const homePage = new HomePage(page);
    const searchResultPage = new SearchResultPage(page);
    const productPage = new ProductPage(page);

    await homePage.navigate();
    await homePage.searchShirtProduct("Shirt");

    await searchResultPage.clickOnProduct("Balboa Persistence Tee ");
    await productPage.clickOnSize();
    await productPage.clickOnColor();

    await productPage.clickOnAddToCart();

    let addToCardTitle = await productPage.getAddToCartTitle();
    expect(addToCardTitle).toContain("Added");

    let cartCounter = await productPage.getCartCounter();
    expect(cartCounter).toEqual("1");
});