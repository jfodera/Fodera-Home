CREATE DATABASE myWebSite;

-- Attributes is for the headInfo array in lab8 because that is most consistent
CREATE TABLE `myLabs` (
   `headID` int(16) unsigned NOT NULL AUTO_INCREMENT,
   `rel` varchar(20) NOT NULL,
   `href` varchar(200) NOT NULL,
   `labType` char(1) NOT NULL,
   PRIMARY KEY (`headID`)
);