const { pool } = require('../config/db');
const { sendSuccess, sendError } = require('../utils/response');

exports.getTimelineList = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM development_timeline ORDER BY year ASC');
    sendSuccess(res, rows, '发展历程数据获取成功');
  } catch (error) {
    console.error('获取发展历程失败：', error);
    sendError(res, '发展历程数据获取失败');
  }
};
