import React, {useState, useEffect} from 'react';
import Styles from './Styles.jsx';
import axios from 'axios';
import ThumbnailList from './ThumbnailList.jsx';
import Thumbnail from './Thumbnail.jsx';
import ProductInfo from './ProductInfo.jsx';
import Cart from './Cart.jsx';

const Overview = ({productId}) => {
  const [category, setCategory] = useState();
  const [productName, setProductName] = useState();
  const [defaultPrice, setDefaultPrice] = useState();
  const [slogan, setSlogan] = useState();

  useEffect(() => {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/37311', //change to productId
    {
      headers: {
        Authorization: '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'
      }
    })
      .then(response => {
        // console.log(response.data); //product Obj
        setCategory(response.data.category);
        setProductName(response.data.name);
        setDefaultPrice(response.data.default_price);
        setSlogan(response.data.slogan);
      })
      .catch(err => {
        console.log('product num request error: ', err.message);
      });
  }, []);
  // console.log(category, productName, defaultPrice, slogan)

  const [styles, setStyles] = useState();
  const [styleId, setStyleId] = useState();

  useEffect(() => {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/37311/styles', //change to productId
    {
      headers: {
        Authorization: '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'
      }
    })
      .then(response => {
        console.log(response.data.results)
        setStyles(response.data.results);
        setStyleId(response.data.results[0].style_id);
      })
      .catch(err => {
        console.log('styles request err: ', err.message);
      });
  }, []);


  const [currStyle, setCurrStyle] = useState();
  const [photos, setPhotos] = useState();
  const [styleName, setStyleName] = useState();
  const [defaultState, setDefaultState] = useState();
  const [originalPrice, setOriginalPrice] = useState();
  const [salesPrice, setSalesPrice] = useState();

  // console.log(styles)

  useEffect(() => {
    if (styles) {
      setCurrStyle(styles.filter((style) => {
        return style.style_id === styleId;
      })[0])
    }
  }, [styles, styleId]);

  console.log(currStyle)

  useEffect(() => {
    if (currStyle) {
      setPhotos(currStyle.photos);
      setSalesPrice(currStyle.sale_price);
      setStyleName(currStyle.name)
    }
  }, [currStyle]);


  return (
    <div className="overview-container">
      <ThumbnailList photos={photos}/>
      <Thumbnail photos={photos}/>
      <div className="right-container">
        <ProductInfo productName={productName} category={category} defaultPrice={defaultPrice}/>
        {styles ? <Styles styles={styles} styleName={styleName} styleId={styleId} setStyleId={setStyleId}/> : null}
        {styles ? <Cart styles={styles} styleId={styleId} currStyle={currStyle}/> : null}
      </div>
    </div>
    );
  }


export default Overview;