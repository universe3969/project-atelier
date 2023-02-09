import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import RelatedProducts from '../RelatedProducts.jsx';

const product = {
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
};

const relatedProducts = [
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

const renderComponent = (changeProductAction) => {
  return render(
    <RelatedProducts
      currentProduct={product}
      relatedProducts={relatedProducts}
      onChangeProduct={changeProductAction}
    />
  );
};

test('render carousel component', () => {
  renderComponent();

  const carousel = screen.getByTestId('carousel-test');
  expect(carousel).toBeInTheDocument();
});

// test('it should open modal when click on star button', () => {
//   renderComponent();

//   const starButtons = screen.getAllByTestId('card-button-click-function');
//   fireEvent.click(starButtons[0]);

//   const modal = screen.getByTestId('comparing-modal');
//   expect(modal).toBeInTheDocument();
// });

// test('it should close modal when click outside the comparing modal', () => {
//   renderComponent();

//   const starButtons = screen.getAllByTestId('card-button-click-function');
//   fireEvent.click(starButtons[0]);

//   const backdrop = screen.getByTestId('close-modal');
//   fireEvent.click(backdrop);

//   const modal = screen.getByTestId('comparing-modal');
//   expect(modal).not.toBeInTheDocument();
// });

