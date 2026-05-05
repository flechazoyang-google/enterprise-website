const { pool } = require('../config/db');
const { sendSuccess, sendError } = require('../utils/response');
const { isRequired, isPhoneValid, isEmailValid } = require('../utils/validate');

exports.getContactInfo = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM contact_info WHERE id = 1');
    sendSuccess(res, rows[0] || {}, '联系信息获取成功');
  } catch (error) {
    console.error('获取联系信息失败：', error);
    sendError(res, '联系信息获取失败');
  }
};

exports.submitMessage = async (req, res) => {
  try {
    const { name, phone, email, message } = req.body;

    if (!isRequired(name)) return sendError(res, '姓名不能为空', 400);
    if (name.length > 50) return sendError(res, '姓名不能超过50个字符', 400);
    if (!isRequired(phone) || !isPhoneValid(phone)) return sendError(res, '手机号格式不合法', 400);
    if (phone.length > 20) return sendError(res, '手机号不能超过20个字符', 400);
    if (!isRequired(email) || !isEmailValid(email)) return sendError(res, '邮箱格式不合法', 400);
    if (email.length > 100) return sendError(res, '邮箱不能超过100个字符', 400);
    if (!isRequired(message)) return sendError(res, '留言内容不能为空', 400);
    if (message.length < 10) return sendError(res, '留言内容至少10个字符', 400);
    if (message.length > 500) return sendError(res, '留言内容不能超过500字', 400);

    const sql = 'INSERT INTO contact_messages (name, phone, email, message, create_time) VALUES (?, ?, ?, ?, NOW())';
    const [result] = await pool.query(sql, [name, phone, email, message]);

    if (result.affectedRows > 0) {
      sendSuccess(res, { id: result.insertId }, '留言提交成功');
    } else {
      sendError(res, '留言提交失败');
    }
  } catch (error) {
    console.error('提交留言失败：', error);
    sendError(res, '留言提交失败');
  }
};
