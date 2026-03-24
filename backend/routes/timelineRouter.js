const express = require('express');
const router = express.Router();
const timelineController = require('../controllers/timelineController');

// 获取发展历程
router.get('/timeline', timelineController.getTimelineList);

module.exports = router;