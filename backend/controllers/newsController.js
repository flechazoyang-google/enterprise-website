const { pool } = require('../config/db');
const { successRes, errorRes } = require('../utils/response');

/**
 * 获取新闻列表（支持分类筛选）
 */
exports.getNewsList = async (req, res) => {
  try {
    const { category } = req.query;
    let sql = 'SELECT id, title, date, summary, category FROM news ORDER BY date DESC';
    const params = [];
    
    // 分类筛选
    if (category && category.trim() !== '') {
      sql = 'SELECT id, title, date, summary, category FROM news WHERE category = ? ORDER BY date DESC';
      params.push(category);
    }
    
    const [rows] = await pool.query(sql, params);
    res.json(successRes(rows, '新闻列表获取成功'));
  } catch (error) {
    console.error('获取新闻列表失败：', error);
    res.json(errorRes('新闻列表获取失败'));
  }
};

/**
 * 根据ID获取新闻详情
 */
exports.getNewsDetail = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id || isNaN(id)) {
      return res.json(errorRes('新闻ID不合法', 400));
    }
    
    const [rows] = await pool.query('SELECT * FROM news WHERE id = ?', [id]);
    if (rows.length === 0) {
      return res.json(errorRes('该新闻不存在', 404));
    }
    
    res.json(successRes(rows[0], '新闻详情获取成功'));
  } catch (error) {
    console.error('获取新闻详情失败：', error);
    res.json(errorRes('新闻详情获取失败'));
  }
};