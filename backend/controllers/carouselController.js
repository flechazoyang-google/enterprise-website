const { pool } = require('../config/db');
const { sendSuccess, sendError } = require('../utils/response');

exports.getCarouselList = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM carousel ORDER BY id ASC');
    sendSuccess(res, rows, '轮播图数据获取成功');
  } catch (error) {
    console.error('获取轮播图失败：', error);
    sendError(res, '轮播图数据获取失败');
  }
};
