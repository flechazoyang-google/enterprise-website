const { pool } = require('../config/db');
const { successRes, errorRes } = require('../utils/response');

/**
 * 获取所有客户案例
 */
exports.getCaseList = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM customer_cases ORDER BY id ASC');
    res.json(successRes(rows, '客户案例数据获取成功'));
  } catch (error) {
    console.error('获取客户案例失败：', error);
    res.json(errorRes('客户案例数据获取失败'));
  }
};