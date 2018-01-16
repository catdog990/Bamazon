CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE items(
	id INTEGER (11) AUTO_INCREMENT NOT NULL,
	Name VARCHAR (255) NOT NULL, 
	Department VARCHAR (255) NOT NULL, 
	Price INTEGER (11) NOT NULL, 
	In_Stock INTEGER (11) NOT NULL,
	PRIMARY KEY (id)

);

INSERT INTO items (Name, Department, Price, In_Stock)
VALUES ("Trump's Hairpiece", "WTF", 666, 1);

INSERT INTO items (Name, Department, Price, In_Stock)
VALUES ("Tupac Concert Tix", "Wut", 20000, 2);

INSERT INTO items (Name, Department, Price, In_Stock)
VALUES ("Tarrantino Movie Lead Role", "Wut", 5000, 1);

INSERT INTO items (Name, Department, Price, In_Stock)
VALUES ("Steve Harvey's Mustache", "Essential", 200, 2);

INSERT INTO items (Name, Department, Price, In_Stock)
VALUES ("Pikachu", "Wut", 500, 30);

INSERT INTO items (Name, Department, Price, In_Stock)
VALUES ("Godard (Jimmy Neutron)", "Essential", 2000, 1);

INSERT INTO items (Name, Department, Price, In_Stock)
VALUES ("Shamu", "Wut", 1000, 1);

INSERT INTO items (Name, Department, Price, In_Stock)
VALUES ("Iron-Man Suit", "Essential", 50000, 5);

INSERT INTO items (Name, Department, Price, In_Stock)
VALUES ("Morgan Freeman's Voice", "Essential", 20000, 1);