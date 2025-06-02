-- DDL operations test
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

ALTER TABLE users
ADD COLUMN last_login TIMESTAMP,
ADD COLUMN status VARCHAR(20) DEFAULT 'active',
DROP COLUMN email;

ALTER TABLE users
RENAME COLUMN name TO full_name;

CREATE INDEX idx_users_status ON users(status);
CREATE UNIQUE INDEX idx_users_email ON users(email);

DROP TABLE IF EXISTS old_table;

CREATE TYPE user_status AS ENUM ('active', 'inactive', 'pending');

ALTER TYPE user_status ADD VALUE 'suspended'; 