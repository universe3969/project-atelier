const {
  getProductInfo,
  getProductReview,
  getProductStyles,
  getRelatedProductIds,
  getQuestions
} = require('./api');

const getOverviewProduct = async (req, res) => {
  const { productId } = req.params;

  const info = await getProductInfo(productId);
  const styles = await getProductStyles(productId);
  const { reviews, avgRating } = await getProductReview(productId);
  const product = { info, styles, reviews, avgRating };
  res.status(200).send(product);
};

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

const getProductQuestionsAndAnswers = async (req, res) => {
  const { productId } = req.params;
  console.log(productId);


  let questions = [];
  let page = 1;
  let results = [];


  do {
    results = await getQuestions(productId, page);
    if (results.length) {
      questions = questions.concat(results);
    }
    page++;
  } while (results.length);


  questions = questions.sort((a, b) => b.question_helpfulness - a.question_helpfulness);
  res.status(200).send(questions);
};


module.exports = {
  getOverviewProduct,
  getRelatedProducts,
  getProductQuestionsAndAnswers
};