const express = require('express');
const path = require('path');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const { testDbConnection } = require('./config/db');
const { sendError } = require('./utils/response');

const carouselRouter = require('./routes/carouselRouter');
const companyRouter = require('./routes/companyRouter');
const advantageRouter = require('./routes/advantageRouter');
const productRouter = require('./routes/productRouter');
const caseRouter = require('./routes/caseRouter');
const timelineRouter = require('./routes/timelineRouter');
const teamRouter = require('./routes/teamRouter');
const newsRouter = require('./routes/newsRouter');
const contactRouter = require('./routes/contactRouter');

const app = express();
const port = process.env.PORT || 3000;

// 中间件
app.use(helmet());
const allowedOrigin = process.env.CORS_ORIGIN || 'http://localhost:3000';
app.use(cors({ origin: allowedOrigin }));
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

// 留言接口频率限制
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: { code: 429, msg: '留言过于频繁，请15分钟后再试', data: {} }
});
app.use('/api/contact/message', contactLimiter);

// 挂载路由
app.use('/api', carouselRouter);
app.use('/api', companyRouter);
app.use('/api', advantageRouter);
app.use('/api', productRouter);
app.use('/api', caseRouter);
app.use('/api', timelineRouter);
app.use('/api', teamRouter);
app.use('/api', newsRouter);
app.use('/api', contactRouter);

// 测试路由
app.get('/api/test', (req, res) => {
  res.json({ code: 200, msg: '后端服务正常运行', data: {} });
});

// 前端静态文件
app.use(express.static(path.join(__dirname, '../frontend')));

// 404处理
app.use((req, res) => {
  sendError(res, '接口不存在', 404);
});

// JSON解析错误处理
app.use((err, req, res, next) => {
  if (err.type === 'entity.parse.failed') {
    return sendError(res, '请求格式不合法', 400);
  }
  console.error('服务器错误：', err);
  sendError(res, '服务器内部错误', 500);
});

// 启动服务器
app.listen(port, () => {
  console.log(`后端服务启动成功，端口：${port}`);
  testDbConnection();
});
