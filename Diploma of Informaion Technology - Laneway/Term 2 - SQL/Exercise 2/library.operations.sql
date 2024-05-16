SELECT customers.full_name, books.title
FROM borrowed_books
INNER JOIN customers ON borrowed_books.customer_id = customers.id
INNER JOIN books ON borrowed_books.book_id = books.id;

SELECT borrowed_books.id,  borrowed_books.borrow_date, customers.full_name, books.title
FROM borrowed_books
INNER JOIN customers ON borrowed_books.customer_id = customers.id
INNER JOIN books ON borrowed_books.book_id = books.id;

SELECT AVG(year) 
FROM borrowed_books
INNER JOIN books ON borrowed_books.book_id = books.id;

SELECT *
FROM borrowed_books
INNER JOIN books ON borrowed_books.book_id = books.id
WHERE borrowed_books.customer_id IN (1, 4, 5);

SELECT MIN(borrow_date) FROM borrowed_books;

SELECT MAX(borrow_date) FROM borrowed_books;

SELECT *
FROM borrowed_books
ORDER BY borrow_date DESC