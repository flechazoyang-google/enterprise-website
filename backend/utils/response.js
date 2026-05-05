const successRes = (data = {}, msg = '操作成功') => {
  return { code: 200, msg, data };
};

const errorRes = (msg = '操作失败', code = 500) => {
  return { code, msg, data: {} };
};

const sendSuccess = (res, data = {}, msg = '操作成功') => {
  return res.status(200).json(successRes(data, msg));
};

const sendError = (res, msg = '操作失败', code = 500) => {
  return res.status(code).json(errorRes(msg, code));
};

module.exports = { successRes, errorRes, sendSuccess, sendError };
