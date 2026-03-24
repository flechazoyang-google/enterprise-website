const express = require('express');
const router = express.Router();
const caseController = require('../controllers/caseController');

// 获取客户案例列表
router.get('/cases', caseController.getCaseList);

module.exports = router;