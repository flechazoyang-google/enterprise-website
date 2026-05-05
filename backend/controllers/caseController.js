const { pool } = require('../config/db');
const { sendSuccess, sendError } = require('../utils/response');

exports.getCaseList = async (req, res) => {
  try {
    const { page, limit } = req.query;

    if (page && limit) {
      const offset = (parseInt(page) - 1) * parseInt(limit);
      const [rows] = await pool.query('SELECT id, name, img_url, `desc` FROM customer_cases ORDER BY id ASC LIMIT ? OFFSET ?', [parseInt(limit), offset]);
      const [countRows] = await pool.query('SELECT COUNT(*) as total FROM customer_cases');
      sendSuccess(res, {
        list: rows,
        total: countRows[0].total,
        page: parseInt(page),
        limit: parseInt(limit)
      }, '客户案例数据获取成功');
    } else {
      const [rows] = await pool.query('SELECT id, name, img_url, `desc` FROM customer_cases ORDER BY id ASC');
      sendSuccess(res, rows, '客户案例数据获取成功');
    }
  } catch (error) {
    console.error('获取客户案例失败：', error);
    sendError(res, '客户案例数据获取失败');
  }
};
