const { pool } = require('../config/db');
const { successRes, errorRes } = require('../utils/response');

/**
 * 获取产品列表（支持分类筛选）
 */
exports.getProductList = async (req, res) => {
  try {
    const { category } = req.query;
    let sql = 'SELECT id, name, `desc`, img_url, category FROM products ORDER BY id ASC';
    const params = [];
    
    // 如果有分类筛选条件
    if (category && category.trim() !== '') {
      sql = 'SELECT id, name, `desc`, img_url, category FROM products WHERE category = ? ORDER BY id ASC';
      params.push(category);
    }
    
    const [rows] = await pool.query(sql, params);
    res.json(successRes(rows, '产品列表获取成功'));
  } catch (error) {
    console.error('获取产品列表失败：', error);
    res.json(errorRes('产品列表获取失败'));
  }
};

/**
 * 根据ID获取产品详情
 */
exports.getProductDetail = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id || isNaN(id)) {
      return res.json(errorRes('产品ID不合法', 400));
    }
    
    const [rows] = await pool.query('SELECT * FROM products WHERE id = ?', [id]);
    if (rows.length === 0) {
      return res.json(errorRes('该产品不存在', 404));
    }
    
    res.json(successRes(rows[0], '产品详情获取成功'));
  } catch (error) {
    console.error('获取产品详情失败：', error);
    res.json(errorRes('产品详情获取失败'));
  }
};