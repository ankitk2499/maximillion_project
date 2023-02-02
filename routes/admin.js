const path = require('path');
const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin');

router.get('/add-product', adminController.getAddProduct);

router.get('/admin-products', adminController.getProducts);

router.post('/add-product', adminController.postAddProduct);

router.get('/edit-product/:productId', adminController.getEditProduct);

router.post('/edit-product',adminController.postEditProduct)

router.post('/delete-product',adminController.deleteProduct)

module.exports = router;
