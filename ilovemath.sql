/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50615
Source Host           : localhost:3306
Source Database       : ilovemath

Target Server Type    : MYSQL
Target Server Version : 50615
File Encoding         : 65001

Date: 2018-07-23 15:35:51
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for rank
-- ----------------------------
DROP TABLE IF EXISTS `rank`;
CREATE TABLE `rank` (
  `num` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(20) DEFAULT NULL,
  `grade` int(10) DEFAULT NULL,
  `level` varchar(2) DEFAULT NULL,
  PRIMARY KEY (`num`)
) ENGINE=InnoDB AUTO_INCREMENT=1135 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of rank
-- ----------------------------
INSERT INTO `rank` VALUES ('1111', 'XJN', '13480', 'D');
INSERT INTO `rank` VALUES ('1112', '555', '12450', 'B');
INSERT INTO `rank` VALUES ('1113', '555', '12450', 'B');
INSERT INTO `rank` VALUES ('1119', 'ccc', '12550', 'B');
INSERT INTO `rank` VALUES ('1120', 'bbb', '12550', 'B');
INSERT INTO `rank` VALUES ('1122', 'LJL', '12032', 'A');
INSERT INTO `rank` VALUES ('1123', 'CY', '11950', 'S');
INSERT INTO `rank` VALUES ('1124', 'LPP', '12936', 'C');
INSERT INTO `rank` VALUES ('1125', 'ZBQ', '12397', 'S');
INSERT INTO `rank` VALUES ('1133', 'LPP', '11950', 'S');
INSERT INTO `rank` VALUES ('1134', 'aa', '11907', 'S');
