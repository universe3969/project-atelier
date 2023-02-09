import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Carousel from '../Carousel.jsx';

const products = [
  {
    avgRating: 3.2,
    info: {
      id: 37311,
      name: 'Summer Shirt',
      category: 'Blouse'
    },
    styles: {
      results: [{
        'default?': true,
        original_price: '150',
        photos: [
          {
            thumbnail_url: 'https://picsum.photos/200/300',
            url: 'https://picsum.photos/600/800'
          },
          {
            thumbnail_url: 'https://picsum.photos/300/200',
            url: 'https://picsum.photos/800/600'
          },
        ]
      }]
    }
  },
  {
    avgRating: 4.5,
    info: {
      id: 37312,
      name: 'Denim Jeans',
      category: 'Pants'
    },
    styles: {
      results: [{
        'default?': false,
        original_price: '90',
        photos: [
          {
            thumbnail_url: 'https://picsum.photos/400/500',
            url: 'https://picsum.photos/700/900'
          },
          {
            thumbnail_url: 'https://picsum.photos/450/350',
            url: 'https://picsum.photos/850/650'
          },
        ]
      }]
    }
  },
];

const renderComponent = (type, clickButton, changeProduct, addProduct) => {
  render(
    <Carousel
      items={products}
      removedId='37317'
      type={type}
      onButtonClick={clickButton}
      onChangeProduct={changeProduct}
      onAddProduct={addProduct}
    />
  );
};

test('render all related product cards in carousel', () => {
  renderComponent('relatedProducts');
  const cards = screen.getAllByTestId('card-wrapper');
  expect(cards.length).toEqual(2);
});

test('it calls onAddProduct when add to outfit card is clicked', () => {
  const mock = jest.fn();
  renderComponent('yourOutfit', undefined, undefined, mock);

  const addCard = screen.getByTestId('add-product-function');
  fireEvent.click(addCard);
  expect(mock).toHaveBeenCalled();
});