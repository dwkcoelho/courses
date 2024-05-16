/* UPDATE */
ALTER TABLE credit_card
MODIFY COLUMN card_number VARCHAR(100);

/* DELETE */

ALTER TABLE orders
DROP CONSTRAINT fk_payment_method_id;

ALTER TABLE orders
DROP COLUMN payment_method_id;

DROP TABLE payment_method;

/* ADD */ 
ALTER TABLE sushi_platters
ADD COLUMN price INT;

/* READ */ 

SELECT * FROM sushi_platters WHERE id = 1;

SElECT name, total_pieces, sashimi.type AS sashimi, nigiri.type as nigiri, uramaki.type AS uramaki, maki.type AS maki, temaki.type AS temaki, garnish.type AS garnish, sauce.type AS sauce, price
FROM sushi_platters
INNER JOIN sashimi ON sashimi_id = sashimi.id
INNER JOIN nigiri ON nigiri_id = nigiri.id
INNER JOIN uramaki ON uramaki_id = uramaki.id
INNER JOIN maki ON maki_id = maki.id
INNER JOIN temaki ON temaki_id = temaki.id
INNER JOIN garnish ON garnish_id = garnish.id
INNER JOIN sauce ON sauce_id = sauce.id
WHERE sushi_platters.id = 1;

SELECT SUM(sushi_platters.price)
FROM order_sushi_platters
INNER JOIN sushi_platters ON order_sushi_platters.sushi_platter_id = sushi_platters.id;


/* CREATE FUNCTION */
DELIMITER //

CREATE FUNCTION total_income() RETURNS DECIMAL
DETERMINISTIC
BEGIN
    DECLARE income DECIMAL(10, 2);
    
    SELECT SUM(sushi_platters.price)
    INTO income
    FROM order_sushi_platters
    INNER JOIN sushi_platters ON order_sushi_platters.sushi_platter_id = sushi_platters.id;

    RETURN income;
END //

DELIMITER ;

SELECT total_income();

/* ALTER SASHIMI TYPE TO SALMON, INCREASE 5 IN THE PRICE */
DELIMITER // 

CREATE FUNCTION update_price(id INT) RETURNS INT
DETERMINISTIC
BEGIN
    DECLARE new_price INT;
    
	UPDATE sushi_platters
    SET price = price + 5
    WHERE sashimi_id = 1 AND id = id;
    
    SELECT price INTO new_price FROM sushi_platters WHERE id = id LIMIT 1;

    RETURN new_price;
END //

DELIMITER ;

SELECT * FROM sushi_platters;

SELECT update_price(1);

/* TRIGGER */
DELIMITER //

CREATE TRIGGER update_price_trigger
AFTER UPDATE ON sushi_platters
FOR EACH ROW
BEGIN
    IF NEW.sashimi_id = 1 AND OLD.sashimi_id != 1 THEN
        CALL update_price(NEW.id);
    END IF;
END //

DELIMITER ;

UPDATE sushi_platters
SET sashimi_id = 1
WHERE id = 2;

SELECT * FROM sushi_platters;

