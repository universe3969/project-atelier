import React from 'react';
import { FiCheck } from 'react-icons/fi';
import './CompareProductsCard.scss';

const CompareProductsCard = ({ comparingProducts }) => {
  const [currentProduct, comparingProduct] = comparingProducts;

  const currentProductFeatures = currentProduct.info.features;
  const comparingProductFeatures = comparingProduct.info.features;

  const length = currentProductFeatures.length > comparingProductFeatures.length
    ? currentProductFeatures.length : comparingProductFeatures.length;

  const featureList = {};
  for (let i = 0; i < length; i++) {
    if (currentProductFeatures[i]) {
      let currentFeature = currentProductFeatures[i];
      featureList[currentFeature.feature] = {
        value: currentFeature.value,
        currentProduct: 'yes'
      };
      if (comparingProductFeatures.hasOwnProperty(currentFeature.feature)
      && comparingProductFeatures[currentFeature.feature].value ===
      featureList[currentFeature.feature].value) {
        featureList[currentFeature.feature].comparingProduct = 'yes';
      } else {
        featureList[currentFeature.feature].comparingProduct = 'no';
      }
    }
    if (comparingProductFeatures[i]) {
      let currentFeature = comparingProductFeatures[i];
      featureList[currentFeature.feature] = {
        value: currentFeature.value,
        comparingProduct: 'yes'
      };
      if (currentProductFeatures.hasOwnProperty(currentFeature.feature)
      && currentProductFeatures[currentFeature.feature].value ===
      featureList[currentFeature.feature].value) {
        featureList[currentFeature.feature].currentProduct = 'yes';
      } else {
        featureList[currentFeature.feature].currentProduct = 'no';
      }
    }
  }

  let renderedComparingFeatures = [];
  for (let key in featureList) {
    const value = featureList[key].value ? featureList[key].value : '';
    renderedComparingFeatures.push(
      <div key={key} className='feature'>
        {featureList[key].currentProduct === 'yes'
          ? <div className='check-icon'><FiCheck/></div>
          : <div className='check-icon' style={{ color: 'transparent' }}><FiCheck/></div>
        }
        <div className='feature-detail'>{value + ' ' + key}</div>
        {featureList[key].comparingProduct === 'yes'
          ? <div className='check-icon'><FiCheck/></div>
          : <div className='check-icon' style={{ color: 'transparent' }}><FiCheck/></div>
        }
      </div>
    );
  }

  return (
    <div className='comparison-container'>
      <h4>COMPARING</h4>
      <div className='header'>
        <div className='product-name'>{currentProduct.info.name}</div>
        <div className='product-name'>{comparingProduct.info.name}</div>
      </div>
      <div>
        {renderedComparingFeatures}
      </div>
    </div>
  );
};

export default CompareProductsCard;