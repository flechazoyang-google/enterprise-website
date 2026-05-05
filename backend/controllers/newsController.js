const { pool } = require('../config/db');
const { sendSuccess, sendError } = require('../utils/response');

exports.getNewsList = async (req, res) => {
  try {
    const { category, page, limit } = req.query;
    let sql = 'SELECT id, title, date, summary, category FROM news';
    let countSql = 'SELECT COUNT(*) as total FROM news';
    const params = [];
    const countParams = [];

    if (category && category.trim() !== '') {
      sql += ' WHERE category = ?';
      countSql += ' WHERE category = ?';
      params.push(category);
      countParams.push(category);
    }

    sql += ' ORDER BY date DESC';

    if (page && limit) {
      const offset = (parseInt(page) - 1) * parseInt(limit);
      sql += ' LIMIT ? OFFSET ?';
      params.push(parseInt(limit), offset);
    }

    const [rows] = await pool.query(sql, params);

    if (page && limit) {
      const [countRows] = await pool.query(countSql, countParams);
      sendSuccess(res, {
        list: rows,
        total: countRows[0].total,
        page: parseInt(page),
        limit: parseInt(limit)
      }, '新闻列表获取成功');
    } else {
      sendSuccess(res, rows, '新闻列表获取成功');
    }
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
