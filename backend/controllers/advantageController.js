const { pool } = require('../config/db');
const { sendSuccess, sendError } = require('../utils/response');

exports.getAdvantageList = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM advantages ORDER BY id ASC');
    sendSuccess(res, rows, '核心优势数据获取成功');
  } catch (error) {
    console.error('获取核心优势失败：', error);
    sendError(res, '核心优势数据获取失败');
  }
};
