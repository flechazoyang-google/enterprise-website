const express = require('express');
const router = express.Router();
const advantageController = require('../controllers/advantageController');

// 获取核心优势列表
router.get('/advantages', advantageController.getAdvantageList);

module.exports = router;