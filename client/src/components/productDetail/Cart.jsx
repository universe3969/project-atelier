import React, {useState, useEffect} from 'react';

export default function Cart ({styles, styleId, currStyle}) {
  const [selectedSize, setSelectedSize] = useState();
  const [selectedQuantity, setSelectedQuantity] = useState();

  let storageArr = [];
  let size, quantity;

  if (currStyle) {
    let storageObj = currStyle.skus;
    for (let key in storageObj) {
      storageArr.push(storageObj[key]);
    }

    size = storageArr.map(storage => {
      <option value={storage.size}>{storage.size}</option>
    })

    quantity = storageArr.map(storage => {
      <option value={storage.quantity}>{storage.quantity}</option>
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
          <option value="SELECT SIZE">SELECT SIZE</option>
          {size}
        </select>
        <select className="quantity-selection" value={selectedQuantity} onChange={handleQuantityChange}>
          <option value="SELECT A NUMBER">SELECT A NUMBER</option>
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