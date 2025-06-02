-- Complex queries test
WITH user_stats AS (
    SELECT 
        u.id,
        u.full_name,
        COUNT(o.id) as order_count,
        SUM(o.total_amount) as total_spent,
        AVG(o.total_amount) as avg_order_value
    FROM users u
    LEFT JOIN orders o ON u.id = o.user_id
    WHERE u.status = 'active'
    GROUP BY u.id, u.full_name
),
top_users AS (
    SELECT *,
        RANK() OVER (ORDER BY total_spent DESC) as spending_rank,
        PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY total_spent) OVER () as median_spent
    FROM user_stats
    WHERE order_count > 0
)
SELECT 
    tu.*,
    CASE 
        WHEN spending_rank <= 10 THEN 'VIP'
        WHEN total_spent > median_spent THEN 'Premium'
        ELSE 'Standard'
    END as user_tier
FROM top_users tu
WHERE spending_rank <= 100;

-- Recursive CTE
WITH RECURSIVE category_hierarchy AS (
    -- Base case
    SELECT id, name, parent_id, 0 as level, name as path
    FROM categories
    WHERE parent_id IS NULL
    
    UNION ALL
    
    -- Recursive case
    SELECT c.id, c.name, c.parent_id, ch.level + 1, 
           ch.path || ' > ' || c.name as path
    FROM categories c
    INNER JOIN category_hierarchy ch ON c.parent_id = ch.id
)
SELECT * FROM category_hierarchy ORDER BY path;

-- Window functions and analytics
SELECT 
    user_id,
    order_date,
    total_amount,
    LAG(total_amount) OVER (PARTITION BY user_id ORDER BY order_date) as previous_order,
    LEAD(total_amount) OVER (PARTITION BY user_id ORDER BY order_date) as next_order,
    SUM(total_amount) OVER (PARTITION BY user_id ORDER BY order_date 
                           ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) as running_total,
    AVG(total_amount) OVER (PARTITION BY user_id ORDER BY order_date 
                           ROWS BETWEEN 2 PRECEDING AND 2 FOLLOWING) as moving_avg
FROM orders
WHERE order_date >= CURRENT_DATE - INTERVAL '1 year';

-- Complex EXISTS and NOT EXISTS
SELECT DISTINCT u.*
FROM users u
WHERE EXISTS (
    SELECT 1 FROM orders o
    WHERE o.user_id = u.id
    AND o.order_date >= CURRENT_DATE - INTERVAL '30 days'
)
AND NOT EXISTS (
    SELECT 1 FROM user_complaints uc
    WHERE uc.user_id = u.id
    AND uc.status = 'open'
)
AND u.id IN (
    SELECT DISTINCT user_id
    FROM order_items oi
    JOIN products p ON oi.product_id = p.id
    WHERE p.category_id IN (1, 2, 3)
); 