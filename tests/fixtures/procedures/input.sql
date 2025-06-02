-- Stored procedures and functions test
CREATE OR REPLACE FUNCTION get_user_count(status_filter VARCHAR DEFAULT NULL)
RETURNS INTEGER AS $$
DECLARE
    user_count INTEGER;
BEGIN
    IF status_filter IS NULL THEN
        SELECT COUNT(*) INTO user_count FROM users;
    ELSE
        SELECT COUNT(*) INTO user_count FROM users WHERE status = status_filter;
    END IF;
    
    RETURN user_count;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE PROCEDURE update_user_status(
    user_id INTEGER,
    new_status VARCHAR
)
LANGUAGE plpgsql AS $$
BEGIN
    UPDATE users 
    SET status = new_status, 
        updated_at = CURRENT_TIMESTAMP 
    WHERE id = user_id;
    
    IF NOT FOUND THEN
        RAISE EXCEPTION 'User with id % not found', user_id;
    END IF;
    
    COMMIT;
END;
$$;

-- Recursive function
CREATE OR REPLACE FUNCTION factorial(n INTEGER)
RETURNS INTEGER AS $$
BEGIN
    IF n <= 1 THEN
        RETURN 1;
    ELSE
        RETURN n * factorial(n - 1);
    END IF;
END;
$$ LANGUAGE plpgsql;

-- Function with multiple return types
CREATE OR REPLACE FUNCTION get_user_info(user_id INTEGER)
RETURNS TABLE(name VARCHAR, email VARCHAR, status VARCHAR) AS $$
BEGIN
    RETURN QUERY
    SELECT u.full_name, u.email, u.status
    FROM users u
    WHERE u.id = user_id;
END;
$$ LANGUAGE plpgsql; 