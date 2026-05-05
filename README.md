# 智维互联科技有限公司 - 企业官网

全栈企业官网项目，前端纯静态 HTML 页面 + 后端 Express.js REST API + MySQL 数据库。

## 快速开始

### 1. 初始化数据库

```bash
mysql -u root -p < sql/init.sql
```

### 2. 配置后端

```bash
cd backend
cp .env.example .env
# 编辑 .env 填入你的数据库配置
npm install
```

### 3. 启动后端

```bash
npm run dev   # 开发模式（热重载）
npm start     # 生产模式
```

默认端口 3000，前端通过 `http://localhost:3000` 访问。

## 项目结构

```
├── backend/
│   ├── app.js              # 入口文件
│   ├── config/db.js        # 数据库连接池
│   ├── controllers/        # 业务逻辑
│   ├── routes/             # API 路由
│   ├── utils/              # 工具函数
│   └── .env.example        # 环境变量模板
├── frontend/
│   ├── *.html              # 页面文件
│   └── assets/
│       ├── css/            # 样式文件
│       ├── js/             # 脚本文件
│       └── images/         # 图片资源
└── sql/
    └── init.sql            # 数据库初始化脚本
```

## API 接口

| 方法 | 路径 | 说明 |
|------|------|------|
| GET | /api/carousel | 轮播图列表 |
| GET | /api/company/intro | 公司简介 |
| GET | /api/company/culture | 企业文化 |
| GET | /api/advantages | 优势列表 |
| GET | /api/products | 产品列表（支持 category 筛选） |
| GET | /api/products/:id | 产品详情 |
| GET | /api/cases | 客户案例 |
| GET | /api/timeline | 发展历程 |
| GET | /api/team | 团队成员 |
| GET | /api/news | 新闻列表（支持 category 筛选） |
| GET | /api/news/:id | 新闻详情 |
| GET | /api/contact/info | 联系方式 |
| POST | /api/contact/message | 提交留言 |

## 技术栈

- **前端：** HTML / CSS / Vanilla JavaScript
- **后端：** Express.js 5 + mysql2
- **数据库：** MySQL 8（utf8mb4）
