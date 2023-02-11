## Project Atelier

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#overview">Overview</a>
      <ul>
        <li><a href="#product-detail">Product Detail</a></li>
        <li><a href="#related-items-and-outfit-creation">Related Items & Outfit Creation</a></li>
        <li><a href="#questions-and-answers">Questions & Answers</a></li>
        <li><a href="#ratings-and-reviews">Ratings & Reviews</a></li>
      </ul>
    </li>
    <li>
      <a href="#installation">Installation</a>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

## Overview
Project Atelier is an application built with [React](https://reactjs.org/) and [Node.js](https://nodejs.org/en/). The app is used to show off products to potential customers and allow them to purchase the products.


![Atelier](./project-atelier.png?raw=true "Title")

This project is about designing the retail portal to implement below mentioned features:

> ### Product Detail
+ The Product Detail displays the general information about the product, and contains following components:
  - Image gallery 
  - Product information
  - Style selector
  - Add to cart

> ### Related Items and Outfit Creation
+ The Related Items & Comparison module will display two sets of related products. The first set will be a list of products, determined internally, that are related to the product currently being viewed. The second set will be a list, custom created by the user, of products which the user has grouped with the current product into an ‘outfit’. 
  - Related Product
    * The related product list display products which have been associated with the current product by the company.
    * The product card itself will be clickable. Clicking the card will navigate to the detail page for that product.
  - Your Outfit
    * The outfit list contain products which the user has selected to group together as an outfit.
    * The current product will be added to the list when a user explicitly clicks on Add to Outfit card.
> ### Questions and Answers
+ The Questions & Answers module will allow asking and answering of questions for the product selected. The module contains following components:
  - View questions
  - Search for a question
  - Asking a question
  - Answering a question
> ### Ratings and Reviews
+ The Ratings & Reviews module will allow viewing and submission of reviews for the product selected. This module contains the following modules:
  - Write new review
  - Reviews List
  - Sorting 
  - Rating Breakdown
  - Product Breakdown

## Usage
The main purpose of this repository is for education and practicing building React application. 


## Installation
1. Create Github personal access token [here](https://www.google.com).

2. Fork and clone this repo, then open the terminal and navigate to the project root directory.

3. Open config.js and change to your Github access token.
```js
   TOKEN ='YOUR TOKEN'
```

4. In the terminal run the following scripts:

```
npm install
npm run build
npm start
```

5. Navigate to [localhost:3000](http://localhost:3000) in the browser.

