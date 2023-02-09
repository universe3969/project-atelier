import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { rest } from 'msw';
import { server } from '../../../mocks/server';
import RelatedItemsAndOutfitCreation from '../RelatedItemsAndOutfitCreation.jsx';

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
    <RelatedItemsAndOutfitCreation
      currentProductId='37311'
      product={product}
      onChangeProduct={changeProduct}
    />
  );
};

test('render headers of related products and your outfit', () => {
  renderComponent();

  const relatedProductText = screen.getByText(/related products/i);
  const yourOutfitText = screen.getByText(/your outfit/i);

  expect(relatedProductText).toBeInTheDocument();
  expect(yourOutfitText).toBeInTheDocument();
});

test('render two carousel compnents', async () => {
  server.resetHandlers(
    rest.get('http://localhost:3000/api/relatedProducts/37311', (req, res, ctx) =>
      res(ctx.status(500))
    )
  );
  renderComponent();

  const carousels = await screen.findAllByTestId('carousel-test');
});