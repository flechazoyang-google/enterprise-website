const { pool } = require('../config/db');
const { successRes, errorRes } = require('../utils/response');

/**
 * 获取所有轮播图数据
 */
exports.getCarouselList = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM carousel ORDER BY id ASC');
    res.json(successRes(rows, '轮播图数据获取成功'));
  } catch (error) {
    console.error('获取轮播图失败：', error);
    res.json(errorRes('轮播图数据获取失败'));
  }
};