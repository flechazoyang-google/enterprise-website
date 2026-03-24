const { pool } = require('../config/db');
const { successRes, errorRes } = require('../utils/response');

/**
 * 获取企业简介
 */
exports.getCompanyIntro = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT intro FROM company_info WHERE id = 1');
    res.json(successRes({ intro: rows[0]?.intro || '' }, '企业简介获取成功'));
  } catch (error) {
    console.error('获取企业简介失败：', error);
    res.json(errorRes('企业简介获取失败'));
  }
};

/**
 * 获取企业文化
 */
exports.getCompanyCulture = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT culture FROM company_info WHERE id = 1');
    res.json(successRes({ culture: rows[0]?.culture || '' }, '企业文化获取成功'));
  } catch (error) {
    console.error('获取企业文化失败：', error);
    res.json(errorRes('企业文化获取失败'));
  }
};