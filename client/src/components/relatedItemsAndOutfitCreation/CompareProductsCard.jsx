import React from 'react';
import { FiCheck } from 'react-icons/fi';
import './CompareProductsCard.scss';

const CompareProductsCard = ({ comparingProducts }) => {
  const [currentProduct, comparingProduct] = comparingProducts;

  const currentProductFeatures = currentProduct.info.features;
  const comparingProductFeatures = comparingProduct.info.features;

  const featureList = {};
  for (let i = 0; i < currentProductFeatures.length; i++) {
    const item = currentProductFeatures[i];
    if (!featureList.hasOwnProperty(item.feature)) {
      featureList[item.feature] = { value: item.value, currentProduct: 'yes' };
      const found = comparingProductFeatures.find(p => p.feature === item.feature);
      if (found) {
        featureList[item.feature].comparingProduct = found.value === item.value ? 'yes' : 'no';
      } else {
        featureList[item.feature].comparingProduct = 'no';
      }
    }
  }

  for (let i = 0; i < comparingProductFeatures.length; i++) {
    const item = comparingProductFeatures[i];
    if (!featureList.hasOwnProperty(item.feature)) {
      featureList[item.feature] = { value: item.value, comparingProduct: 'yes' };
      const found = currentProductFeatures.find(p => p.feature === item.feature);
      if (found) {
        featureList[item.feature].currentProduct = found.value === item.value ? 'yes' : 'no';
      } else {
        featureList[item.feature].currentProduct = 'no';
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