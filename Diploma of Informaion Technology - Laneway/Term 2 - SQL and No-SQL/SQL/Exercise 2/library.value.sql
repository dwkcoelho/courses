INSERT INTO books (title, author, year)
VALUES
('A Tale of Two Cities', 'Charles Dickens', 1859),
('And Then There Were None', 'Agatha Christie', 1939),
('Dream of the Red Chamber ', 'Cao Xueqin', 1791),
('The Alchemist ', 'Paulo Coelho', 	1988),
('The Da Vinci Code', 'Dan Brown', 2003);

INSERT INTO customers (full_name, birth_year)
VALUES
('Robson Silva', 1960),
('Rogerio Souza', 1975),
('Anete Souza', 1950),
('Marcio Nascimento', 1980),
('Maria dos Santos', 1990);

INSERT INTO borrowed_books (book_id, customer_id, borrow_date, return_date)
VALUES
(5, 2, '2024-02-13', '2024-02-20'),
(3, 1, '2024-03-20', '2024-02-07'),
(2, 4, '2023-09-30', '2023-10-06'),
(1, 3, '2023-09-25', '2023-09-30'),
(4, 5, '2023-08-26', '2023-08-19');

