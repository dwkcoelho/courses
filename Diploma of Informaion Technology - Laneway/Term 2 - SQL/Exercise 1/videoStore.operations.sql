ALTER TABLE movies
ADD duration INT;

UPDATE movies
SET duration = 155
WHERE id = 1;

UPDATE movies
SET duration = 90
WHERE id = 2;

UPDATE movies
SET duration = 109
WHERE id = 3; 

DELETE FROM customers
WHERE id = 1;

SELECT * FROM movies;

SELECT * FROM customers;

SELECT * FROM movies WHERE id = 3;

SELECT release_date FROM movies WHERE release_date > 2000;

SELECT director FROM movies WHERE release_date = 2000;