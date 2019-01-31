/*
Navicat MySQL Data Transfer

Source Server         : 刘洋的数据库
Source Server Version : 80013
Source Host           : 120.79.192.193:3306
Source Database       : qq

Target Server Type    : MYSQL
Target Server Version : 80013
File Encoding         : 65001

Date: 2019-01-31 10:03:46
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for friend
-- ----------------------------
DROP TABLE IF EXISTS `friend`;
CREATE TABLE `friend` (
  `idA` int(10) unsigned DEFAULT NULL,
  `idB` int(10) unsigned DEFAULT NULL,
  `inA` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT '我的好友',
  `inB` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT '我的好友'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of friend
-- ----------------------------
INSERT INTO `friend` VALUES ('1', '2', '分组一', '我的好友');
INSERT INTO `friend` VALUES ('1', '3', '分组一', '我的好友');
INSERT INTO `friend` VALUES ('1', '4', '分组二', '我的好友');
INSERT INTO `friend` VALUES ('1', '5', '分组二', '我的好友');
INSERT INTO `friend` VALUES ('1', '6', '分组二', '我的好友');
INSERT INTO `friend` VALUES ('1', '7', '分组二', '我的好友');
INSERT INTO `friend` VALUES ('1', '8', '分组二', '我的好友');
INSERT INTO `friend` VALUES ('1', '9', '分组三', '我的好友');
INSERT INTO `friend` VALUES ('1', '10', '分组三', '我的好友');
INSERT INTO `friend` VALUES ('1', '11', '分组三', '我的好友');
INSERT INTO `friend` VALUES ('1', '12', '分组三', '我的好友');
INSERT INTO `friend` VALUES ('1', '13', '分组三', '我的好友');
INSERT INTO `friend` VALUES ('1', '14', '分组三', '我的好友');
INSERT INTO `friend` VALUES ('1', '15', '分组三', '我的好友');
INSERT INTO `friend` VALUES ('1', '16', '分组三', '我的好友');
INSERT INTO `friend` VALUES ('1', '17', '分组三', '我的好友');
INSERT INTO `friend` VALUES ('1', '18', '分组四', '我的好友');
INSERT INTO `friend` VALUES ('1', '19', '分组四', '我的好友');
INSERT INTO `friend` VALUES ('1', '20', '分组四', '我的好友');
INSERT INTO `friend` VALUES ('1', '21', '分组四', '我的好友');
INSERT INTO `friend` VALUES ('2', '3', '同事', '我的好友');
INSERT INTO `friend` VALUES ('2', '4', '同事', '我的好友');
INSERT INTO `friend` VALUES ('2', '5', '同事', '我的好友');
INSERT INTO `friend` VALUES ('2', '6', '同事', '我的好友');
INSERT INTO `friend` VALUES ('2', '7', '同事', '我的好友');
INSERT INTO `friend` VALUES ('2', '8', '同事', '我的好友');
INSERT INTO `friend` VALUES ('2', '9', '同事', '我的好友');
INSERT INTO `friend` VALUES ('2', '10', '同事', '我的好友');
INSERT INTO `friend` VALUES ('3', '4', '朋友', '我的好友');
INSERT INTO `friend` VALUES ('3', '5', '朋友', '我的好友');
INSERT INTO `friend` VALUES ('3', '6', '朋友', '我的好友');
INSERT INTO `friend` VALUES ('3', '7', '朋友', '我的好友');
INSERT INTO `friend` VALUES ('3', '8', '朋友', '我的好友');
INSERT INTO `friend` VALUES ('3', '9', '朋友', '我的好友');
INSERT INTO `friend` VALUES ('3', '10', '朋友', '我的好友');
INSERT INTO `friend` VALUES ('4', '11', '我的好友', '我的好友');
INSERT INTO `friend` VALUES ('4', '12', '我的好友', '我的好友');
INSERT INTO `friend` VALUES ('4', '13', '我的好友', '我的好友');
INSERT INTO `friend` VALUES ('4', '14', '我的好友', '我的好友');
INSERT INTO `friend` VALUES ('4', '15', '我的好友', '我的好友');
INSERT INTO `friend` VALUES ('4', '16', '我的好友', '我的好友');
INSERT INTO `friend` VALUES ('4', '17', '我的好友', '我的好友');

-- ----------------------------
-- Table structure for message
-- ----------------------------
DROP TABLE IF EXISTS `message`;
CREATE TABLE `message` (
  `content` varchar(1000) DEFAULT NULL COMMENT 'qq消息内容',
  `fromId` int(10) unsigned NOT NULL COMMENT '发送人id',
  `toId` int(10) unsigned NOT NULL COMMENT '接收人id',
  `createTime` bigint(30) unsigned NOT NULL COMMENT '消息发送时间',
  `isRead` tinyint(3) unsigned NOT NULL COMMENT '是否已读'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of message
-- ----------------------------
INSERT INTO `message` VALUES ('来自狗子的消息', '2', '1', '1545122467052', '1');
INSERT INTO `message` VALUES ('来自猫子的消息', '3', '1', '1545122492762', '1');
INSERT INTO `message` VALUES ('来自兔子的消息', '4', '1', '1545122512161', '1');
INSERT INTO `message` VALUES ('来自鸡子的消息', '5', '1', '1545122538057', '1');
INSERT INTO `message` VALUES ('来自鸭子的消息', '6', '1', '1545122555138', '1');
INSERT INTO `message` VALUES ('来自败子的消息', '7', '1', '1545122591776', '1');
INSERT INTO `message` VALUES ('来自傻子的消息', '8', '1', '1545122760832', '1');
INSERT INTO `message` VALUES ('来自哈子的消息', '9', '1', '1545123934385', '1');
INSERT INTO `message` VALUES ('来自猪子的消息', '10', '1', '1545123957700', '1');
INSERT INTO `message` VALUES ('来自牛子的消息', '11', '1', '1545123957936', '0');
INSERT INTO `message` VALUES ('来自羊子的消息', '12', '1', '1545123989321', '0');
INSERT INTO `message` VALUES ('来自狮子的消息', '13', '1', '1545124008602', '1');
INSERT INTO `message` VALUES ('来自虎子的消息', '14', '1', '1545124028305', '0');
INSERT INTO `message` VALUES ('来自狼子的消息', '15', '1', '1545124089631', '0');
INSERT INTO `message` VALUES ('来自鸟子的消息', '16', '1', '1545124112100', '1');
INSERT INTO `message` VALUES ('来自蛇子的消息', '17', '1', '1545124112153', '0');
INSERT INTO `message` VALUES ('来自疯子的消息', '18', '1', '1545124150121', '0');
INSERT INTO `message` VALUES ('来自野子的消息', '19', '1', '1545124394100', '0');
INSERT INTO `message` VALUES ('来自鸽子的消息', '20', '1', '1545124394158', '1');
INSERT INTO `message` VALUES ('来自豹子的消息', '21', '1', '1545124411984', '0');
INSERT INTO `message` VALUES ('龙城故事发给狗子的消息', '1', '2', '1545399916971', '0');
INSERT INTO `message` VALUES ('龙城故事发给猫子的消息', '1', '3', '1545399917000', '0');
INSERT INTO `message` VALUES ('龙城故事发给兔子的消息', '1', '4', '1545400123609', '1');
INSERT INTO `message` VALUES ('龙城故事发给鸡子的消息', '1', '5', '1545400198859', '0');
INSERT INTO `message` VALUES ('龙城故事发给鸭子的消息', '1', '6', '1545400232425', '0');
INSERT INTO `message` VALUES ('龙城故事发给败子的消息', '1', '7', '1545400258881', '0');
INSERT INTO `message` VALUES ('龙城故事发给傻子的消息', '1', '8', '1545400258890', '0');
INSERT INTO `message` VALUES ('龙城故事发给哈子的消息', '1', '9', '1545400259000', '0');
INSERT INTO `message` VALUES ('龙城故事发给猪子的消息', '1', '10', '1545400259111', '0');
INSERT INTO `message` VALUES ('龙城故事发给牛子的消息', '1', '11', '1545400259999', '0');
INSERT INTO `message` VALUES ('龙城故事发给羊子的消息', '1', '12', '1545400266661', '0');
INSERT INTO `message` VALUES ('龙城故事发给狮子的消息', '1', '13', '1545400435890', '0');
INSERT INTO `message` VALUES ('龙城故事发给虎子的消息', '1', '14', '1545400436000', '0');
INSERT INTO `message` VALUES ('龙城故事发给狼子的消息', '1', '15', '1545400437000', '0');
INSERT INTO `message` VALUES ('龙城故事发给鸟子的消息', '1', '16', '1545400438000', '0');
INSERT INTO `message` VALUES ('龙城故事发给蛇子的消息', '1', '17', '1545400597622', '0');
INSERT INTO `message` VALUES ('龙城故事发给疯子的消息', '1', '18', '1545400606660', '0');
INSERT INTO `message` VALUES ('龙城故事发给野子的消息', '1', '19', '1545400616460', '0');
INSERT INTO `message` VALUES ('龙城故事发给鸽子的消息', '1', '20', '1545400627374', '0');
INSERT INTO `message` VALUES ('龙城故事发给豹子的消息', '1', '21', '1545400637016', '0');
INSERT INTO `message` VALUES ('你好，在吗', '2', '1', '1548509914379', '1');
INSERT INTO `message` VALUES ('嗯，在的', '1', '2', '1548519946754', '0');
INSERT INTO `message` VALUES ('我找你有点事', '1', '3', '1548522873669', '0');
INSERT INTO `message` VALUES ('我找你有点事', '1', '3', '1548522935576', '0');
INSERT INTO `message` VALUES ('你是兔子吗', '1', '4', '1548570358329', '1');
INSERT INTO `message` VALUES ('你是兔子吗', '1', '4', '1548570397210', '1');
INSERT INTO `message` VALUES ('你是兔子吗', '1', '4', '1548570717582', '1');
INSERT INTO `message` VALUES ('下班了吗', '1', '5', '1548571105831', '0');
INSERT INTO `message` VALUES ('你好，在吗', '1', '6', '1548575681908', '0');
INSERT INTO `message` VALUES ('放学了吗', '1', '7', '1548575751392', '0');
INSERT INTO `message` VALUES ('在吗', '1', '8', '1548589897870', '0');
INSERT INTO `message` VALUES ('这是一条测试消息', '1', '8', '1548597660795', '0');
INSERT INTO `message` VALUES ('测试成功', '1', '8', '1548597671754', '0');
INSERT INTO `message` VALUES ('在吗', '1', '9', '1548662883463', '0');
INSERT INTO `message` VALUES ('嗯  在的', '9', '1', '1548662909578', '1');
INSERT INTO `message` VALUES ('新年快乐', '1', '9', '1548662920071', '0');
INSERT INTO `message` VALUES ('你也新年快乐哦', '9', '1', '1548662942601', '1');
INSERT INTO `message` VALUES ('你们几号放假？', '1', '9', '1548663471471', '0');
INSERT INTO `message` VALUES ('1月31号', '9', '1', '1548663477218', '1');
INSERT INTO `message` VALUES ('你好', '1', '10', '1548730630377', '0');
INSERT INTO `message` VALUES ('你好', '1', '10', '1548730676703', '0');
INSERT INTO `message` VALUES ('你好', '1', '9', '1548730717752', '0');
INSERT INTO `message` VALUES ('嗯', '1', '9', '1548730741413', '0');
INSERT INTO `message` VALUES ('嗯嗯', '1', '9', '1548730754205', '0');
INSERT INTO `message` VALUES ('在吗', '9', '1', '1548730771232', '1');
INSERT INTO `message` VALUES ('嗯   在的', '1', '9', '1548730776653', '0');
INSERT INTO `message` VALUES ('需要什么吗', '1', '9', '1548732804058', '0');
INSERT INTO `message` VALUES ('写写', '9', '1', '1548732821208', '1');
INSERT INTO `message` VALUES ('新年快乐', '9', '1', '1548732953944', '1');
INSERT INTO `message` VALUES ('测试一下', '9', '1', '1548732998560', '1');
INSERT INTO `message` VALUES ('测试', '9', '1', '1548733140384', '1');
INSERT INTO `message` VALUES ('再测试一下', '9', '1', '1548733215897', '1');
INSERT INTO `message` VALUES ('好的', '9', '1', '1548733234391', '1');
INSERT INTO `message` VALUES ('你好', '9', '1', '1548733300015', '1');
INSERT INTO `message` VALUES ('bug解决完毕', '9', '1', '1548733313223', '1');
INSERT INTO `message` VALUES ('gsgs', '4', '1', '1548750431021', '1');
INSERT INTO `message` VALUES ('fff', '4', '1', '1548750434500', '1');
INSERT INTO `message` VALUES ('fa', '4', '1', '1548750435556', '1');
INSERT INTO `message` VALUES ('你好', '1', '4', '1548750435261', '1');
INSERT INTO `message` VALUES ('faa', '4', '1', '1548750436501', '1');
INSERT INTO `message` VALUES ('666', '4', '1', '1548750465332', '1');
INSERT INTO `message` VALUES ('777', '1', '4', '1548751225419', '1');
INSERT INTO `message` VALUES ('888', '4', '1', '1548751229814', '1');
INSERT INTO `message` VALUES ('999', '1', '4', '1548751241626', '1');
INSERT INTO `message` VALUES ('1212', '4', '1', '1548751265406', '1');
INSERT INTO `message` VALUES ('545', '1', '4', '1548751271730', '1');
INSERT INTO `message` VALUES ('636', '1', '4', '1548751419603', '1');
INSERT INTO `message` VALUES ('989', '4', '1', '1548751434118', '1');
INSERT INTO `message` VALUES ('嗯啊', '5', '1', '1548751530148', '1');
INSERT INTO `message` VALUES ('好的', '1', '5', '1548751559156', '0');
INSERT INTO `message` VALUES ('测试一下', '1', '5', '1548751776153', '0');
INSERT INTO `message` VALUES ('测试成功', '1', '5', '1548751783937', '0');
INSERT INTO `message` VALUES ('人呢', '1', '6', '1548751831952', '0');
INSERT INTO `message` VALUES ('在的', '6', '1', '1548751838149', '1');
INSERT INTO `message` VALUES ('我在啊', '6', '1', '1548751926579', '1');
INSERT INTO `message` VALUES ('你好', '1', '6', '1548751952024', '0');
INSERT INTO `message` VALUES ('嗯', '1', '7', '1548751997569', '0');
INSERT INTO `message` VALUES ('好吧', '1', '7', '1548752104120', '0');
INSERT INTO `message` VALUES ('写写', '7', '1', '1548752108659', '1');
INSERT INTO `message` VALUES ('很好', '1', '9', '1548752139880', '0');
INSERT INTO `message` VALUES ('谢谢', '9', '1', '1548752151966', '1');
INSERT INTO `message` VALUES ('赵宇峰在不在？', '1', '4', '1548752499431', '1');
INSERT INTO `message` VALUES ('在', '1', '4', '1548752589049', '1');
INSERT INTO `message` VALUES ('在', '4', '1', '1548752672036', '1');
INSERT INTO `message` VALUES ('不错 ', '1', '4', '1548752704838', '1');
INSERT INTO `message` VALUES ('这不行啊 ', '4', '1', '1548752713385', '1');
INSERT INTO `message` VALUES ('估计没戏了', '4', '1', '1548752729296', '1');
INSERT INTO `message` VALUES ('测试完毕    bug没有了', '1', '4', '1548752765781', '1');
INSERT INTO `message` VALUES ('我去', '4', '1', '1548752776808', '1');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '用户id',
  `userName` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '' COMMENT '用户昵称',
  `password` char(40) NOT NULL COMMENT '用户密码',
  `nickName` varchar(20) NOT NULL COMMENT '用户qq昵称',
  `isVip` tinyint(3) unsigned NOT NULL COMMENT '用户的vip等级',
  `say` varchar(100) DEFAULT NULL COMMENT '个性签名',
  `userHead` varchar(200) NOT NULL,
  `userBg` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '用户背景图',
  `isLogin` tinyint(3) unsigned NOT NULL DEFAULT '0',
  `socketId` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', '111111', '123456', '龙城故事', '2', '红鲤鱼和绿鲤鱼与驴', 'http://120.79.192.193/assets/user/userHead.jpg', 'http://120.79.192.193/assets/user/userBg.png', '1', 'e0utYW5vlvNHQNycAABk');
INSERT INTO `user` VALUES ('2', '222222', '123456', '狗子', '2', '账号:222222', 'http://120.79.192.193/assets/headImgs/3.jpg', 'http://120.79.192.193/assets/user/userBg.png', '0', null);
INSERT INTO `user` VALUES ('3', '333333', '123456', '猫子', '1', '账号:333333', 'http://120.79.192.193/assets/headImgs/4.jpg', 'http://120.79.192.193/assets/user/userBg.png', '0', null);
INSERT INTO `user` VALUES ('4', '444444', '123456', '兔子', '2', '账号:444444', 'http://120.79.192.193/assets/headImgs/5.jpg', 'http://120.79.192.193/assets/user/userBg.png', '1', '82WLJ0LUimZnFaiIAAAd');
INSERT INTO `user` VALUES ('5', '555555', '123456', '鸡子', '1', '账号:555555', 'http://120.79.192.193/assets/headImgs/6.jpg', 'http://120.79.192.193/assets/user/userBg.png', '1', 'dtQj-KuPnAE2B03aAAAT');
INSERT INTO `user` VALUES ('6', '666666', '123456', '鸭子', '0', '账号:666666', 'http://120.79.192.193/assets/headImgs/7.jpg', 'http://120.79.192.193/assets/user/userBg.png', '1', 'Z9UWpzxhkVPToN7fAAAX');
INSERT INTO `user` VALUES ('7', '777777', '123456', '败子', '0', '账号:777777', 'http://120.79.192.193/assets/headImgs/8.jpg', 'http://120.79.192.193/assets/user/userBg.png', '1', '0tfJE_Wjsr8BH08QAAAZ');
INSERT INTO `user` VALUES ('8', '888888', '123456', '傻子', '2', '账号:888888', 'http://120.79.192.193/assets/headImgs/9.jpg', 'http://120.79.192.193/assets/user/userBg.png', '1', 'UUs8NX7tsdNrmuanAAAh');
INSERT INTO `user` VALUES ('9', '999999', '123456', '哈子', '0', '账号:999999', 'http://120.79.192.193/assets/headImgs/10.jpg', 'http://120.79.192.193/assets/user/userBg.png', '1', '0tfJE_Wjsr8BH08QAAAZ');
INSERT INTO `user` VALUES ('10', '1111111', '123456', '猪子', '2', '账号:1111111', 'http://120.79.192.193/assets/headImgs/11.jpg', 'http://120.79.192.193/assets/user/userBg.png', '1', '2y_sj-2bsbY4Hh3DAAA1');
INSERT INTO `user` VALUES ('11', '2222222', '123456', '牛子', '1', '账号:2222222', 'http://120.79.192.193/assets/headImgs/12.jpg', 'http://120.79.192.193/assets/user/userBg.png', '0', null);
INSERT INTO `user` VALUES ('12', '3333333', '123456', '羊子', '0', '账号:3333333', 'http://120.79.192.193/assets/headImgs/13.jpg', 'http://120.79.192.193/assets/user/userBg.png', '0', null);
INSERT INTO `user` VALUES ('13', '4444444', '123456', '狮子', '2', '账号:4444444', 'http://120.79.192.193/assets/headImgs/14.jpg', 'http://120.79.192.193/assets/user/userBg.png', '0', null);
INSERT INTO `user` VALUES ('14', '5555555', '123456', '虎子', '0', '账号:5555555', 'http://120.79.192.193/assets/headImgs/15.jpg', 'http://120.79.192.193/assets/user/userBg.png', '0', null);
INSERT INTO `user` VALUES ('15', '6666666', '123456', '狼子', '0', '账号:6666666', 'http://120.79.192.193/assets/headImgs/16.jpg', 'http://120.79.192.193/assets/user/userBg.png', '0', null);
INSERT INTO `user` VALUES ('16', '7777777', '123456', '鸟子', '1', '账号:7777777', 'http://120.79.192.193/assets/headImgs/17.jpg', 'http://120.79.192.193/assets/user/userBg.png', '0', null);
INSERT INTO `user` VALUES ('17', '8888888', '123456', '蛇子', '1', '账号:8888888', 'http://120.79.192.193/assets/headImgs/18.jpg', 'http://120.79.192.193/assets/user/userBg.png', '0', null);
INSERT INTO `user` VALUES ('18', '9999999', '123456', '疯子', '0', '账号:9999999', 'http://120.79.192.193/assets/headImgs/19.jpg', 'http://120.79.192.193/assets/user/userBg.png', '0', null);
INSERT INTO `user` VALUES ('19', '11111111', '123456', '野子', '0', '账号:11111111', 'http://120.79.192.193/assets/headImgs/20.jpg', 'http://120.79.192.193/assets/user/userBg.png', '0', null);
INSERT INTO `user` VALUES ('20', '22222222', '123456', '鸽子', '2', '账号:22222222', 'http://120.79.192.193/assets/headImgs/21.jpg', 'http://120.79.192.193/assets/user/userBg.png', '0', null);
INSERT INTO `user` VALUES ('21', '33333333', '123456', '豹子', '0', '账号:33333333', 'http://120.79.192.193/assets/headImgs/22.jpg', 'http://120.79.192.193/assets/user/userBg.png', '0', null);
