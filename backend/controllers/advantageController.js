const { pool } = require('../config/db');
const { successRes, errorRes } = require('../utils/response');

/**
 * 获取所有核心优势
 */
exports.getAdvantageList = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM advantages ORDER BY id ASC');
    res.json(successRes(rows, '核心优势数据获取成功'));
  } catch (error) {
    console.error('获取核心优势失败：', error);
    res.json(errorRes('核心优势数据获取失败'));
  }
};