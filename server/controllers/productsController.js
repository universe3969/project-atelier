const {
  getProductInfo,
  getProductReview,
  getProductStyles
} = require('../api');

const getOverviewProduct = async (req, res) => {
  const { productId } = req.params;

  const info = await getProductInfo(productId);
  const styles = await getProductStyles(productId);
  const { reviews, avgRating } = await getProductReview(productId);
  const product = { info, styles, reviews, avgRating };
  res.status(200).send(product);
};

module.exports = getOverviewProduct;