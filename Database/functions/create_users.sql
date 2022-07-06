--Users
CREATE OR REPLACE FUNCTION create_user(
    username users.username%type,
    email users.email%type,
    password users.password%type
) RETURNS SETOF users AS $$

DECLARE
user_id users.id%type;

BEGIN
Insert INTO users (username, email, password)
VALUES (username, email, password)
RETURNING id INTO user_id;

RETURN QUERY
SELECT *
FROM users
WHERE users.id = user_id;
END;

$$ LANGUAGE 'plpgsql';

SET client_min_messages TO WARNING;

