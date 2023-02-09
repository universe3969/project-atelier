import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ProductCard from '../ProductCard.jsx';

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

const renderComponent = (buttonClickAction, changeProductClick) => {
  render(
    <ProductCard
      type='relatedProducts'
      product={product}
      onButtonClick={buttonClickAction}
      onChangeProduct={changeProductClick}
    />
  );
};

test('render the all card product details', () => {
  renderComponent();
  const { avgRating, styles, info } = product;

  const productName = screen.getByText(info.name);
  const productPrice = screen.getByText(`$${styles.results[0].original_price}`);

  expect(productName).toBeInTheDocument();
  expect(productPrice).toBeInTheDocument();
});

test('render all style images of product card', () => {
  renderComponent();
  const { styles } = product;
  const [firstImage, secondImage] = styles.results[0].photos;

  const imageEls = screen.getAllByRole('img');
  expect(imageEls[0].src).toEqual(firstImage.thumbnail_url);
  expect(imageEls[1].src).toEqual(secondImage.thumbnail_url);
});

test('render correct star rating on card product detail', () => {
  renderComponent();
  const { avgRating } = product;

  const stars = screen.getAllByTestId('inner-star-test');
  const filledStars = [];

  for (let el of stars) {
    filledStars.push(Math.round(+el.style._values.width.slice(0, -1)));
  }

  expect(filledStars).toEqual([100, 100, 100, 20, 0]);
});

test('it calls onChangeProduct when card is clicked', () => {
  const mock = jest.fn();
  renderComponent(undefined, mock);

  const cardProductDetails = screen.getAllByTestId('product-detail-click-function');
  const cardImages = screen.getAllByTestId('product-card-click-function');

  fireEvent.click(cardProductDetails[0]);
  expect(mock).toBeCalled();

  fireEvent.click(cardImages[0]);
  expect(mock).toBeCalled();
});

test('it calls onButtonClick when card right top button is click', () => {
  const mock = jest.fn();
  renderComponent(mock);

  const buttons = screen.getAllByTestId('card-button-click-function');
  fireEvent.click(buttons[0]);
  expect(mock).toBeCalled();
});