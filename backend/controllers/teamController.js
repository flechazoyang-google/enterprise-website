const { pool } = require('../config/db');
const { sendSuccess, sendError } = require('../utils/response');

exports.getTeamList = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM team_members ORDER BY id ASC');
    sendSuccess(res, rows, '核心团队数据获取成功');
  } catch (error) {
    console.error('获取核心团队失败：', error);
    sendError(res, '核心团队数据获取失败');
  }
};
