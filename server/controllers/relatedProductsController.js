const {
  getProductInfo,
  getProductReview,
  getProductStyles,
  getRelatedProductIds
} = require('../api');

const getRelatedProducts = async (req, res) => {
  const { productId } = req.params;

  const productIds = await getRelatedProductIds(productId);
  const products = await Promise.all(productIds.map(id => getProductInfo(id)));

  const styles = await Promise.all(products.map(product => getProductStyles(product.id)));
  const productsReviews = await Promise.all(productIds.map(id => getProductReview(id)));

  const relatedProducts = productIds.map(id => {
    const { reviews, avgRating } = productsReviews
      .filter(({ reviews }) => +reviews.product === id)[0];

    return {
      info: products.filter(product => product.id === id)[0],
      styles: styles.filter(style => +style.product_id === id)[0],
      reviews,
      avgRating
    };
  });
  res.status(200).send(relatedProducts);
};

module.exports = getRelatedProducts;