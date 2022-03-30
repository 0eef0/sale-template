const express = require('express');
const router = express.Router();

const { getAllProducts, deleteAllProducts, createProduct, getProduct, updateProduct, deleteProduct } = require('../controllers/productControllers');

router.route('/').get(getAllProducts).post(createProduct).delete(deleteAllProducts);
router.route('/:id').get(getProduct).patch(updateProduct).delete(deleteProduct);

module.exports = router;