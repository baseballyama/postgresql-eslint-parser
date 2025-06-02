-- Advanced PostgreSQL features test
-- Extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "hstore";
CREATE EXTENSION IF NOT EXISTS "ltree";
CREATE EXTENSION IF NOT EXISTS "pg_trgm";
CREATE EXTENSION IF NOT EXISTS "postgis";

-- UUID usage
CREATE TABLE products (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    sku VARCHAR(100) UNIQUE,
    metadata HSTORE,
    location GEOMETRY(POINT, 4326),
    created_at TIMESTAMP DEFAULT NOW()
);

-- HSTORE operations
INSERT INTO products (name, sku, metadata, location) VALUES 
('Laptop', 'LAPTOP001', '"brand"=>"Dell", "model"=>"XPS13", "color"=>"Silver"', ST_GeomFromText('POINT(-74.006 40.7128)', 4326)),
('Mouse', 'MOUSE001', '"brand"=>"Logitech", "wireless"=>"true", "dpi"=>"1600"', ST_GeomFromText('POINT(-73.935 40.730)', 4326));

SELECT name, metadata->'brand' as brand, metadata->'model' as model
FROM products
WHERE metadata ? 'brand' AND metadata->'brand' = 'Dell';

-- ltree for hierarchical data
CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    path LTREE NOT NULL,
    name VARCHAR(255) NOT NULL
);

INSERT INTO categories (path, name) VALUES
('electronics', 'Electronics'),
('electronics.computers', 'Computers'),
('electronics.computers.laptops', 'Laptops'),
('electronics.computers.desktops', 'Desktops'),
('electronics.accessories', 'Accessories');

-- ltree queries
SELECT * FROM categories WHERE path ~ '*.computers.*';
SELECT * FROM categories WHERE path <@ 'electronics.computers';

-- Full-text search with pg_trgm
CREATE INDEX idx_products_name_gin ON products USING GIN (name gin_trgm_ops);

SELECT name, similarity(name, 'laptop') as sim
FROM products
WHERE name % 'laptop'
ORDER BY sim DESC;

-- PostGIS spatial queries
SELECT 
    p1.name as product1,
    p2.name as product2,
    ST_Distance(p1.location, p2.location) as distance_meters
FROM products p1
CROSS JOIN products p2
WHERE p1.id != p2.id
AND ST_DWithin(p1.location, p2.location, 1000); -- within 1km

-- JSON and JSONB operations
CREATE TABLE user_preferences (
    user_id INTEGER PRIMARY KEY,
    settings JSONB,
    tags TEXT[]
);

INSERT INTO user_preferences (user_id, settings, tags) VALUES
(1, '{"theme": "dark", "language": "en", "notifications": {"email": true, "push": false}}', ARRAY['premium', 'beta']),
(2, '{"theme": "light", "language": "ja", "notifications": {"email": false, "push": true}}', ARRAY['standard']);

-- JSONB queries
SELECT user_id, settings->'theme' as theme
FROM user_preferences
WHERE settings->>'language' = 'en';

SELECT user_id
FROM user_preferences
WHERE settings @> '{"notifications": {"email": true}}';

-- Array operations
SELECT user_id
FROM user_preferences
WHERE 'premium' = ANY(tags);

SELECT user_id, unnest(tags) as tag
FROM user_preferences;

-- Advanced window functions
WITH sales_data AS (
    SELECT 
        product_id,
        sale_date,
        amount,
        LAG(amount) OVER (PARTITION BY product_id ORDER BY sale_date) as prev_amount,
        FIRST_VALUE(amount) OVER (PARTITION BY product_id ORDER BY sale_date 
                                 ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING) as first_sale,
        LAST_VALUE(amount) OVER (PARTITION BY product_id ORDER BY sale_date 
                                ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING) as last_sale
    FROM sales
)
SELECT 
    product_id,
    amount,
    prev_amount,
    amount - prev_amount as growth,
    (amount - first_sale) / first_sale * 100 as total_growth_percent
FROM sales_data;

-- LATERAL joins
SELECT u.id, u.name, recent_orders.*
FROM users u
CROSS JOIN LATERAL (
    SELECT order_date, total_amount
    FROM orders o
    WHERE o.user_id = u.id
    ORDER BY order_date DESC
    LIMIT 3
) recent_orders;

-- Exclusion constraints
ALTER TABLE bookings ADD CONSTRAINT no_overlapping_bookings
EXCLUDE USING gist (resource_id WITH =, tsrange(start_time, end_time) WITH &&);

-- Deferrable constraints
ALTER TABLE orders ADD CONSTRAINT fk_user_id
FOREIGN KEY (user_id) REFERENCES users(id)
DEFERRABLE INITIALLY DEFERRED; 