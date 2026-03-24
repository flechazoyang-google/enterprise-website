const express = require('express');
const router = express.Router();
const companyController = require('../controllers/companyController');

// 获取企业简介
router.get('/company/intro', companyController.getCompanyIntro);
// 获取企业文化
router.get('/company/culture', companyController.getCompanyCulture);

module.exports = router;