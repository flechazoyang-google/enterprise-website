/**
 * 非空验证
 * @param {any} value - 待验证值
 * @returns {boolean} 是否非空
 */
const isRequired = (value) => {
  return value !== undefined && value !== null && value.trim() !== '';
};

/**
 * 手机号验证（简单版）
 * @param {string} phone - 手机号
 * @returns {boolean} 是否合法
 */
const isPhoneValid = (phone) => {
  const reg = /^1[3-9]\d{9}$/;
  return reg.test(phone);
};

/**
 * 邮箱验证
 * @param {string} email - 邮箱
 * @returns {boolean} 是否合法
 */
const isEmailValid = (email) => {
  const reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+\.[a-zA-Z0-9_-]+$/;
  return reg.test(email);
};

module.exports = {
  isRequired,
  isPhoneValid,
  isEmailValid
};