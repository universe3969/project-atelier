import React, {useState, useEffect} from 'react';
import {AiOutlineHeart} from 'react-icons/ai';

export default function Cart ({currStyle}) {
  const {skus} = currStyle;
  const [sku, setSku] = useState();
  const [availableQty, setAvailableQty] = useState();

  const sizeMenu = [<option value='0' key='0'>Select Size</option>]
  for (let sku in skus) {
    const option = <option value={sku} key={sku}>{skus[sku].size}</option>;
    sizeMenu.push(option);
  }
  const handleSizeChange = (event) => {
    console.log(event.target.value)
    setSku(event.target.value)
  };

  const quantity = skus[sku] ? skus[sku].quantity : 0;
  const quantityMenu = [<option value='-1' key='-1'>Select Quantity</option>]
  for (let i = 0; i < quantity; i++) {
    const option = <option value={i} key={i}>-{i}-</option>
    quantityMenu.push(option);
  }
  // const handleQuantityChange = (event) => {
  //   connsole.log(event.target)
  // }

  return (
    <div className="cart-container">
      <div className="cart-top">
        <select className="size-selection" onChange={handleSizeChange}>
          {sizeMenu}
        </select>
        <select className="quantity-selection" >
          {quantityMenu}
        </select>
      </div>
      <div className="cart-bottom">
        <button className="addto-bag">ADD TO BAG</button>
        <button className="save-to-bag"><AiOutlineHeart className="save-heart"/></button>
      </div>
    </div>
  );
}