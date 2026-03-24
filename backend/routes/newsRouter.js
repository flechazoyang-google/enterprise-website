const express = require('express');
const router = express.Router();
const newsController = require('../controllers/newsController');

// 获取新闻列表
router.get('/news', newsController.getNewsList);
// 获取新闻详情
router.get('/news/:id', newsController.getNewsDetail);

module.exports = router;