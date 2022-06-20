# Pizza Parlor

_Epicodus Week 4 - Friday Prompt_

#### By _**Filmer Tolentino**_

## Technologies Used

* _HTML_
* _CSS_
* _Bootstrap_
* _JS_
* _jQuery_
* _Github_

## Description/Goals

_Create a website for a pizza company where a user can choose one or more individual toppings (cheese, pepperoni, artichoke, anchovy, etc) and a size to order a pizza and see the final cost._

## Objectives
* Constructors and prototypes are used successfully.
* Application works as expected.
* Tests are included for each business logic behavior and code is committed after each test passes.
* Project is in a polished, portfolio-quality state.
* The prompt’s required functionality and baseline project requirements are in place by the deadline.

## Setup/Installation Requirements

* _git clone **repository link**, to your local machine._
* _requires an internet connection to run (Bootstrap and jQuery are using a CDN)_
* _open the index.html file in your browser, or run Go Live in VS Code to run the code on your local host._

## Link to website hosted on gh-pages

_[Check out the website](https://ftolentino.github.io/)_


## Known Bugs
N/A

## Specs/TDD

```
Description: Pizza() Constructor Object

Test: Return a Pizza object with two properties for toppings and size
Code: const pizzaOrder = new Pizza(["pepperoni", "black olives"], "large");
Expected Output: Pizza { toppings: ["pepperoni", "black olives"], size: "large" }

Description: selectSize() Pizza prototype

Test: Checks the value of selected size and assigns it to the Pizza constructor size property
Code: pizza.selectSize();
Expected Output: size: small, medium, or large

Description: selectToppings() Pizza prototype

Test: Map through each toppings checkbox input and return it's value into an array
Code: pizza.selectToppings();
Expected Output: toppings: [...]

```

## License
* MIT

_If you run into any issues or have any concerns, feel free to [Contact me: filmer.tolentino@gmail.com](mailto:filmer.tolentino@gmail.com), or request to make any contributions to my code._ 

Copyright (c) _5/27/2022_ _Filmer Tolentino_