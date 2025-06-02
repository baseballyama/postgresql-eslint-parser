-- Transaction control test
BEGIN;

INSERT INTO users (full_name, email, status) 
VALUES ('John Doe', 'john@example.com', 'active');

SAVEPOINT user_created;

INSERT INTO orders (user_id, total_amount, order_date)
SELECT id, 99.99, NOW()
FROM users 
WHERE email = 'john@example.com';

SAVEPOINT order_created;

-- This might fail
INSERT INTO order_items (order_id, product_id, quantity, price)
SELECT o.id, 1, 2, 49.99
FROM orders o
JOIN users u ON o.user_id = u.id
WHERE u.email = 'john@example.com';

-- If something went wrong, rollback to savepoint
-- ROLLBACK TO SAVEPOINT order_created;

COMMIT;

-- Transaction with error handling in plpgsql
DO $$
DECLARE
    user_id INTEGER;
    order_id INTEGER;
    error_msg TEXT;
BEGIN
    -- Start transaction block
    BEGIN
        INSERT INTO users (full_name, email, status) 
        VALUES ('Jane Doe', 'jane@example.com', 'active')
        RETURNING id INTO user_id;
        
        INSERT INTO orders (user_id, total_amount, order_date)
        VALUES (user_id, 150.00, NOW())
        RETURNING id INTO order_id;
        
        -- Simulate error
        IF random() > 0.5 THEN
            RAISE EXCEPTION 'Simulated error';
        END IF;
        
        INSERT INTO order_items (order_id, product_id, quantity, price)
        VALUES (order_id, 2, 1, 150.00);
        
        RAISE NOTICE 'Transaction completed successfully';
        
    EXCEPTION 
        WHEN OTHERS THEN
            GET STACKED DIAGNOSTICS error_msg = MESSAGE_TEXT;
            RAISE NOTICE 'Transaction failed: %', error_msg;
            -- Transaction is automatically rolled back
            RAISE;
    END;
END $$;

-- Isolation levels
BEGIN ISOLATION LEVEL SERIALIZABLE;
    UPDATE users SET status = 'premium' WHERE id = 1;
    SELECT pg_sleep(2);
    UPDATE orders SET total_amount = total_amount * 0.9 WHERE user_id = 1;
COMMIT;

-- Read-only transaction
BEGIN READ ONLY;
    SELECT COUNT(*) FROM users;
    SELECT AVG(total_amount) FROM orders;
COMMIT;

-- Deferrable transaction
BEGIN ISOLATION LEVEL SERIALIZABLE READ ONLY DEFERRABLE;
    SELECT u.full_name, COUNT(o.id) as order_count
    FROM users u
    LEFT JOIN orders o ON u.id = o.user_id
    GROUP BY u.id, u.full_name;
COMMIT;

-- Prepared transactions (2PC)
PREPARE TRANSACTION 'transfer_funds_1';

-- Later...
-- COMMIT PREPARED 'transfer_funds_1';
-- or
-- ROLLBACK PREPARED 'transfer_funds_1';

-- Advisory locks
SELECT pg_advisory_lock(12345);

-- Critical section
UPDATE accounts 
SET balance = balance - 100 
WHERE id = 1;

UPDATE accounts 
SET balance = balance + 100 
WHERE id = 2;

SELECT pg_advisory_unlock(12345);

-- Lock timeout
SET lock_timeout = '5s';

BEGIN;
    LOCK TABLE users IN EXCLUSIVE MODE;
    -- Do some work
    UPDATE users SET status = 'maintenance' WHERE status = 'active';
COMMIT; 