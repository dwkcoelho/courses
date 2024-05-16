CREATE DATABASE library;

CREATE TABLE books (
	id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(40),
    author VARCHAR(40),
    year INT
);

CREATE TABLE customers (
	id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(40),
    birth_year INT
);

CREATE TABLE borrowed_books (
	id INT AUTO_INCREMENT PRIMARY KEY,
    book_id INT,
    customer_id INT,
    borrow_date DATE,
	return_date DATE,
    CONSTRAINT fk_borrowed_book_id FOREIGN KEY (book_id) REFERENCES books(id),
    CONSTRAINT fk_borrowed_customer_id FOREIGN KEY (customer_id) REFERENCES customers(id)
);

