import React, {useState, useEffect} from 'react';
import Styles from './Styles.jsx';
import axios from 'axios';
import Gallery from './Gallery.jsx';
import Thumbnail from './Thumbnail.jsx';
import ProductInfo from './ProductInfo.jsx';
import Cart from './Cart.jsx';

const Overview = ({currentProduct}) => {

  // product info
  const [category, setCategory] = useState();
  const [productName, setProductName] = useState();
  const [defaultPrice, setDefaultPrice] = useState();
  const [slogan, setSlogan] = useState();
  const [avgRating, setAvgRating] = useState();
  // product styles
  const [styles, setStyles] = useState();
  const [styleId, setStyleId] = useState();

  // states on 1 style
  const [currStyle, setCurrStyle] = useState();
  const [photos, setPhotos] = useState();
  const [styleName, setStyleName] = useState();
  const [defaultState, setDefaultState] = useState();
  const [originalPrice, setOriginalPrice] = useState();
  const [salesPrice, setSalesPrice] = useState();

  useEffect(() => {
    setCategory(currentProduct.info.category);
    setProductName(currentProduct.info.name);
    setDefaultPrice(currentProduct.info.default_price);
    setSlogan(currentProduct.info.slogan);

    setStyles(currentProduct.styles.results);
    setStyleId(currentProduct.styles.results[0].style_id);
  }, []);
  // console.log(category, productName, defaultPrice, slogan)





  console.log(styles)

  useEffect(() => {
    if (styles) {
      setCurrStyle(styles.filter((style) => {
        return style.style_id === styleId;
      })[0]);
    }
  }, [styles, styleId]);



  useEffect(() => {
    if (currStyle) {
      setPhotos(currStyle.photos);
      setSalesPrice(currStyle.sale_price);
      setStyleName(currStyle.name)
    }
  }, [currStyle]);


  return (
    <div className="overview-container">
      <Gallery photos={photos}/>
      <Thumbnail photos={photos}/>
      <div className="right-container">
        <ProductInfo productName={productName} category={category} defaultPrice={defaultPrice} salesPrice={salesPrice}/>
        {styles ? <Styles styles={styles} styleName={styleName} styleId={styleId} setStyleId={setStyleId}/> : null}
        {styles ? <Cart styles={styles} styleId={styleId} currStyle={currStyle}/> : null}
      </div>
    </div>
    );
}


export default Overview;