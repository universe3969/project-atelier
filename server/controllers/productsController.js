const {
  getProductInfo,
  getProductReview,
  getProductStyles
} = require('../api');

const getOverviewProduct = async (req, res) => {
  const { productId } = req.params;

  try {
    const info = await getProductInfo(productId);
    const styles = await getProductStyles(productId);
    const { reviews, avgRating } = await getProductReview(productId, 'relevant', 100);
    const product = { info, styles, reviews, avgRating };
    res.status(200).send(product);
  } catch (err) {
    console.log(err.message);
    res.status(400).send('Product not found');
  }
};

module.exports = getOverviewProduct;