
-- ALTER TABLE 

ALTER TABLE table_name
ADD column_name datatype; 


ALTER TABLE table_name
DROP COLUMN column_name; 


ALTER TABLE table_name
MODIFY COLUMN column_name datatype; 

-- CONSTRAINTS


ALTER TABLE Persons
MODIFY Age int NOT NULL; 


ALTER TABLE Persons
ADD UNIQUE (ID); 

ALTER TABLE Persons
ADD CONSTRAINT UC_Person UNIQUE (ID,LastName); 

ALTER TABLE Persons
DROP INDEX UC_Person;


-- PRIMARY KEY

ALTER TABLE Persons
ADD PRIMARY KEY (ID); 

ALTER TABLE Persons
DROP PRIMARY KEY; 

-- FOREIGN KEY

ALTER TABLE Orders
ADD FOREIGN KEY (PersonID) REFERENCES Persons(PersonID); 

ALTER TABLE Orders
ADD CONSTRAINT FK_PersonOrder
FOREIGN KEY (PersonID) REFERENCES Persons(PersonID); 


ALTER TABLE Orders
DROP FOREIGN KEY FK_PersonOrder; 

-- CHECK constraint is used to limit the value range that can be placed in a column


CREATE TABLE Persons (
    ID int NOT NULL,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int,
    CHECK (Age>=18)
); 


ALTER TABLE Persons
ADD CHECK (Age>=18); 

ALTER TABLE Persons
ADD CONSTRAINT CHK_PersonAge CHECK (Age>=18 AND City='Sandnes'); 

ALTER TABLE Persons
DROP CHECK CHK_PersonAge; 