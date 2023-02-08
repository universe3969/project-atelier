import React, {useState, useEffect} from 'react';
import Styles from './Styles.jsx';
import axios from 'axios';
import Gallery from './Gallery.jsx';
import ProductInfo from './ProductInfo.jsx';
import Cart from './Cart.jsx';
import AdditionalInfo from './AdditionalInfo.jsx';

const Overview = ({currentProduct}) => {

  // product info
  const [category, setCategory] = useState();
  const [productName, setProductName] = useState();
  const [defaultPrice, setDefaultPrice] = useState();
  const [slogan, setSlogan] = useState();
  const [avgRating, setAvgRating] = useState(currentProduct.avgRating);
  const [features, setFeatures] = useState();
  const [description, setDescription] = useState();
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
    setFeatures(currentProduct.info.features);
    setDescription(currentProduct.info.description)

    setStyles(currentProduct.styles.results);
    setStyleId(currentProduct.styles.results[0].style_id);
  }, []);


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

  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <div className="overview-container">
      <div className="overview-message-container">
        <div className="overview-message"><u className="master-card">APPLY FOR OUR MASTERCARD</u> — <em>GET UP TO 30% OFF YOUR NEXT ORDER</em> — </div>
      </div>
      <div className="overview-container-top">
        <div className="top-container-left">
          {photos ? <Gallery photos={photos} isZoomed={isZoomed} setIsZoomed={setIsZoomed}/> : null}
        </div>
        <div className={!isZoomed ? "top-container-right" : "top-container-right top-right-zoomed"}>
          <ProductInfo
          productName={productName} category={category} defaultPrice={defaultPrice}
          salesPrice={salesPrice} avgRating ={avgRating}
          />
          {styles ? <Styles styles={styles} styleName={styleName} styleId={styleId} setStyleId={setStyleId}/> : null}
          {styles && currStyle ? <Cart styles={styles} styleId={styleId} currStyle={currStyle}/> : null}
        </div>
      </div>
      <div className="overview-container-bottom">
        {slogan && features && description ? <AdditionalInfo slogan={slogan} features={features} description={description}/> : null}
      </div>
    </div>
    );
}


export default Overview;