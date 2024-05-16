CREATE DATABASE sushibarrestaurant;

/* CUSTOMER */

CREATE TABLE address (
	id INT AUTO_INCREMENT PRIMARY KEY,
    unit INT,
    level INT,
    number INT,
    street VARCHAR(200),
    neighborhood VARCHAR(200),
    city VARCHAR (200),
    state VARCHAR(100),
    post_code INT,
    country VARCHAR(40)
);

CREATE TABLE credit_card (
	id INT AUTO_INCREMENT PRIMARY KEY,
    card_number INT,
    name_account_holder VARCHAR(200),
    month INT,
    year INT,
    cvv INT
);

CREATE TABLE customers (
	id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(200),
	birth_year INT,
    address_id INT,
    credit_card_id INT,
    CONSTRAINT fk_customers_address_id FOREIGN KEY (address_id) REFERENCES address(id),
    CONSTRAINT fk_customers_credit_card_id FOREIGN KEY (credit_card_id) REFERENCES credit_card(id)
);

/* SUSHI PLATERS: UNITS */

CREATE TABLE sashimi (
	id INT AUTO_INCREMENT PRIMARY KEY,
    type VARCHAR(40)
);

CREATE TABLE nigiri (
	id INT AUTO_INCREMENT PRIMARY KEY,
    type VARCHAR(40)
);

CREATE TABLE uramaki (
	id INT AUTO_INCREMENT PRIMARY KEY,
    type VARCHAR(40)
);

CREATE TABLE maki (
	id INT AUTO_INCREMENT PRIMARY KEY,
    type VARCHAR(40)
);

CREATE TABLE temaki (
	id INT AUTO_INCREMENT PRIMARY KEY,
    type VARCHAR(40)
);

CREATE TABLE garnish (
	id INT AUTO_INCREMENT PRIMARY KEY,
    type VARCHAR(40)
);

CREATE TABLE sauce (
	id INT AUTO_INCREMENT PRIMARY KEY,
    type VARCHAR(40)
);


/* SUSHI PLATERS: PLATERS */

CREATE TABLE sushi_platters (
	id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    total_pieces INT,
    sashimi_id INT,
    nigiri_id INT,
    uramaki_id INT,
    maki_id INT,
    temaki_id INT,
    garnish_id INT,
    sauce_id INT,
    CONSTRAINT fk_sashimi_id FOREIGN KEY (sashimi_id) REFERENCES sashimi(id),
    CONSTRAINT fk_nigiri_id FOREIGN KEY (nigiri_id) REFERENCES nigiri(id),
    CONSTRAINT fk_uramaki_id FOREIGN KEY (uramaki_id) REFERENCES uramaki(id),
    CONSTRAINT fk_meki_id FOREIGN KEY (maki_id) REFERENCES maki(id),
    CONSTRAINT fk_temaki_id FOREIGN KEY (temaki_id) REFERENCES temaki(id),
    CONSTRAINT fk_garnish_id FOREIGN KEY (garnish_id) REFERENCES garnish(id),
    CONSTRAINT fk_sauce_id FOREIGN KEY (sauce_id) REFERENCES sauce(id)
);

/* ORDER */

CREATE TABLE payment_method (
	id INT AUTO_INCREMENT PRIMARY KEY,
    type VARCHAR(40)
);

CREATE TABLE orders (
	id INT AUTO_INCREMENT PRIMARY KEY,
    customer_id INT,
    payment_method_id INT,
    CONSTRAINT fk_customer_id FOREIGN KEY (customer_id) REFERENCES customers(id),
    CONSTRAINT fk_payment_method_id FOREIGN KEY (payment_method_id) REFERENCES payment_method(id)
);

CREATE TABLE order_sushi_platters (
	id INT AUTO_INCREMENT PRIMARY KEY,
	sushi_platter_id INT,
    order_id INT,
	CONSTRAINT fk_sushi_platter_id FOREIGN KEY (sushi_platter_id) REFERENCES sushi_platters(id),
    CONSTRAINT fk_order_id FOREIGN KEY (order_id) REFERENCES orders(id)
);
