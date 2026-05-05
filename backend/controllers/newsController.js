const { pool } = require('../config/db');
const { sendSuccess, sendError } = require('../utils/response');

exports.getNewsList = async (req, res) => {
  try {
    const { category } = req.query;
    let sql = 'SELECT id, title, date, summary, category FROM news ORDER BY date DESC';
    const params = [];

    if (category && category.trim() !== '') {
      sql = 'SELECT id, title, date, summary, category FROM news WHERE category = ? ORDER BY date DESC';
      params.push(category);
    }

    const [rows] = await pool.query(sql, params);
    sendSuccess(res, rows, '新闻列表获取成功');
  } catch (error) {
    console.error('获取新闻列表失败：', error);
    sendError(res, '新闻列表获取失败');
  }
};

exports.getNewsDetail = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id || !/^\d+$/.test(id)) {
      return sendError(res, '新闻ID不合法', 400);
    }

    const [rows] = await pool.query('SELECT * FROM news WHERE id = ?', [id]);
    if (rows.length === 0) {
      return sendError(res, '该新闻不存在', 404);
    }

    sendSuccess(res, rows[0], '新闻详情获取成功');
  } catch (error) {
    console.error('获取新闻详情失败：', error);
    sendError(res, '新闻详情获取失败');
  }
};
