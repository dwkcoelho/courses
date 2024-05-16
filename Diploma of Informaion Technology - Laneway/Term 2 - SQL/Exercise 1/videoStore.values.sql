INSERT INTO customers (name, email, postal_code, age)
VALUES 
('Jonatas', 'jon.lira@gmail.com', 2205, 32),
('Willian', 'wtcs@gmail.com', 1902, 32);

INSERT INTO movies (title, release_date, director)
VALUES
('Gladiator', 2000, 'Ridley Scott'),
('The Good Father', 1985, 'Mike Newell'),
('White Chicks', 2004, 'Keenen Ivory');

INSERT INTO orders (order_number, customer_id, movie_id)
VALUES
(20241, 1, 1),
(20242, 2, 2),
(20242, 2, 3),
(20243, 1, 1);

