# MyStore: An Angular E-commerce Site (Fullfillment of Udacity's Angular Development Nanodegree)

## Project Description

An Angular E-commerce website that allows the user to shop from the avaiable products, add products to cart and submit a validated billing form to finish the checkout process.

### Operational Steps

To Start the project, You should follow the following steps:

1- Install project's dependencies using:
```
npm install
```

2- Then, start running the project using:
```
ng serve
```

3- You can then shop for products on the website.

<br>

### Project's Notes

1- The project was divided logically into separate components.

2- The project has 3 services: cart, product & user services.

3- The input & output decorators were used to send data from "parent to child" and "child to parent" respectivly.

4- The user can add products to cart through either the products (main) page or product-details page.

5- When the user reduces the quantity of a product in the cart to 0, the product is automatically removed from the cart and the user is alerted to that change.

6- The cart's checkout-form is validated using Angualr's form validators.

7- When the form is successfully submitted, the user is redirected to the confirmation page.

8- As the user changes the quantity of any product in the cart, the total charge changes to reflect the current charge.
