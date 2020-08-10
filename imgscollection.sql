/*
 Navicat Premium Data Transfer

 Source Server         : test01
 Source Server Type    : MySQL
 Source Server Version : 50729
 Source Host           : localhost:3306
 Source Schema         : imgscollection

 Target Server Type    : MySQL
 Target Server Version : 50729
 File Encoding         : 65001

 Date: 10/08/2020 21:14:35
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for comment_table
-- ----------------------------
DROP TABLE IF EXISTS `comment_table`;
CREATE TABLE `comment_table`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `content` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of comment_table
-- ----------------------------
INSERT INTO `comment_table` VALUES (1, 'xxxxxxxx');

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
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 21 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of img_table
-- ----------------------------
INSERT INTO `img_table` VALUES (1, 'img/001.jpg', '窗帘辅料', '#软装# #窗帘辅料# #软装设计# #软装元素# #家居# #装修# www.loookdesign.com国内最专业软装网', 1);
INSERT INTO `img_table` VALUES (2, 'img/002.jpg', 'jab passamanerie', ' jab passamanerie- Cerca con Google:', 0);
INSERT INTO `img_table` VALUES (3, 'img/003.jpg', 'Romanez', 'Romanez - Life\'s Fabrics:', 0);
INSERT INTO `img_table` VALUES (4, 'img/004.jpg', 'Beautiful drapes', 'Beautiful drapes. Classical swags. Curved ro...', 1);
INSERT INTO `img_table` VALUES (5, 'img/005.jpg', '营造氛围30例', '如何使用[高级灰]来 : 如何使用[高级灰]来营造氛围30例', 0);
INSERT INTO `img_table` VALUES (6, 'img/006.jpg', '杨明山设计', '杨明山设计-龙年国际E1样板间-家居别墅-室内设计联盟 -', 0);
INSERT INTO `img_table` VALUES (7, 'img/007.jpg', '一抹蓝', '一抹蓝 生活圈 展示 设计时代网-Powered by thinkdo3', 0);
INSERT INTO `img_table` VALUES (8, 'img/008.jpg', '南京SKH设计', '南京SKH设计-罗托鲁拉小镇•图兰朵的春天 - 家居别墅设计 - 拓者设计吧 ', 1);
INSERT INTO `img_table` VALUES (9, 'img/009.jpg', '极致之宿软装', '纽约克罗斯比街酒店 Crosby Street Hotel_极致之宿', 0);
INSERT INTO `img_table` VALUES (10, 'img/010.jpg', '软装设计方案', '国外精美窗帘场景图细节图 流苏挂穗 软装设计方案', 1);
INSERT INTO `img_table` VALUES (11, 'img/011.jpg', 'LSD CASA', 'LSD CASA—上海绿地法兰西世家样板间（2015新作） - 家居别墅', 1);
INSERT INTO `img_table` VALUES (12, 'img/012.jpg', '缤纷色彩', '局部 – 孔雀羽毛一样的颜色 缤纷色彩', 0);
INSERT INTO `img_table` VALUES (13, 'img/013.jpg', '酒店设计', '许多世界极奢华的酒店设计都出自Jacques Garcia之手', 1);
INSERT INTO `img_table` VALUES (14, 'img/014.jpg', '欧式阳台窗帘', '#窗帘#欧式阳台窗帘效果图 2013最新欧式窗帘效果图', 0);
INSERT INTO `img_table` VALUES (15, 'img/015.jpg', '叶迹设计', '叶迹设计：三亚创基长乐居精装样板间C户型，海天一色 ', 1);
INSERT INTO `img_table` VALUES (16, 'img/016.jpg', '新中式风格', '新中式风格_来自从零开始倒计时', 0);
INSERT INTO `img_table` VALUES (17, 'img/017.jpg', '半遮光窗帘', '欧式经典窗幔高档藏青色丝绸白色里衬半遮光窗帘', 1);
INSERT INTO `img_table` VALUES (18, 'img/018.jpg', '阳台飘窗', '地中海乡村蓝黄条纹格子升降罗马帘客厅书房阳台飘窗成品窗帘定制', 0);
INSERT INTO `img_table` VALUES (19, 'img/019.jpg', '棉麻混纺沙发', '澳大利亚 黄棉麻混纺沙发靠抱枕套 办公室腰枕套 午休枕靠背垫套-tmall.com天猫', 0);
INSERT INTO `img_table` VALUES (20, 'img/020.jpg', '巴黎屋檐下', '巴黎屋檐下--89㎡浪漫法式乡村_2074258', 0);

-- ----------------------------
-- Table structure for img_user_table
-- ----------------------------
DROP TABLE IF EXISTS `img_user_table`;
CREATE TABLE `img_user_table`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `imgid` int(11) NOT NULL,
  `userid` int(11) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

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
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user_table
-- ----------------------------
INSERT INTO `user_table` VALUES (1, 'admin', '123456', NULL);

SET FOREIGN_KEY_CHECKS = 1;
