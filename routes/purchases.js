const express = require('express');
const router = express.Router();

const { getAllPurchases, deleteAllPurchases, createPurchase, getPurchase, updatePurchase, deletePurchase } = require('../controllers/purchaseControllers');

router.route('/').get(getAllPurchases).post(createPurchase).delete(deleteAllPurchases);
router.route('/:id').get(getPurchase).patch(updatePurchase).delete(deletePurchase);

module.exports = router;