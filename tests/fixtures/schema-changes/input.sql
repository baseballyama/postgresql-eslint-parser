-- Schema changes test
-- Create schema
CREATE SCHEMA IF NOT EXISTS analytics;
CREATE SCHEMA IF NOT EXISTS reporting;

-- Set search path
SET search_path TO analytics, public;

-- Create table with various constraints
CREATE TABLE analytics.user_events (
    id BIGSERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
    event_type VARCHAR(50) NOT NULL,
    event_data JSONB,
    ip_address INET,
    user_agent TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    CONSTRAINT valid_event_type CHECK (event_type IN ('login', 'logout', 'purchase', 'view', 'click')),
    CONSTRAINT valid_ip CHECK (ip_address IS NOT NULL),
    CONSTRAINT non_empty_user_agent CHECK (LENGTH(user_agent) > 0)
);

-- Partitioning
CREATE TABLE analytics.user_events_y2024m01 PARTITION OF analytics.user_events
FOR VALUES FROM ('2024-01-01') TO ('2024-02-01');

CREATE TABLE analytics.user_events_y2024m02 PARTITION OF analytics.user_events
FOR VALUES FROM ('2024-02-01') TO ('2024-03-01');

-- Foreign data wrapper setup
CREATE EXTENSION IF NOT EXISTS postgres_fdw;

CREATE SERVER remote_server
FOREIGN DATA WRAPPER postgres_fdw
OPTIONS (host 'remote-db.example.com', port '5432', dbname 'external_db');

CREATE USER MAPPING FOR current_user
SERVER remote_server
OPTIONS (user 'remote_user', password 'remote_password');

CREATE FOREIGN TABLE analytics.external_data (
    id INTEGER,
    name TEXT,
    value NUMERIC
) SERVER remote_server
OPTIONS (schema_name 'public', table_name 'external_table');

-- Views and materialized views
CREATE VIEW analytics.daily_user_activity AS
SELECT 
    DATE(created_at) as activity_date,
    COUNT(DISTINCT user_id) as unique_users,
    COUNT(*) as total_events
FROM analytics.user_events
GROUP BY DATE(created_at);

CREATE MATERIALIZED VIEW analytics.monthly_user_stats AS
SELECT 
    DATE_TRUNC('month', created_at) as month,
    event_type,
    COUNT(*) as event_count,
    COUNT(DISTINCT user_id) as unique_users
FROM analytics.user_events
GROUP BY DATE_TRUNC('month', created_at), event_type
WITH DATA;

-- Indexes on materialized view
CREATE INDEX idx_monthly_stats_month ON analytics.monthly_user_stats(month);
CREATE INDEX idx_monthly_stats_type ON analytics.monthly_user_stats(event_type);

-- Row Level Security
ALTER TABLE analytics.user_events ENABLE ROW LEVEL SECURITY;

CREATE POLICY user_events_policy ON analytics.user_events
FOR ALL TO analytics_role
USING (user_id = current_setting('app.current_user_id')::INTEGER);

-- Grant permissions
GRANT USAGE ON SCHEMA analytics TO analytics_role;
GRANT SELECT, INSERT, UPDATE ON ALL TABLES IN SCHEMA analytics TO analytics_role;
GRANT USAGE ON ALL SEQUENCES IN SCHEMA analytics TO analytics_role;

-- Domain types
CREATE DOMAIN analytics.email AS VARCHAR(255)
CHECK (VALUE ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$');

CREATE DOMAIN analytics.positive_integer AS INTEGER
CHECK (VALUE > 0);

-- Composite types
CREATE TYPE analytics.address_type AS (
    street TEXT,
    city TEXT,
    state TEXT,
    zip_code TEXT,
    country TEXT
);

-- Range types
CREATE TYPE analytics.price_range AS RANGE (
    subtype = NUMERIC,
    subtype_diff = numeric_range_subdiff
); 