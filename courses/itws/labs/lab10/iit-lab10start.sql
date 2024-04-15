-- create the tables for our movies
CREATE TABLE `movies` (
   `movieid` int(10) unsigned NOT NULL AUTO_INCREMENT,
   `title` varchar(100) NOT NULL,
   `year` char(4) DEFAULT NULL,
   PRIMARY KEY (`movieid`)
);
-- insert data into the tables
INSERT INTO movies
VALUES (1, "Elizabeth", "1998"),
   (2, "Black Widow", "2021"),
   (3, "Oh Brother Where Art Thou?", "2000"),
   (
      4,
      "The Lord of the Rings: The Fellowship of the Ring",
      "2001"
   ),
   (5, "Up in the Air", "2009");

-- create Actors Program
CREATE TABLE `actors` (
   `actorid` int(10) unsigned NOT NULL AUTO_INCREMENT,
   `first_name` varchar(60) NOT NULL,
   `last_name` char(40) NOT NULL,
   `dob` DATE NOT NULL,
   PRIMARY KEY (`actorid`)
);

INSERT INTO actors
VALUES (1, 'Bill ', 'Murray', '1950-09-21'),
(2, 'Grant ', 'Gustin', '1990-01-14'),
(3, 'Eddie', 'Murphy', '1961-01-03'),
(4, 'Steve', 'Carrel', '1962-08-16'),
(5, 'Samuel', 'Jackson', '1948-12-21'),
(6, 'Cary', 'Grant', '1904-01-18');



-- Movie Actor Table

CREATE TABLE `movie_actors` (
   `itemid` int(10) unsigned NOT NULL AUTO_INCREMENT, 
   `movieid` int(10) NOT NULL, 
   `actorid` int(10) NOT NULL, 
   PRIMARY KEY ( `itemid`)
);


INSERT INTO movie_actors
VALUES (1, 9, 4), 
(2, 6, 1), 
(3, 7, 1), 
(4, 10, 3), 
(5, 8, 5), 
(6, 11, 7)
