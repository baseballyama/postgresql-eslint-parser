-- Triggers test
CREATE OR REPLACE FUNCTION update_modified_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_users_modtime
    BEFORE UPDATE ON users
    FOR EACH ROW
    EXECUTE FUNCTION update_modified_column();

-- Audit trigger
CREATE OR REPLACE FUNCTION audit_changes()
RETURNS TRIGGER AS $$
BEGIN
    IF TG_OP = 'DELETE' THEN
        INSERT INTO audit_log (table_name, operation, old_data, changed_at, changed_by)
        VALUES (TG_TABLE_NAME, TG_OP, row_to_json(OLD), NOW(), current_user);
        RETURN OLD;
    ELSIF TG_OP = 'UPDATE' THEN
        INSERT INTO audit_log (table_name, operation, old_data, new_data, changed_at, changed_by)
        VALUES (TG_TABLE_NAME, TG_OP, row_to_json(OLD), row_to_json(NEW), NOW(), current_user);
        RETURN NEW;
    ELSIF TG_OP = 'INSERT' THEN
        INSERT INTO audit_log (table_name, operation, new_data, changed_at, changed_by)
        VALUES (TG_TABLE_NAME, TG_OP, row_to_json(NEW), NOW(), current_user);
        RETURN NEW;
    END IF;
    RETURN NULL;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER audit_users_changes
    AFTER INSERT OR UPDATE OR DELETE ON users
    FOR EACH ROW
    EXECUTE FUNCTION audit_changes();

-- Conditional trigger
CREATE OR REPLACE FUNCTION check_order_total()
RETURNS TRIGGER AS $$
BEGIN
    IF NEW.total_amount < 0 THEN
        RAISE EXCEPTION 'Order total cannot be negative';
    END IF;
    
    IF NEW.total_amount > 10000 THEN
        INSERT INTO high_value_orders (order_id, flagged_at)
        VALUES (NEW.id, NOW());
    END IF;
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER check_order_total_trigger
    BEFORE INSERT OR UPDATE ON orders
    FOR EACH ROW
    WHEN (NEW.total_amount IS NOT NULL)
    EXECUTE FUNCTION check_order_total();

-- INSTEAD OF trigger for views
CREATE OR REPLACE FUNCTION user_order_summary_update()
RETURNS TRIGGER AS $$
BEGIN
    UPDATE users 
    SET full_name = NEW.user_name
    WHERE id = NEW.user_id;
    
    IF NEW.order_count <> OLD.order_count THEN
        RAISE NOTICE 'Cannot directly update order count through this view';
    END IF;
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER user_order_summary_update_trigger
    INSTEAD OF UPDATE ON user_order_summary_view
    FOR EACH ROW
    EXECUTE FUNCTION user_order_summary_update(); 