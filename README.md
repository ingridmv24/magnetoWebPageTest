# Magneto web page Test Automation

## Description
This project automates the following scenario with Typescript and Playwright framework:

URL: https://magento.softwaretestingboard.com

- Navigate to the site.
- Type “shirt” in the search engine and run the search.
- Find the shirt with the text “Balboa” in the name among the results, not by index.
- Click on the product.
- Select any size.
- Select any color.
- Click on the add to cart button.
- Validate that the text of the add button says “Added”.
- Validate that the cart counter, next to the search input, says “1"