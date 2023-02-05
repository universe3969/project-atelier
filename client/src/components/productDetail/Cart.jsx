import React, {useState, useEffect} from 'react';

export default function Cart ({styles, styleId, currStyle}) {
  const [selectedSize, setSelectedSize] = useState();
  const [selectedQuantity, setSelectedQuantity] = useState();

  let storageArr = [];
  let size, quantity;
  let sizeIndex = 0;
  let quantityIndex = 0;

  if (currStyle) {
    let storageObj = currStyle.skus;
    for (let key in storageObj) {
      storageArr.push(storageObj[key]);
    }


    size = storageArr.map(storage => {

      return <option key={sizeIndex++} value={storage.size}>{storage.size}</option>
    })

    quantity = storageArr.map(storage => {
      return <option key={quantityIndex++} value={storage.quantity}>{storage.quantity}</option>
    })
  }

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setSelectedQuantity(event.target.value);
  };

  return (
    <div>
      <div className="cart-top">
        <select className="size-selection" value={selectedSize} onChange={handleSizeChange}>
          <option >SELECT SIZE</option>
          {size}
        </select>
        <select className="quantity-selection" value={selectedQuantity} onChange={handleQuantityChange}>
          <option >SELECT A NUMBER</option>
          {quantity}
        </select>
      </div>
      <div className="cart-bottom">
        <button className="addto-bag">ADD TO BAG</button>
        <button className="save">+</button>
      </div>
    </div>
  );
}