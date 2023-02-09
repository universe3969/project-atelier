import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductCard from '../ProductCard.jsx';

const renderComponent = () => {
  const product = {
    avgRating: 3.5,
    info: {
      id: 37311,
      name: 'Summer Shirt'
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

  render(
    <ProductCard
      type='relatedProducts'
      product={product}
      onButtonClick={(id) => { console.log(id); }}
    />
  );

  return { product };
};

test('render the all card product details', async () => {
  const { product } = renderComponent();
  const { avgRating, styles, info } = product;

  const productName = await screen.findByText(info.name);
  // const productPrice = screen.getByText(`${styles[0].original_price}`);

  expect(productName).toBeInTheDocument();
  // expect(productPrice).toBeInTheDocument();
});