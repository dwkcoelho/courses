/* Customers */

INSERT INTO address (unit, level, number, street, neighborhood, city, state, post_code, country) VALUES 
(101, 1, 10, 'Collins Street', 'CBD', 'Melbourne', 'Victoria', 3000, 'Australia'),
(NULL, NULL, 20, 'Flinders Lane', 'Docklands', 'Melbourne', 'Victoria', 3000, 'Australia'),
(202, 2, 30, 'Bourke Street', 'Chinatown', 'Melbourne', 'Victoria', 3000, 'Australia'),
(NULL, NULL, 40, 'Swanston Street', 'Carlton', 'Melbourne', 'Victoria', 3000, 'Australia'),
(NULL, NULL, 50, 'Elizabeth Street', 'CBD', 'Melbourne', 'Victoria', 3000, 'Australia'),
(NULL, NULL, 60, 'Spring Street', 'CBD', 'Melbourne', 'Victoria', 3000, 'Australia'),
(707, 7, 70, 'Russell Street', 'CBD', 'Melbourne', 'Victoria', 3000, 'Australia'),
(NULL, NULL, 80, 'King Street', 'Docklands', 'Melbourne', 'Victoria', 3000, 'Australia'),
(NULL, NULL, 90, 'Queen Street', 'CBD', 'Melbourne', 'Victoria', 3000, 'Australia'),
(NULL, NULL, 100, 'Collins Street', 'CBD', 'Melbourne', 'Victoria', 3000, 'Australia');

INSERT INTO credit_card (card_number, name_account_holder, month, year, cvv) VALUES 
('1234567890123456', 'John Doe', 12, 2025, 123),
('9876543210987654', 'Jane Smith', 10, 2024, 456),
('4567890123456789', 'Alice Johnson', 9, 2023, 789),
('3210987654321098', 'Bob Anderson', 8, 2022, 567),
('6543210987654321', 'Emily Brown', 7, 2026, 234),
('8901234567890123', 'Michael Williams', 6, 2027, 890),
('5678901234567890', 'Samantha Davis', 5, 2028, 321),
('2345678901234567', 'David Wilson', 4, 2029, 654),
('8765432109876543', 'Jennifer Miller', 3, 2030, 987),
('3456789012345678', 'Christopher Taylor', 2, 2031, 432);

INSERT INTO customers (full_name, birth_year, address_id, credit_card_id) VALUES 
('John Doe', 1985, 1, 1),
('Jane Smith', 1986, 2, 2),
('Alice Johnson', 1987, 3, 3),
('Bob Anderson', 1988, 4, 4),
('Emily Brown', 1989, 5, 5),
('Michael Williams', 1990, 6, 6),
('Samantha Davis', 1991, 7, 7),
('David Wilson', 1992, 8, 8),
('Jennifer Miller', 1993, 9, 9),
('Christopher Taylor', 1994, 10, 10);

/* Food */

INSERT INTO sashimi (type) VALUES 
('Salmon'),
('Tuna'),
('Sea Cucumber'),
('Squid'),
('Eel'),
('Octopus'),
('Scallop'),
('Mussel'),
('Crab'),
('Sea Urchin');

INSERT INTO nigiri (type) VALUES 
('Salmon'),
('Tuna'),
('Shrimp'),
('Eel'),
('Yellowtail'),
('Scallop'),
('Sea Urchin'),
('Octopus'),
('Mackerel'),
('Squid');

INSERT INTO uramaki (type) VALUES 
('California'),
('Spicy Tuna'),
('Dragon'),
('Rainbow'),
('Philadelphia'),
('Spider'),
('Volcano'),
('Caterpillar'),
('Tempura'),
('Cucumber');

INSERT INTO maki (type) VALUES 
('Salmon'),
('Avocado'),
('Cucumber'),
('Tuna'),
('Shrimp'),
('Spicy Crab'),
('Yellowtail'),
('Eel'),
('Vegetable'),
('Tempura');

INSERT INTO temaki (type) VALUES 
('Spicy Tuna'),
('Salmon'),
('California'),
('Shrimp'),
('Eel'),
('Yellowtail'),
('Scallop'),
('Tuna Avocado'),
('Vegetable'),
('Crab Tempura');

INSERT INTO garnish (type) VALUES 
('Ginger'),
('Wasabi'),
('Cucumber Slices'),
('Radish'),
('Green Onion'),
('Sesame Seeds'),
('Masago'),
('Tobiko'),
('Shiso Leaves'),
('Pickled Ginger');

INSERT INTO sauce (type) VALUES 
('Soy Sauce'),
('Wasabi Sauce'),
('Eel Sauce'),
('Spicy Mayo'),
('Teriyaki Sauce'),
('Ponzu Sauce'),
('Sriracha Sauce'),
('Yuzu Sauce'),
('Sesame Sauce'),
('Miso Sauce');

/* Sushi Platters */

INSERT INTO sushi_platters (name, total_pieces, sashimi_id, nigiri_id, uramaki_id, maki_id, temaki_id, garnish_id, sauce_id, price) VALUES 
('Ocean Symphony', 18, 1, 1, 1, 1, 1, 1, 1, 49.99),
('Samurai`s Delight ', 20, 2, 2, 2, 2, 2, 2, 2, 59.99),
('Zen Garden Feast', 16, 3, 3, 3, 3, 3, 3, 3, 39.99),
('Dragon`s Bounty', 22, 4, 4, 4, 4, 4, 4, 4, 69.99),
('Sakura Blossom', 14, 5, 5, 5, 5, 5, 5, 5, 34.99),
('Emperor`s Fusion', 21, 6, 6, 6, 6, 6, 6, 6, 64.99),
('Golden Dragon ', 19, 7, 7, 7, 7, 7, 7, 7, 54.99),
('Midnight Serenade', 17, 8, 8, 8, 8, 8, 8, 8, 44.99),
('Lotus Elegance', 15, 9, 9, 9, 9, 9, 9, 9, 29.99),
('Shogun`s Treasure', 23, 10, 10, 10, 10, 10, 10, 10, 74.99);

INSERT INTO orders (customer_id) VALUES 
(1), 
(2), 
(3), 
(4), 
(5), 
(6), 
(7), 
(8), 
(9), 
(10);

INSERT INTO order_sushi_platters (sushi_platter_id, order_id) VALUES 
(1, 1), 
(2, 2), 
(3, 3), 
(4, 3), 
(5, 3),
(5, 4), 
(5, 5), 
(6, 5), 
(6, 6), 
(7, 6),
(7, 6), 
(7, 7), 
(8, 7), 
(8, 7), 
(8, 8),
(9, 8), 
(9, 8), 
(10, 9), 
(10, 9), 
(10, 10);


