const express = require('express');
const router = express.Router();
const carouselController = require('../controllers/carouselController');

// 获取轮播图列表
router.get('/carousel', carouselController.getCarouselList);

module.exports = router;