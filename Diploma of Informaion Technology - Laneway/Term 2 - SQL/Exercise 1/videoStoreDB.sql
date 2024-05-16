CREATE DATABASE video_store;

CREATE TABLE customers (
	id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(40),
    email VARCHAR(40),
    postal_code INT,
    age INT
);

CREATE TABLE movies (
	id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(40),
    release_date INT,
    director VARCHAR(40)
);

CREATE TABLE orders (
	id INT AUTO_INCREMENT PRIMARY KEY,
    order_number INT,
    customer_id INT,
    movie_id INT,
    CONSTRAINT fk_order_customer_id FOREIGN KEY (customer_id) REFERENCES customers(id),
    CONSTRAINT fk_order_movie_id FOREIGN KEY (movie_id) REFERENCES movies(id)
);

DROP DATABASE video_store;




