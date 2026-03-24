const { pool } = require('../config/db');
const { successRes, errorRes } = require('../utils/response');

/**
 * 获取核心团队
 */
exports.getTeamList = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM team_members ORDER BY id ASC');
    res.json(successRes(rows, '核心团队数据获取成功'));
  } catch (error) {
    console.error('获取核心团队失败：', error);
    res.json(errorRes('核心团队数据获取失败'));
  }
};