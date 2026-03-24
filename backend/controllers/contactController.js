const { pool } = require('../config/db');
const { successRes, errorRes } = require('../utils/response');
const { isRequired, isPhoneValid, isEmailValid } = require('../utils/validate');

/**
 * 获取联系信息
 */
exports.getContactInfo = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM contact_info WHERE id = 1');
    res.json(successRes(rows[0] || {}, '联系信息获取成功'));
  } catch (error) {
    console.error('获取联系信息失败：', error);
    res.json(errorRes('联系信息获取失败'));
  }
};

/**
 * 提交留言
 */
exports.submitMessage = async (req, res) => {
  try {
    console.log('=== 收到表单提交请求 ===');
    console.log('请求方法:', req.method);
    console.log('请求路径:', req.originalUrl);
    console.log('请求体数据:', req.body);
    console.log('请求头:', req.headers);
    
    const { name, phone, email, message } = req.body;
    
    // 数据验证
    if (!isRequired(name)) return res.json(errorRes('姓名不能为空', 400));
    if (!isRequired(phone) || !isPhoneValid(phone)) return res.json(errorRes('手机号格式不合法', 400));
    if (!isRequired(email) || !isEmailValid(email)) return res.json(errorRes('邮箱格式不合法', 400));
    if (!isRequired(message)) return res.json(errorRes('留言内容不能为空', 400));
    if (message.length > 500) return res.json(errorRes('留言内容不能超过500字', 400));
    
    console.log('数据验证通过，开始插入数据库...');
    
    // 插入数据库
    const sql = 'INSERT INTO contact_messages (name, phone, email, message, create_time) VALUES (?, ?, ?, ?, NOW())';
    const params = [name, phone, email, message];
    
    console.log('SQL语句:', sql);
    console.log('SQL参数:', params);
    
    const [result] = await pool.query(sql, params);
    
    console.log('数据库插入结果:', result);
    
    if (result.affectedRows > 0) {
      const insertedId = result.insertId;
      console.log('插入成功，记录ID:', insertedId);
      
      // 可选：查询刚插入的记录
      const [rows] = await pool.query('SELECT * FROM contact_messages WHERE id = ?', [insertedId]);
      console.log('插入的记录:', rows[0]);
      
      res.json(successRes({ id: insertedId }, '留言提交成功'));
    } else {
      console.log('插入失败，affectedRows为0');
      res.json(errorRes('留言提交失败'));
    }
  } catch (error) {
    console.error('提交留言失败：', error);
    console.error('错误详情:', error.message);
    console.error('错误堆栈:', error.stack);
    res.json(errorRes('留言提交失败'));
  }
};