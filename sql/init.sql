CREATE DATABASE  IF NOT EXISTS `enterprise_website` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `enterprise_website`;
-- MySQL dump 10.13  Distrib 8.0.44, for Win64 (x86_64)
--
-- Host: localhost    Database: enterprise_website
-- ------------------------------------------------------
-- Server version	8.0.44

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `advantages`
--

DROP TABLE IF EXISTS `advantages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `advantages` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `desc` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `icon` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '图标类名（可使用Font Awesome）',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `advantages`
--

LOCK TABLES `advantages` WRITE;
/*!40000 ALTER TABLE `advantages` DISABLE KEYS */;
INSERT INTO `advantages` VALUES (1,'技术实力','拥有10+项国家专利，核心团队来自行业顶尖企业，具备多年技术研发经验','fa-microchip'),(2,'优质服务','7×24小时在线客服，一对一专属顾问，售后响应时间不超过2小时','fa-headset'),(3,'行业经验','8年+行业深耕，服务超过1000家企业客户，积累丰富的行业解决方案','fa-chart-line'),(4,'技术领先','核心团队来自国内顶尖互联网企业，拥有超过15年的企业级服务经验。采用业界领先的微服务架构和云原生技术，确保系统高性能、高可用。','fa-code'),(5,'客户成功导向','建立完善的客户成功体系，提供从部署实施到持续优化的全周期服务。客户满意度达98%，续约率超过90%。','fa-users'),(6,'快速交付','基于成熟的PaaS平台和模块化组件，标准项目交付周期缩短50%。支持敏捷迭代，快速响应客户需求变化。','fa-rocket'),(7,'安全可靠','通过国家网络安全等级保护三级认证，数据多重加密、异地容灾备份。7×24小时安全监控，确保企业数据安全无忧。','fa-shield-alt'),(8,'灵活定制','提供标准化产品的同时，支持深度业务定制。开放的API接口和强大的低代码平台，满足企业个性化需求。','fa-cogs'),(9,'成本优化','SaaS订阅模式大幅降低企业初始投入。智能资源调度和弹性伸缩，帮助企业节省30%以上的IT运营成本。','fa-chart-line'),(10,'生态整合','与钉钉、企业微信等主流平台深度集成，支持与财务软件、ERP系统的无缝对接，消除信息孤岛。','fa-puzzle-piece'),(11,'持续创新','每年研发投入占比超过30%，紧跟AI、大数据、物联网等技术趋势，持续为客户提供前瞻性解决方案。','fa-lightbulb');
/*!40000 ALTER TABLE `advantages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `carousel`
--

DROP TABLE IF EXISTS `carousel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `carousel` (
  `id` int NOT NULL AUTO_INCREMENT,
  `img_url` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `desc` text COLLATE utf8mb4_unicode_ci COMMENT '轮播图描述',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carousel`
--

LOCK TABLES `carousel` WRITE;
/*!40000 ALTER TABLE `carousel` DISABLE KEYS */;
INSERT INTO `carousel` VALUES (1,'assets/images/carousel/轮播图1.jpg','企业核心产品发布','全新一代产品震撼上市，引领行业创新'),(2,'assets/images/carousel/轮播图2.jpg','年度战略合作签约','与行业龙头企业达成深度合作，共创未来'),(3,'assets/images/carousel/轮播图3.jpg','企业十周年庆典','感恩同行，砥砺前行，展望下一个十年'),(4,'assets/images/carousel/轮播图1.jpg','智能护航，连接未来','智维互联—您最值得信赖的企业数字化转型伙伴，助力10,000+企业实现数字化升级'),(5,'assets/images/carousel/轮播图2.jpg','一站式数字化解决方案','从管理软件到云服务，从数据分析到定制开发，全面覆盖企业数字化需求'),(6,'assets/images/carousel/轮播图3.jpg','新一代智维BI数据洞察系统','AI驱动，智能预警，助力企业数据驱动决策，洞察商业先机'),(7,'assets/images/carousel/轮播图1.jpg','智维云服务平台全新升级','通过国家等保三级认证，为企业提供安全、稳定、高效的云计算服务'),(8,'assets/images/carousel/轮播图2.jpg','制造业精益管理解决方案','深度赋能制造业数字化转型，提升生产效率30%，降低运营成本25%');
/*!40000 ALTER TABLE `carousel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `company_info`
--

DROP TABLE IF EXISTS `company_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `company_info` (
  `id` int NOT NULL DEFAULT '1',
  `intro` text COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '企业简介',
  `culture` text COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '企业文化',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `company_info`
--

LOCK TABLES `company_info` WRITE;
/*!40000 ALTER TABLE `company_info` DISABLE KEYS */;
INSERT INTO `company_info` VALUES (1,'智维互联是一家专注于为中小企业提供一站式数字化解决方案的高新技术企业。我们以“智能护航，连接未来”为使命，致力于通过创新的管理软件、可靠的数据服务、弹性的云平台及深度定制开发，帮助企业降本增效，实现业务数字化转型。公司成立于2018年，总部位于杭州，业务已覆盖全国200多个城市，服务超过10，000家企业客户。','客户为先，协同共进，持续创新，务实担当；\n智能护航，连接未来；\n成为最受中小企业信赖的数字化转型伙伴；');
/*!40000 ALTER TABLE `company_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contact_info`
--

DROP TABLE IF EXISTS `contact_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contact_info` (
  `id` int NOT NULL DEFAULT '1',
  `address` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `map_url` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '地图截图URL',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contact_info`
--

LOCK TABLES `contact_info` WRITE;
/*!40000 ALTER TABLE `contact_info` DISABLE KEYS */;
INSERT INTO `contact_info` VALUES (1,'江西省南昌市新建区玉屏西大街665号','15970527644','3134825482@qq.com','assets\\images\\contact_info\\地址.jpg');
/*!40000 ALTER TABLE `contact_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contact_messages`
--

DROP TABLE IF EXISTS `contact_messages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contact_messages` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `message` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contact_messages`
--

LOCK TABLES `contact_messages` WRITE;
/*!40000 ALTER TABLE `contact_messages` DISABLE KEYS */;
INSERT INTO `contact_messages` VALUES (1,'杨根豪','15970527644','genhaoyang@foxmail.com','123456789098765432345','2025-12-08 15:04:58'),(2,'杨根豪','15970527644','yanghao04_2023@qq.com','你好，这是产品咨询测试文字。','2025-12-21 14:53:42'),(3,'杨根豪','15970527644','flechazoyang@foxmail.com','合作洽谈咨询测试文字。','2025-12-21 15:20:15');
/*!40000 ALTER TABLE `contact_messages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customer_cases`
--

DROP TABLE IF EXISTS `customer_cases`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer_cases` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `img_url` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `desc` text COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer_cases`
--

LOCK TABLES `customer_cases` WRITE;
/*!40000 ALTER TABLE `customer_cases` DISABLE KEYS */;
INSERT INTO `customer_cases` VALUES (1,'华威精密制造集团','assets/images/cases/案例1.jpg','通过部署智维ERP和MES系统，实现生产流程数字化，生产效率提升35%，库存周转率提高28%。系统集成多个车间设备，实现实时数据采集与监控。'),(2,'悦购连锁零售','assets/images/cases/案例2.jpg','采用智维CRM和智慧门店解决方案，整合线上线下会员数据，实现精准营销，年度销售额增长42%，客户复购率提升25%。'),(3,'新东方教育科技','assets/images/cases/案例3.png','搭建智维在线教育平台和学员管理系统，支持10万+并发用户，课程管理效率提升60%，学员满意度达到98%。'),(4,'仁爱医疗集团','assets/images/cases/案例4.jpg','部署医疗行业定制化管理系统，实现患者档案电子化、医疗资源智能化调度，就诊等待时间减少40%，医疗资源利用率提升30%。'),(5,'云谷电商科技','assets/images/cases/案例5.jpg','基于智维云平台构建电商大数据分析系统，实现商品智能推荐，转化率提升18%，广告投放ROI提高35%。'),(6,'速达物流网络','assets/images/cases/案例6.jpg','应用智维物流调度系统和智能路径规划，配送效率提升45%，运输成本降低22%，客户投诉率下降60%。'),(7,'蓝海金融服务公司','assets/images/cases/案例7.jpg','构建合规风控系统和智能客服平台，实现业务自动化审批，处理效率提升300%，风险识别准确率达到95%。'),(8,'绿城智慧物业','assets/images/cases/案例8.jpg','搭建智慧社区管理平台，集成安防、缴费、报修等功能，物业响应速度提升50%，居民满意度达到97%。');
/*!40000 ALTER TABLE `customer_cases` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `development_timeline`
--

DROP TABLE IF EXISTS `development_timeline`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `development_timeline` (
  `id` int NOT NULL AUTO_INCREMENT,
  `year` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `event` text COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `development_timeline`
--

LOCK TABLES `development_timeline` WRITE;
/*!40000 ALTER TABLE `development_timeline` DISABLE KEYS */;
INSERT INTO `development_timeline` VALUES (1,'2018','启航：公司于杭州成立，专注于企业OA系统定制开发。'),(2,'2019','产品化：推出首款SaaS产品\"智维协同办公平台\"，获得市场初步认可。'),(3,'2020','融资与成长：完成A轮融资，团队规模突破百人，设立北京、深圳研发中心。'),(4,'2022','创新：推出基于AI的\"智维BI数据洞察系统\"，荣获\"浙江省创新软件企业\"称号。'),(5,'2023','生态布局：启动\"伙伴共生计划\"，与超过50家行业代理商达成合作，服务体系全面升级。'),(6,'2024','新征程：发布\"制造业精益管理\"垂直行业解决方案，开启国际化战略探索。');
/*!40000 ALTER TABLE `development_timeline` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `news`
--

DROP TABLE IF EXISTS `news`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `news` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date` date NOT NULL,
  `summary` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `category` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `news`
--

LOCK TABLES `news` WRITE;
/*!40000 ALTER TABLE `news` DISABLE KEYS */;
INSERT INTO `news` VALUES (1,'智维互联参展2024中国国际软件博览会','2024-05-10','公司参展2024中国国际软件博览会，分享中小企业数字化实践经验，展示最新产品与解决方案。','智维互联科技有限公司作为国内领先的企业数字化服务商，受邀参加2024中国国际软件博览会。在展会期间，我们设立了独立展台，向与会者展示了最新的\"智维BI数据洞察系统\"和\"制造业精益管理解决方案\"。公司CTO林芳女士在\"中小企业数字化转型\"分论坛上发表了主题演讲，分享了我们在服务上万家中小企业过程中积累的实践经验与技术洞察。本次参展进一步扩大了公司的行业影响力，并与多家潜在合作伙伴建立了初步联系。','企业动态'),(2,'荣获\"杭州市最具成长性科技企业\"奖项','2024-04-22','智维互联凭借卓越的技术创新和快速增长，荣获杭州市政府颁发的\"最具成长性科技企业\"称号。','在2024年杭州市科技创新大会上，智维互联科技有限公司凭借过去三年超过200%的营收增长、持续的技术研发投入以及在中小企业数字化转型领域的突出贡献，荣获\"杭州市最具成长性科技企业\"奖项。这一荣誉是对公司发展模式的肯定，也是对我们未来继续深耕企业服务领域的鼓励。CEO陈明表示：\"这份荣誉属于每一位智维人，我们将以此为新起点，为客户创造更大价值。\"','企业动态'),(3,'与杭州高新区达成战略合作共建数字化转型服务中心','2024-03-15','公司与杭州高新区签署战略合作协议，共同建设中小企业数字化转型服务中心，助力区域企业数字化升级。','智维互联与杭州高新技术产业开发区管理委员会正式签署战略合作协议。根据协议，双方将共同建设\"杭州高新区中小企业数字化转型服务中心\"，该中心将依托智维互联的技术产品与服务经验，为区内中小企业提供数字化诊断、方案设计、人才培养和系统实施等一站式服务。项目首期将重点服务高端制造、生物医药等高新区重点产业的100家中小企业，目标是帮助这些企业提升运营效率30%以上。','企业动态'),(4,'智维BI全新版本上线，新增智能预警与预测分析功能','2024-05-01','智维BI数据洞察系统发布重大更新，引入AI驱动的智能预警和业务预测分析功能，助力企业数据决策。','智维BI数据洞察系统V3.2版本正式上线。本次更新聚焦于智能化升级，主要新增功能包括：1. 智能预警：系统可根据历史数据自动识别异常波动，通过邮件、钉钉等方式实时通知相关负责人；2. 预测分析：基于机器学习算法，对销售趋势、库存需求等关键业务指标进行未来12个月的预测；3. 自然语言查询：用户可通过输入简单问题（如\"上季度华东区销售额是多少？\"）直接获取可视化图表。同时，新版本在报表加载速度和移动端适配方面也有显著提升。','产品动态'),(5,'智维协同办公移动端3.0发布，用户体验全面提升','2024-04-10','智维协同办公平台移动端完成全面重构，推出3.0版本，在流畅度、界面设计和功能完整性上实现重大突破。','经过半年的开发与测试，智维协同办公平台移动端3.0版本正式发布。本次更新不是简单的功能叠加，而是基于Flutter框架进行的全面重构，带来的变化包括：1. 性能提升：页面加载速度平均提升60%，操作流畅度显著改善；2. 全新UI设计：采用更符合移动端使用习惯的设计语言，重要信息一目了然；3. 功能完善：新增任务看板视图、离线文件查看、语音会议等高频需求功能。新版本已上架苹果App Store和各大安卓应用市场，老用户可直接升级。','产品动态'),(6,'智维云安全防护体系升级，通过国家等保三级认证','2024-02-28','智维云平台安全体系全面升级，成功通过国家网络安全等级保护三级认证，为企业数据安全提供更高保障。','智维云平台已完成全面的安全架构升级，并顺利通过公安部核准的\"国家网络安全等级保护三级\"认证。这是对非银行机构的最高级别安全认证。此次升级包括：1. 物理安全：数据中心采用双路供电、生物识别门禁；2. 网络安全：部署下一代防火墙、DDoS防护、入侵检测系统；3. 数据安全：全量数据加密存储、完备的备份与容灾机制；4. 管理安全：建立严格的安全管理制度和应急响应预案。通过等保三级认证，标志着智维云能为客户提供金融级别的安全可靠服务。','产品动态'),(7,'与钉钉达成深度合作，智维系列应用入驻钉钉应用市场','2024-04-18','智维互联与钉钉正式达成生态合作，智维协同、智维CRM等核心产品上架钉钉应用市场，实现无缝集成。','智维互联与阿里巴巴钉钉签署生态合作协议，公司旗下智维协同办公、智维CRM客户关系管理、智维BI数据洞察三款核心产品正式入驻钉钉应用市场。通过此次合作，钉钉用户可在钉钉工作台中直接添加和使用智维应用，实现组织架构同步、单点登录和消息互通。双方还将联合推出针对中小企业的\"数字化办公套件\"优惠套餐。这一合作将大幅降低企业数字化门槛，让更多企业享受到专业、便捷的管理工具。','合作动态'),(8,'与浙江理工大学共建\"数字化人才培养实践基地\"','2024-03-05','公司与浙江理工大学计算机学院合作，共建数字化人才培养实践基地，推动产学研深度融合。','智维互联与浙江理工大学计算机科学与技术学院签署校企合作协议，共同建设\"数字化人才培养实践基地\"。根据协议，公司将：1. 提供真实项目案例和开发环境，作为学生实习实践平台；2. 设立\"智维奖学金\"，奖励在软件开发、数据分析等领域表现突出的学生；3. 联合开设《企业级应用开发实践》选修课程，由公司资深工程师授课；4. 优先录用优秀毕业生。这一合作旨在培养更符合企业实际需求的数字化人才，同时也为公司未来人才储备奠定基础。','合作动态'),(9,'新增区域合作伙伴15家，服务网络覆盖华南、华中地区','2024-01-12','公司\"伙伴共生计划\"成效显著，2024年第一季度新增15家区域合作伙伴，服务网络进一步拓展。','随着\"伙伴共生计划\"的深入推进，智维互联在2024年第一季度成功发展了15家新的区域合作伙伴，涵盖广东、湖南、湖北、江西等省份的重点城市。这些合作伙伴包括本地IT服务商、管理咨询公司和系统集成商。公司为合作伙伴提供全方位支持，包括产品培训、销售指导、实施协助和联合营销。通过此次拓展，智维互联的本地化服务网络已覆盖全国大部分一二线城市及部分三四线城市，能够为客户提供更及时、更贴近的现场服务。','合作动态'),(10,'2024年，SaaS行业如何从\"工具价值\"走向\"生态价值\"？','2024-05-08','深度分析SaaS行业发展趋势：随着市场竞争加剧，单纯工具型SaaS面临增长瓶颈，构建生态成为破局关键。','当前，国内SaaS市场已从快速增长期进入成熟竞争期。早期SaaS企业主要提供解决单一问题的工具（如CRM、HRM），但随着客户需求日益复杂和竞争对手增多，单纯工具型SaaS面临同质化竞争、客户粘性低、增长乏力等挑战。行业领先者开始向\"生态化\"转型：1. 产品生态：通过PaaS平台开放能力，吸引ISV开发垂直行业应用；2. 渠道生态：发展区域合作伙伴，深耕本地市场；3. 服务生态：联合咨询、实施、培训等伙伴，提供完整解决方案。未来，能够成功构建生态的SaaS企业将获得更深的护城河和更持续的增长动力。','行业动态'),(11,'数据安全法实施背景下，企业应如何构建合规的数据管理方案？','2024-04-25','结合《数据安全法》等法规要求，探讨企业构建合规、安全、高效的数据管理体系的策略与路径。','随着《数据安全法》、《个人信息保护法》等法规的深入实施，数据合规已成为企业数字化转型中的必答题。企业构建合规数据管理方案应重点关注：1. 数据资产梳理：识别企业内部所有数据，进行分类分级（如核心数据、重要数据、一般数据）；2. 制度建设：建立覆盖数据全生命周期的管理制度，明确各部门职责；3. 技术保障：部署数据加密、访问控制、审计日志等技术手段；4. 流程规范：制定数据采集、存储、使用、共享、销毁的标准流程。建议企业可借助专业的数据治理服务商，以\"管理+技术\"相结合的方式，系统性地构建数据安全防线，既满足合规要求，又释放数据价值。','行业动态'),(12,'AI与低代码如何重塑企业软件开发模式？','2024-04-03','人工智能与低代码技术的融合正在深刻改变企业软件开发流程，大幅提升开发效率并降低技术门槛。','近年来，人工智能（AI）和低代码（Low-Code）技术在企业软件开发领域加速融合，催生了新的开发范式。具体表现为：1. AI辅助开发：通过代码智能补全、自动生成测试用例、智能排错等功能，将开发人员从重复劳动中解放出来；2. 低代码平台智能化：部分领先的低代码平台已集成AI能力，如通过自然语言描述自动生成表单、流程，或根据历史数据推荐业务模型。这种\"AI+低代码\"的模式，使得业务人员也能参与应用搭建（公民开发），极大缩短了从需求到上线的周期。未来，企业IT部门的角色可能从\"开发者\"更多转向\"架构师\"和\"赋能者\"，聚焦于复杂系统集成和平台治理。','行业动态');
/*!40000 ALTER TABLE `news` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `desc` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `detail` text COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '产品详情',
  `img_url` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `category` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '产品分类',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'智能管理系统','一体化企业管理解决方案，覆盖人事、财务、业务全流程','智能管理系统是一款专为中小企业打造的一体化管理工具，支持人事考勤、财务记账、业务流程审批等核心功能。系统采用云原生架构，可灵活扩展，适配不同行业需求。支持多终端登录，数据实时同步，保障企业高效协同。','assets/images/products/product1.jpg','管理软件'),(2,'数据分析平台','大数据采集、分析、可视化一站式服务，助力企业决策','数据分析平台基于AI算法，可快速采集多渠道数据，进行清洗、建模与分析。提供丰富的可视化图表（折线图、柱状图、雷达图等），支持自定义报表生成，帮助企业挖掘数据价值，做出科学决策。','assets/images/products/product2.png','数据服务'),(3,'云存储服务','安全稳定的企业级云存储，支持大容量、高并发访问','企业级云存储服务采用分布式架构，数据多副本备份，保障数据安全不丢失。支持秒级上传下载，并发访问量可达10万+，适配企业文件共享、数据备份等场景，按需付费，降低企业成本。','assets/images/products/product3.png','云服务'),(4,'智能硬件设备','物联网智能终端，支持远程监控、数据采集','智能硬件设备集成多种传感器，可实时采集环境数据（温度、湿度、压力等），支持4G/5G/Wi-Fi连接，远程监控设备状态。适用于工业生产、智能家居、环境监测等场景，安装简单，操作便捷。','assets/images/products/product4.png','硬件产品'),(5,'API接口服务','开放平台API，支持第三方系统快速集成','开放平台API提供标准化接口，支持数据查询、业务调用等功能，文档完善，接入简单。支持高并发、低延迟，提供完整的鉴权机制，保障接口安全，助力企业快速实现系统集成与功能扩展。','assets/images/products/product5.png','技术服务'),(6,'定制化解决方案','根据企业需求，量身打造专属技术解决方案','针对企业个性化需求，提供从需求调研、方案设计、开发实施到售后维护的全流程服务。核心团队深入了解行业痛点，结合企业实际情况，打造适配性强、性价比高的定制化方案，助力企业数字化转型。','assets/images/products/product6.webp','定制服务'),(7,'智维协同办公平台','集成审批、沟通、文档、任务的智能办公中心。','集成多场景办公功能：支持自定义审批流程（适配请假、报销等场景）、企业级即时沟通（含部门群、单聊、文件传输）、云端文档协作（多人实时编辑、版本回溯）、任务全周期管理（任务分配、进度追踪、逾期提醒）；支持 PC / 移动端多端同步，同时提供精细化权限管控，助力企业实现一站式智能办公，提升内部协作效率。','assets/images/products/product7.webp','管理软件'),(8,'智维CRM客户关系管理系统','助力企业从销售线索到回款的全流程精细化管控。','覆盖销售线索分配、客户全生命周期跟进、商机阶段管理、合同在线审批、回款进度追踪等全流程模块，支持客户标签画像、销售业绩数据统计，助力企业实现从获客到营收的精细化管控，降低客户流失率。','assets/images/products/product8.webp','管理软件'),(9,'智维ERP进销存管理系统','专为中小贸易、零售企业打造的轻量级业务管理工具。','专为中小贸易、零售企业设计的轻量级工具，覆盖采购下单、商品入库、库存实时盘点（含库存预警）、销售订单关联、出库流程管理，同时支持订单与财务数据自动对账，无需复杂部署，适配中小微企业的轻量化业务场景。','assets/images/products/product9.webp','管理软件'),(10,'智维BI数据洞察系统','零代码拖拽式报表，连接多源数据，一键生成可视化决策看板。','支持对接企业内部 CRM、ERP 等系统及外部数据源，通过零代码拖拽式操作配置报表维度与指标，一键生成多类型可视化决策看板（如折线图、柱状图、仪表盘），数据实时同步更新，帮助非技术人员快速完成数据分析与业务决策。','assets/images/products/product10.png','数据服务'),(11,'数据治理与咨询服务','帮助企业梳理数据资产，建立规范、安全、可用的数据管理体系。','提供数据资产全面盘点、数据标准体系制定、数据质量监控规则搭建、数据安全合规（适配隐私保护政策）的全流程咨询服务，输出企业专属数据管理手册，并配套操作培训，协助企业落地规范、安全、可用的数据管理体系。','assets/images/products/product11.png','数据服务'),(12,'智维云（基础服务）','提供高可用的云服务器、云数据库、对象存储及CDN加速服务。','包含高可用云服务器（支持弹性扩容 / 缩容）、多副本备份的云数据库（适配高并发场景）、安全可靠的对象存储（按需计费）及全球节点覆盖的 CDN 加速服务；提供 7*24 小时运维监控，保障企业基础云资源的稳定运行。','assets/images/products/product12.webp','云服务'),(13,'智维云（行业解决方案）','针对电商、教育、制造等行业的场景化云应用套件，开箱即用。','针对电商、教育、制造等行业提供场景化云应用套件：电商套件含订单管理、仓储系统对接、营销数据分析；教育套件覆盖教务排课、学员画像管理；制造套件包含生产排程、设备状态监控，均为预配置模板，支持开箱即用、快速部署。','assets/images/products/product13.webp','云服务'),(14,'企业专属应用定制开发','基于智维PaaS平台，快速为企业量身打造业务系统。','基于智维 PaaS 平台的低 / 无代码能力，覆盖需求调研、原型设计、功能开发、测试上线全流程，为企业量身打造专属业务系统；支持与企业现有系统（如 OA、ERP）集成，后期提供系统运维、功能升级等持续服务。','assets/images/products/product14.jpg','定制服务'),(15,'系统集成与API服务','打破信息孤岛，连接企业内外部各类系统与平台。','打破企业信息孤岛，支持对接内部 ERP、CRM、OA 等系统，及外部支付、物流等第三方平台；提供标准化 API 接口与定制化接口开发服务，实现跨系统数据自动互通、业务流程自动化，降低跨系统协作的人工成本。','assets/images/products/product15.webp','定制服务');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `team_members`
--

DROP TABLE IF EXISTS `team_members`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `team_members` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `position` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `intro` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `avatar` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `team_members`
--

LOCK TABLES `team_members` WRITE;
/*!40000 ALTER TABLE `team_members` DISABLE KEYS */;
INSERT INTO `team_members` VALUES (1,'陈明','创始人兼CEO','前顶级互联网公司技术总监，拥有超过15年的企业服务与产品管理经验，坚信技术应服务于商业本质。','assets\\images\\team_menbers/CEO.jpg'),(2,'林芳','首席技术官（CTO）','分布式系统与云计算专家，曾主导多个百万级并发架构设计，领导公司所有技术产品的研发与创新。','assets\\images\\team_menbers/CTO.jpg'),(3,'王哲','首席运营官（COO）','资深企业服务运营专家，擅长客户成功体系构建与市场战略落地，带领团队实现客户留存率行业领先。','assets\\images\\team_menbers/COO.jpg'),(4,'张悦','产品设计总监','用户体验领域的践行者，主张\"简洁、高效、人性化\"的设计哲学，确保每一款产品都贴合用户真实场景。','assets\\images\\team_menbers/总监.jpg');
/*!40000 ALTER TABLE `team_members` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-12-21 15:35:31
