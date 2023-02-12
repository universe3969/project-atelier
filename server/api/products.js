const instance = require('./instance');
const { PRODUCT_URL } = require('../config');

const getProductInfo = (productId) => {
  return instance.get(`${PRODUCT_URL}/${productId}`)
    .then(({ data }) => data);
};

const getProductStyles = (productId) => {
  return instance.get(`${PRODUCT_URL}/${productId}/styles`)
    .then(({ data }) => data);
};

const getRelatedProductIds = (productId) => {
  return instance.get(`${PRODUCT_URL}/${productId}/related`)
    .then(({ data }) => data);
};

module.exports = {
  getProductInfo,
  getProductStyles,
  getRelatedProductIds
};