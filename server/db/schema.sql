
use eleable2;

drop table if exists Users;
CREATE TABLE `Users` (
  `id` int(4) NOT NULL AUTO_INCREMENT,
  `email` char(50) NOT NULL,
  `password` char(100) NOT NULL,
  `createdAt` time DEFAULT NULL,
  `updatedAt` time DEFAULT NULL,
  `name` char(50) DEFAULT 'name',
  `phoneNumber` char(12) DEFAULT '000-000-0000',
  `address` varchar(100) DEFAULT '',
  `city` varchar(30) DEFAULT '',
  `state` varchar(15) DEFAULT '',
  `zip` char(5) DEFAULT '10000',
  `aboutme` varchar(200) DEFAULT 'briefly tell us about yourself.',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB;

drop table if exists contacts;
CREATE TABLE `contacts` (
  `id` int(4) NOT NULL AUTO_INCREMENT,
  `first_name` char(30) NOT NULL,
  `last_name` char(30) NOT NULL,
  `phone_number` char(20) DEFAULT NULL,
  `email` char(100) NOT NULL,
  `social_link` char(120) DEFAULT NULL,
  `image` char(200) DEFAULT NULL,
  `user_id` int(4) DEFAULT '30',
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `contacts_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `Users` (`id`)
) ENGINE=InnoDB;






