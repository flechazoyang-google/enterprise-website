const express = require('express');
const router = express.Router();
const teamController = require('../controllers/teamController');

// 获取核心团队
router.get('/team', teamController.getTeamList);

module.exports = router;