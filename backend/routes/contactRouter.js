const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

// 获取联系信息
router.get('/contact/info', contactController.getContactInfo);
// 提交留言
router.post('/contact/message', contactController.submitMessage);

module.exports = router;