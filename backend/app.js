const express = require('express');
const cors = require('cors');
const { testDbConnection } = require('./config/db');

// 导入路由
const carouselRouter = require('./routes/carouselRouter');
const companyRouter = require('./routes/companyRouter');
const advantageRouter = require('./routes/advantageRouter');
const productRouter = require('./routes/productRouter');
const caseRouter = require('./routes/caseRouter');
const timelineRouter = require('./routes/timelineRouter');
const teamRouter = require('./routes/teamRouter');
const newsRouter = require('./routes/newsRouter');
const contactRouter = require('./routes/contactRouter');

// 创建Express实例
const app = express();
const port = process.env.PORT || 3000;

// 中间件
app.use(cors()); // 解决跨域
app.use(express.json()); // 解析JSON请求体
app.use(express.urlencoded({ extended: true })); // 解析表单请求体

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

// 启动服务器
app.listen(port, () => {
  console.log(`后端服务启动成功，端口：${port}`);
  // 测试数据库连接
  testDbConnection();
});