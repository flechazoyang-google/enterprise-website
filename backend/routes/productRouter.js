const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// 获取产品列表
router.get('/products', productController.getProductList);
// 获取产品详情
router.get('/products/:id', productController.getProductDetail);

module.exports = router;