DROP DATABASE IF EXISTS chum_bucket;

CREATE DATABASE chum_bucket;
USE chum_bucket;

CREATE TABLE krabby_patty
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);