const { pool } = require('../config/db');
const { successRes, errorRes } = require('../utils/response');

/**
 * 获取发展历程
 */
exports.getTimelineList = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM development_timeline ORDER BY year ASC');
    res.json(successRes(rows, '发展历程数据获取成功'));
  } catch (error) {
    console.error('获取发展历程失败：', error);
    res.json(errorRes('发展历程数据获取失败'));
  }
};