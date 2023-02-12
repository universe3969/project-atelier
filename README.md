<div id="top"></div>



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
  </ol>
</details>

## Overview
Project Atelier is an application built with [React](https://reactjs.org/) and [Node.js](https://nodejs.org/en/). The app is used to show off products to potential customers and allow them to purchase the products.

![Atelier](./images/project-atelier.png?raw=true "Title")

This project is about designing the retail portal to implement below mentioned features:

## Product Detail
The Product Detail displays the general information about the product, and contains Star Rating, Product Category, Product Title, Price, Product Overview, Social media.

+ Image gallery 
+ Product information
+ Style selector
+ Add to cart

This component will guide the customer through selecting a specific style and size to add to their cart.
  
  <p align="right">(<a href="#top">back to top</a>)</p>

## Related Items and Outfit Creation
The Related Items & Comparison module will display two sets of related products. The first set will be a list of products, determined internally, that are related to the product currently being viewed. The second set will be a list, custom created by the user, of products which the user has grouped with the current product into an ‘outfit’. 
  + Related Product
    - The related product list display products which have been associated with the current product by the company.
    - The product card itself will be clickable. Clicking the card will navigate to the detail page for that product.
  + Your Outfit
    * The outfit list contain products which the user has selected to group together as an outfit.
    * The current product will be added to the list when a user explicitly clicks on Add to Outfit card.
    
 <p align="right">(<a href="#top">back to top</a>)</p>
 
## Questions and Answers
The Questions & Answers module will allow asking and answering of questions for the product selected. The module contains following components:
  + View questions
  + Search for a question
  + Asking a question
  + Answering a question
  
This component will extend the ability to view and search questions, ask questions, answer questions and provide feedback on questions about the current product.
  
<p align="right">(<a href="#top">back to top</a>)</p>

## Ratings and Reviews
The Ratings & Reviews module will allow viewing and submission of reviews for the product selected. This module contains the following modules:
 + Write new review
    * A button 'write a review' at the bottom will appear allowing users to create a new review for the product. 
 + Reviews List
  - This is the heart of this module which will list reviews available for the user to read.
  - The list displays 2 titles at a time. There is a 'show more' button which adds 2 more reviews on click and the same button will be 'show less' where there is no more reviews to display and 'show less' button will bring the list back to default state.
  - There is an option to sort the reviews by helpful, relevance or newest.
 + Rating Breakdown
   - The rating breakdown displays average rating and individual star bars which on click filters the review list with only that star type rating. The click is addidtive if you jump after one click on the particular star to another star but if you double click on the same star, it brings the review list to default state.
 + Product Breakdown
   - The average feedback received will be displayed for all characteristics which apply to the product. 

<p align="right">(<a href="#top">back to top</a>)</p>

## Usage
The main purpose of this repository is for education and practicing building React application. 


## Installation
1. Create Github personal access token [here](https://www.google.com).

2. Fork and clone this repo, then open the terminal and navigate to the project root directory.

3. Change config.example.js file to config.js, and change to your Github access token.
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

<p align="right">(<a href="#top">back to top</a>)</p>

## Contact
#### Creators:
  + [Sajana Balal](https://github.com/SajanaB)
  + [YuHeng Jiang](https://www.linkedin.com)
  + [Louise Ly](https://www.linkedin.com)

<p align="right">(<a href="#top">back to top</a>)</p>
