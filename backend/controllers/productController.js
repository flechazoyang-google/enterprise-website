const { pool } = require('../config/db');
const { sendSuccess, sendError } = require('../utils/response');

exports.getProductList = async (req, res) => {
  try {
    const { category } = req.query;
    let sql = 'SELECT id, name, `desc`, img_url, category FROM products ORDER BY id ASC';
    const params = [];

    if (category && category.trim() !== '') {
      sql = 'SELECT id, name, `desc`, img_url, category FROM products WHERE category = ? ORDER BY id ASC';
      params.push(category);
    }

    const [rows] = await pool.query(sql, params);
    sendSuccess(res, rows, '产品列表获取成功');
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
