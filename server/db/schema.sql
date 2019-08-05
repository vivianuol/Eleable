
use eleable;

drop table if exists contacts;
create table contacts (
	id int(4) primary key auto_increment,
    first_name char(30) not null,
    last_name char(30) not null,
    phone_number char(20),
    email char(100) not null,
    social_link char(120),
    image char(200)
);

drop table if exists app_user;
create table app_user (
	user_name char(20) not null,
    phone_number char(12) not null, 
    email char(50), 
    social_link char(100),
    primary key(user_name)
);

drop table if exists users;
create table users (
    id int(4) primary key auto_increment,
    email char(50) not null, 
    password char(100) not null,
    createdAt TIME,
    updatedAt TIME
);




