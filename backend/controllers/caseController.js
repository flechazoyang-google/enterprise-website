const { pool } = require('../config/db');
const { sendSuccess, sendError } = require('../utils/response');

exports.getCaseList = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM customer_cases ORDER BY id ASC');
    sendSuccess(res, rows, '客户案例数据获取成功');
  } catch (error) {
    console.error('获取客户案例失败：', error);
    sendError(res, '客户案例数据获取失败');
  }
};
