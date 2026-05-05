const { pool } = require('../config/db');
const { sendSuccess, sendError } = require('../utils/response');

exports.getProductList = async (req, res) => {
  try {
    const { category, page, limit } = req.query;
    let sql = 'SELECT id, name, `desc`, img_url, category FROM products';
    let countSql = 'SELECT COUNT(*) as total FROM products';
    const params = [];
    const countParams = [];

    if (category && category.trim() !== '') {
      sql += ' WHERE category = ?';
      countSql += ' WHERE category = ?';
      params.push(category);
      countParams.push(category);
    }

    sql += ' ORDER BY id ASC';

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
      }, '产品列表获取成功');
    } else {
      sendSuccess(res, rows, '产品列表获取成功');
    }
  } catch (error) {
    console.error('获取产品列表失败：', error);
    sendError(res, '产品列表获取失败');
  }
};

exports.getProductDetail = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id || !/^\d+$/.test(id)) {
      return sendError(res, '产品ID不合法', 400);
    }

    const [rows] = await pool.query('SELECT * FROM products WHERE id = ?', [id]);
    if (rows.length === 0) {
      return sendError(res, '该产品不存在', 404);
    }

    sendSuccess(res, rows[0], '产品详情获取成功');
  } catch (error) {
    console.error('获取产品详情失败：', error);
    sendError(res, '产品详情获取失败');
  }
};
