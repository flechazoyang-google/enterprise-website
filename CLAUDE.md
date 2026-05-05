# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

企业官网（智维互联科技有限公司）- 全栈项目，前端纯静态HTML页面 + 后端Express.js REST API + MySQL数据库。

## Commands

### Backend
```bash
cd backend
npm install            # 安装依赖
npm run dev            # 开发模式（nodemon热重载），默认端口3000
npm start              # 生产模式启动
```

### Database
```bash
mysql -u root -p < sql/init.sql   # 初始化数据库（库名：enterprise_website）
```

后端通过 `.env` 文件读取数据库配置，变量名：`DB_HOST`, `DB_USER`, `DB_PASSWORD`, `DB_NAME`, `DB_PORT`, `DB_SSL`。

### Frontend
纯静态文件，直接用浏览器打开或通过HTTP服务器提供。前端请求地址硬编码为 `http://localhost:3000/api`（见 `frontend/assets/js/utils.js`）。

## Architecture

### Backend (Express.js, CommonJS)

MVC结构，所有API路由挂载在 `/api` 前缀下：

- `app.js` - 入口，注册中间件和路由
- `config/db.js` - MySQL连接池（mysql2/promise）
- `routes/*.js` - 路由定义，每个模块一个Router
- `controllers/*.js` - 业务逻辑，直接操作数据库
- `utils/response.js` - 统一响应格式 `{code, msg, data}`
- `utils/validate.js` - 表单验证（手机号、邮箱、非空）

API模块：carousel, company, advantage, product, case, timeline, team, news, contact。controller直接用 `pool.query()` 执行SQL，无ORM层。

### Frontend (Vanilla HTML/CSS/JS)

无构建工具、无框架。每个页面独立HTML文件，共享 `base.css` + `common.css` + 页面专属CSS。

- `assets/js/utils.js` - `request()` 封装fetch请求，`validator` 表单验证，`showToast()` 提示，`scrollAnimation()` 滚动动画
- `assets/js/render.js` - 各section的数据渲染函数（从API获取数据后拼接HTML插入DOM）
- `assets/js/nav.js` - 导航栏交互
- `assets/js/carousel.js` - 轮播图逻辑
- `assets/js/filter.js` - 产品/新闻分类筛选
- `assets/js/form.js` - 联系表单提交

页面：index, about, products, product-detail, news, news-detail, contact。

### Data Flow

页面加载 → DOMContentLoaded → 调用render函数 → `request()` 发送GET到 `/api/*` → controller查询MySQL → 返回JSON → 前端拼接HTML渲染。

### Database Tables

advantages, carousel, cases, company_info, contact_info, contact_messages, news, products, team, timeline。
