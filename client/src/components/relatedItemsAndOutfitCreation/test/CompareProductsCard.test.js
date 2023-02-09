import React from 'react';
import { render, screen } from '@testing-library/react';
import CompareProductsCard from '../CompareProductsCard.jsx';

const currentProduct = {
  info: {
    name: 'Blue Shoes',
    features: [
      {
        feature: 'Sole',
        value: 'Rubber'
      },
      {
        feature: 'Material',
        value: 'FullControlSkin'
      },
      {
        feature: 'Stitching',
        value: 'Double Stitch'
      }

    ]
  }
};
const comparingProduct = {
  info: {
    name: 'Camo Onesie',
    features: [
      {
        feature: 'Fabric',
        value: 'Canvasr'
      },
      {
        feature: 'Buttons',
        value: 'Brass'
      },
      {
        feature: 'Stitching',
        value: 'Double Stitch'
      }

    ]
  }
};

test('render names of both current product and clicked on product', async () => {
  render(
    <CompareProductsCard
      comparingProducts={[currentProduct, comparingProduct]}
    />
  );

  const currentProductName = await screen.findByText(currentProduct.info.name);
  expect(currentProductName).toBeInTheDocument();
  const comparingProductName = await screen.findByText(comparingProduct.info.name);
  expect(comparingProductName).toBeInTheDocument();

});

test('render list of features for both current product and clicked on related product', () => {
  const { container } = render(
    <CompareProductsCard
      comparingProducts={[currentProduct, comparingProduct]}
    />
  );

  const rows = container.querySelectorAll('.feature');
  const checkMarks = container.querySelectorAll('.check-icon');
  const visibleCheckMarks = [];

  for (let el of checkMarks) {
    !el.style['0'] && visibleCheckMarks.push(el);
  }

  expect(visibleCheckMarks.length).toEqual(6);
  expect(rows.length).toEqual(5);
});
