# 修改日志

## 2025-03-24 项目初始化（提交 3a08c76）

首次上传完整项目代码，包含：

- **后端**：Express.js 应用（app.js）、9 个路由模块、9 个控制器、数据库配置、工具函数
- **前端**：7 个 HTML 页面（index、about、products、product-detail、news、news-detail、contact）、9 个 CSS 文件、6 个 JS 文件
- **数据库**：`sql/init.sql` 建表脚本及种子数据（10 张表）
- **资源文件**：轮播图、产品图、案例图、团队头像等图片资源

---

## 2025-05-05 安全性与代码质量改进（提交 c403268）

### 后端

- 修复 HTTP 状态码始终返回 200 的问题，新增 `sendSuccess`/`sendError` 工具函数统一响应格式
- 添加全局错误处理中间件和 404 路由，返回 JSON 格式响应
- 移除 `contactController` 中的调试日志，避免泄露用户 PII 和请求头
- 修复 `validate.js` 中 `isRequired` 对非字符串类型崩溃的问题
- 修复 product/news 控制器中弱 ID 验证（`isNaN` 改为正则校验 `^\d+$`）
- 添加 `contactController` 输入长度限制（name≤50, phone≤20, email≤100, message≥10）
- 删除 `contactController` 中 INSERT 后多余的 SELECT 查询
- 限制 CORS 配置，通过 `CORS_ORIGIN` 环境变量控制允许的源
- 修复 SSL 证书验证默认禁用的问题
- 添加前端静态文件服务支持

### 前端

- API 地址从硬编码 `localhost:3000` 改为相对路径 `/api`
- 修复 `scrollAnimation` 函数重复定义 3 次的问题，保留 IntersectionObserver 版本
- 修复 `initBackToTop` 重复定义导致双重事件监听的问题，统一在 `nav.js` 实现
- `render.js` 中 hover 动画改用 CSS 实现，删除重复的 JS 代码
- 统一 `formatDetailContent` 函数，抽取到 `utils.js`
- 清理 `form.js` 中的调试日志
- 联系表单：去掉 subject 必填限制，添加输入长度提示

### 新增文件

- `CLAUDE.md`：项目架构文档，为 Claude Code 提供代码库上下文

---

## 2025-05-05 项目规范化与 Git 历史清理

### 新增文件

- `.gitignore`：忽略 `node_modules/`、`.env`、系统文件（`.DS_Store`、`Thumbs.db`）
- `backend/.env.example`：环境变量模板，方便其他开发者配置数据库连接
- `README.md`：项目文档，包含快速开始指南、目录结构、API 接口列表、技术栈说明

### Git 历史清理

- 使用 `git filter-branch` 从全部提交历史中移除 299MB 的 `演示视频.mp4`，解决 GitHub 100MB 文件大小限制导致的推送失败
- 清理旧引用并执行 `git gc --prune=now --aggressive` 压缩仓库
- Force push 到 `origin/main`

---

## 2025-05-05 项目优化

### 安全修复

- **修复 contact.html 重复 ID**：`#phone`/`#email` 同时用于展示 `<p>` 和表单 `<input>`，导致 `getElementById` 返回错误元素，表单实时验证失效。展示元素改为 `#phone-display`/`#email-display`
- **添加 XSS 防护**：`utils.js` 新增 `escapeHtml()` 函数，所有通过 `innerHTML` 插入数据库内容的位置均已应用转义，防止存储型 XSS
- **添加 helmet 安全头**：安装 `helmet` 中间件，自动设置 `X-Content-Type-Options`、`X-Frame-Options`、`Strict-Transport-Security` 等安全响应头
- **添加留言频率限制**：安装 `express-rate-limit`，`POST /api/contact/message` 限制每 15 分钟最多 10 次请求
- **添加请求体大小限制**：`express.json()` 和 `express.urlencoded()` 设置 `limit: '10kb'`
- **添加 JSON 解析错误处理**：全局错误处理中间件区分 JSON 解析错误（返回 400）和服务器错误（返回 500）

### SEO 优化

- 全部 7 个 HTML 页面添加 `<meta name="description">`、`<meta name="keywords">`、Open Graph 标签（`og:title`、`og:description`、`og:type`）

### 数据库优化

- `init.sql` 为 `news` 表添加 `idx_news_category` 和 `idx_news_date` 索引
- `init.sql` 为 `products` 表添加 `idx_products_category` 索引

### API 优化

- `GET /api/news`、`GET /api/products`、`GET /api/cases` 支持分页参数 `?page=1&limit=10`，不传则返回全部数据（保持前端兼容）
- 后端 `contactController` 姓名验证对齐前端：最小 2 字符，最大 20 字符

### 无障碍改进

- 全部页面汉堡菜单添加 `role="button"`、`aria-label="菜单"`、`aria-expanded="false"`
- `nav.js` 汉堡菜单点击时同步切换 `aria-expanded` 状态
- 全部页面社交链接（微信、微博、LinkedIn）添加 `aria-label`
- 首页轮播图上一张/下一张按钮添加 `aria-label`

### 前端资源修复

- `about.html` banner 图片从外部 `picsum.photos` 替换为本地 `assets/images/carousel/轮播图1.jpg`
- `contact.html` 地图默认图片从外部 `picsum.photos` 替换为本地 `assets/images/contact_info/地址.jpg`
- `news-detail.html` 移除动态生成的 `picsum.photos` 图片 URL

### 依赖变更

- 新增：`helmet`、`express-rate-limit`
