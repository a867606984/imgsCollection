/*
 Navicat Premium Data Transfer

 Source Server         : myself
 Source Server Type    : MySQL
 Source Server Version : 50730
 Source Host           : localhost:3306
 Source Schema         : imgscollection

 Target Server Type    : MySQL
 Target Server Version : 50730
 File Encoding         : 65001

 Date: 31/08/2020 14:55:25
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for _mysql_session_store
-- ----------------------------
DROP TABLE IF EXISTS `_mysql_session_store`;
CREATE TABLE `_mysql_session_store`  (
  `id` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `expires` bigint(20) NULL DEFAULT NULL,
  `data` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of _mysql_session_store
-- ----------------------------
INSERT INTO `_mysql_session_store` VALUES ('USER_ID:0bJR_XKYnazLBcmDoy1Pcnks8Wq6PVfs', 1598094476179, '{\"isLogin\":true,\"userName\":\"1\",\"count\":0}');
INSERT INTO `_mysql_session_store` VALUES ('USER_ID:bCW3VO66TMhc6wBzI2DXLRtzYKsk7DCu', 1598099342085, '{\"isLogin\":true,\"userName\":\"1\",\"count\":0}');
INSERT INTO `_mysql_session_store` VALUES ('USER_ID:d3XklmbAPvhH3C9_9hm1j8QqVYfBmTd1', 1598241579132, '{\"isLogin\":true,\"userName\":\"1\",\"count\":0}');
INSERT INTO `_mysql_session_store` VALUES ('USER_ID:dBzfULrc6xqqTC7fj-RUY6f9FRidDor7', 1598251420050, '{\"isLogin\":true,\"userName\":\"1\",\"count\":0}');
INSERT INTO `_mysql_session_store` VALUES ('USER_ID:EAbhC5JWuGg2_diPT_T1sQiBLsmhD9Sc', 1598251447608, '{\"isLogin\":true,\"userName\":\"1\",\"count\":0}');
INSERT INTO `_mysql_session_store` VALUES ('USER_ID:HcZAy_HcVbPVxo87KFtj7xMD6hDE6nxA', 1598251641214, '{\"isLogin\":true,\"userName\":\"1\",\"count\":0}');
INSERT INTO `_mysql_session_store` VALUES ('USER_ID:hrdEyGUKjRlOjJOaf8gZp04puqOJE5Bf', 1598249317424, '{\"isLogin\":true,\"userName\":1,\"count\":0}');
INSERT INTO `_mysql_session_store` VALUES ('USER_ID:NAG9Gr2ur-utc5f73CPJ49hJEYjnJpOF', 1598251937475, '{\"isLogin\":true,\"userName\":\"1\",\"count\":0}');
INSERT INTO `_mysql_session_store` VALUES ('USER_ID:sV_B8Os1XY6J570AlxTcowJEMfTa6_Bn', 1598251173943, '{\"count\":10}');
INSERT INTO `_mysql_session_store` VALUES ('USER_ID:W7E2Qpo8HktqHAKMHQhq_UGP0zj8QTsV', 1598238450239, '{\"isLogin\":true,\"userName\":\"1\",\"count\":0}');
INSERT INTO `_mysql_session_store` VALUES ('USER_ID:WnoVCT9gl3fPJAielKBYaZiJTmQV4RTK', 1598251490057, '{\"isLogin\":true,\"userName\":\"1\",\"count\":0}');

-- ----------------------------
-- Table structure for comment_table
-- ----------------------------
DROP TABLE IF EXISTS `comment_table`;
CREATE TABLE `comment_table`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `content` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `userid` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of comment_table
-- ----------------------------
INSERT INTO `comment_table` VALUES (1, 'xxxxxxxx', 1);
INSERT INTO `comment_table` VALUES (2, 'sewfwwfefwef', 1);
INSERT INTO `comment_table` VALUES (3, '你好呀，hahahahahh ', 1);
INSERT INTO `comment_table` VALUES (4, '你好呀，阿萨斯', 1);
INSERT INTO `comment_table` VALUES (5, '哈哈哈每晚is股', 1);
INSERT INTO `comment_table` VALUES (6, '你好呀，大傻叉', 1);
INSERT INTO `comment_table` VALUES (7, 'lalalla', 1);
INSERT INTO `comment_table` VALUES (8, 'hello，jackchen', 1);

-- ----------------------------
-- Table structure for img_table
-- ----------------------------
DROP TABLE IF EXISTS `img_table`;
CREATE TABLE `img_table`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `url` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `title` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `detail` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `iscollect` int(1) NULL DEFAULT NULL,
  `uploadid` int(3) NULL DEFAULT NULL,
  `createtime` datetime(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 32 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of img_table
-- ----------------------------
INSERT INTO `img_table` VALUES (1, 'img/001.jpg', '窗帘辅料', '#软装# #窗帘辅料# #软装设计# #软装元素# #家居# #装修# www.loookdesign.com国内最专业软装网', 0, 1, NULL);
INSERT INTO `img_table` VALUES (2, 'img/002.jpg', 'jab passamanerie', ' jab passamanerie- Cerca con Google:', 0, 1, NULL);
INSERT INTO `img_table` VALUES (3, 'img/003.jpg', 'Romanez', 'Romanez - Life\'s Fabrics:', 0, 1, NULL);
INSERT INTO `img_table` VALUES (4, 'img/004.jpg', 'Beautiful drapes', 'Beautiful drapes. Classical swags. Curved ro...', 0, 1, NULL);
INSERT INTO `img_table` VALUES (5, 'img/005.jpg', '营造氛围30例', '如何使用[高级灰]来 : 如何使用[高级灰]来营造氛围30例', 0, 1, NULL);
INSERT INTO `img_table` VALUES (6, 'img/006.jpg', '杨明山设计', '杨明山设计-龙年国际E1样板间-家居别墅-室内设计联盟 -', 0, 1, NULL);
INSERT INTO `img_table` VALUES (7, 'img/007.jpg', '一抹蓝', '一抹蓝 生活圈 展示 设计时代网-Powered by thinkdo3', 0, 1, NULL);
INSERT INTO `img_table` VALUES (8, 'img/008.jpg', '南京SKH设计', '南京SKH设计-罗托鲁拉小镇•图兰朵的春天 - 家居别墅设计 - 拓者设计吧 ', 0, 1, NULL);
INSERT INTO `img_table` VALUES (9, 'img/009.jpg', '极致之宿软装', '纽约克罗斯比街酒店 Crosby Street Hotel_极致之宿', 0, 1, NULL);
INSERT INTO `img_table` VALUES (10, 'img/010.jpg', '软装设计方案', '国外精美窗帘场景图细节图 流苏挂穗 软装设计方案', 0, 1, NULL);
INSERT INTO `img_table` VALUES (11, 'img/011.jpg', 'LSD CASA', 'LSD CASA—上海绿地法兰西世家样板间（2015新作） - 家居别墅', 0, 1, NULL);
INSERT INTO `img_table` VALUES (12, 'img/012.jpg', '缤纷色彩', '局部 – 孔雀羽毛一样的颜色 缤纷色彩', 0, 1, NULL);
INSERT INTO `img_table` VALUES (13, 'img/013.jpg', '酒店设计', '许多世界极奢华的酒店设计都出自Jacques Garcia之手', 0, 1, NULL);
INSERT INTO `img_table` VALUES (14, 'img/014.jpg', '欧式阳台窗帘', '#窗帘#欧式阳台窗帘效果图 2013最新欧式窗帘效果图', 0, 1, NULL);
INSERT INTO `img_table` VALUES (15, 'img/015.jpg', '叶迹设计', '叶迹设计：三亚创基长乐居精装样板间C户型，海天一色 ', 0, 1, NULL);
INSERT INTO `img_table` VALUES (16, 'img/016.jpg', '新中式风格', '新中式风格_来自从零开始倒计时', 0, 1, NULL);
INSERT INTO `img_table` VALUES (17, 'img/017.jpg', '半遮光窗帘', '欧式经典窗幔高档藏青色丝绸白色里衬半遮光窗帘', 0, 1, NULL);
INSERT INTO `img_table` VALUES (18, 'img/018.jpg', '阳台飘窗', '地中海乡村蓝黄条纹格子升降罗马帘客厅书房阳台飘窗成品窗帘定制', 0, 1, NULL);
INSERT INTO `img_table` VALUES (19, 'img/019.jpg', '棉麻混纺沙发', '澳大利亚 黄棉麻混纺沙发靠抱枕套 办公室腰枕套 午休枕靠背垫套-tmall.com天猫', 0, 1, NULL);
INSERT INTO `img_table` VALUES (20, 'img/020.jpg', '巴黎屋檐下', '巴黎屋檐下--89㎡浪漫法式乡村_2074258', 0, 1, NULL);
INSERT INTO `img_table` VALUES (28, 'upload/1597648579128.jpg', '狗子', '狗子很可爱很可爱', 0, 1, NULL);

-- ----------------------------
-- Table structure for img_user_table
-- ----------------------------
DROP TABLE IF EXISTS `img_user_table`;
CREATE TABLE `img_user_table`  (
  `img_user_id` int(11) NOT NULL AUTO_INCREMENT,
  `imgid` int(11) NOT NULL,
  `userid` int(11) NOT NULL,
  PRIMARY KEY (`img_user_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 19 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of img_user_table
-- ----------------------------
INSERT INTO `img_user_table` VALUES (1, 1, 1);
INSERT INTO `img_user_table` VALUES (2, 3, 1);
INSERT INTO `img_user_table` VALUES (3, 5, 1);
INSERT INTO `img_user_table` VALUES (4, 9, 1);
INSERT INTO `img_user_table` VALUES (5, 17, 1);
INSERT INTO `img_user_table` VALUES (6, 18, 1);
INSERT INTO `img_user_table` VALUES (7, 8, 2);
INSERT INTO `img_user_table` VALUES (8, 9, 2);
INSERT INTO `img_user_table` VALUES (9, 10, 2);
INSERT INTO `img_user_table` VALUES (10, 8, 3);
INSERT INTO `img_user_table` VALUES (11, 7, 3);
INSERT INTO `img_user_table` VALUES (13, 5, 3);
INSERT INTO `img_user_table` VALUES (16, 20, 3);
INSERT INTO `img_user_table` VALUES (18, 4, 3);

-- ----------------------------
-- Table structure for user_table
-- ----------------------------
DROP TABLE IF EXISTS `user_table`;
CREATE TABLE `user_table`  (
  `id` int(4) NOT NULL AUTO_INCREMENT,
  `username` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `password` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `headimg` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user_table
-- ----------------------------
INSERT INTO `user_table` VALUES (1, 'admin', '123456', 'https://www.baidu.com/img/flexible/logo/pc/result.png');
INSERT INTO `user_table` VALUES (2, 'chenping', '123456', 'https://www.baidu.com/img/flexible/logo/pc/result.png');
INSERT INTO `user_table` VALUES (3, 'xiaohong', '123456', 'https://www.baidu.com/img/flexible/logo/pc/result.png');

SET FOREIGN_KEY_CHECKS = 1;
