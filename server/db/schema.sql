
use eleable2;

drop table if exists contacts;
create table contacts (
	id int(4) primary key auto_increment,
    first_name char(30) not null,
    last_name char(30) not null,
    phone_number char(20),
    email char(100) not null,
    social_link char(120),
    image char(200),
    FOREIGN KEY (user_id)
   REFERENCES users(id)
);

drop table if exists users;
create table users (
    id int(4) primary key auto_increment,
    email char(50) not null, 
    password char(100) not null,
    name char(20),
    phone_number char(12),
    address char(255),
    city char(50),
    state char(50),
    zip char(5),
    aboutme char(255)
);




