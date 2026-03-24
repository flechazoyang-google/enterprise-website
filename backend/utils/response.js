/**
 * 成功响应
 * @param {Object} data - 响应数据
 * @param {string} msg - 响应信息
 * @returns {Object} 响应对象
 */
const successRes = (data = {}, msg = '操作成功') => {
  return {
    code: 200,
    msg,
    data
  };
};

/**
 * 错误响应
 * @param {string} msg - 错误信息
 * @param {number} code - 错误码
 * @returns {Object} 响应对象
 */
const errorRes = (msg = '操作失败', code = 500) => {
  return {
    code,
    msg,
    data: {}
  };
};

module.exports = {
  successRes,
  errorRes
};