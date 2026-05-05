const isRequired = (value) => {
  if (typeof value === 'number') return true;
  if (typeof value !== 'string') return false;
  return value.trim() !== '';
};

const isPhoneValid = (phone) => {
  const reg = /^1[3-9]\d{9}$/;
  return reg.test(phone);
};

const isEmailValid = (email) => {
  const reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+\.[a-zA-Z0-9_-]+$/;
  return reg.test(email);
};

module.exports = { isRequired, isPhoneValid, isEmailValid };
