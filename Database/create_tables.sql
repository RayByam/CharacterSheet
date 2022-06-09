
-- CREATE TABLE [IF NOT EXISTS] Adventure (
--     column1 datatype(length) column_contraint,
--     column2 datatype(length) column_contraint,
--     column3 datatype(length) column_contraint,
--     table_constraints
-- );

-- CREATE TABLE accounts (
--     user_id serial PRIMARY KEY,
--     username VACHAR ( 50 ) UNIQUE NOT NULL,
--     password VARCHAR ( 50 ) NOT NULL,
--     email VARCHAR ( 255 ) UNIQUE NOT NULL,
--     create_on TIMESTAMP NOT NULL,
--     last_login TIMESTAMP
-- );

-- CREATE TABLE roles(
--    role_id serial PRIMARY KEY,
--    role_name VARCHAR (255) UNIQUE NOT NULL
-- );

-- CREATE TABLE account_roles (
--   user_id INT NOT NULL,
--   role_id INT NOT NULL,
--   grant_date TIMESTAMP,
--   PRIMARY KEY (user_id, role_id),
--   FOREIGN KEY (role_id)
--       REFERENCES roles (role_id),
--   FOREIGN KEY (user_id)
--       REFERENCES accounts (user_id)
-- );

DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users (
    id bigserial PRIMARY KEY,
    user_name VARCHAR (100) NOT NULL,
    email VARCHAR (100) NOT NULL UNIQUE,
    password VARCHAR (100) NOT NULL
);

DROP TABLE IF EXISTS characters CASCADE;
CREATE TABLE characters (
    id bigserial PRIMARY KEY,
    user_id bigserial NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    character_name VARCHAR (100) NOT NUll,
    class VARCHAR (100) NOT NULL,
    level INT NOT NULL
);