import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import YourOutfit from '../YourOutfit.jsx';

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

const renderComponent = (changeProduct) => {
  return render(
    <YourOutfit
      currentProduct={product}
      productId='37317'
      onChangeProduct={changeProduct}
    />
  );
};

test('render carousel component', () => {
  renderComponent();

  const carousel = screen.getByTestId('carousel-test');
  expect(carousel).toBeInTheDocument();
});

test('render only add to outfit card when first loaded', () => {
  const { container } = renderComponent();

  const addToOutfit = screen.getByTestId('add-product-function');
  const productCards = container.querySelectorAll('.card-wrapper');

  expect(addToOutfit).toBeInTheDocument();
  expect(productCards).toHaveLength(1);
});

