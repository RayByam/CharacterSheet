--Users
CREATE OR REPLACE FUNCTION create_user(
    user_name users.user_name%type,
    email users.email%type,
    password users.password%type
) RETURNS SETOF users AS $$

DECLARE
user_id users.id%type;

BEGIN
Insert INTO users (user_name, email, password)
VALUES (user_name, email, password)
RETURNING id INTO user_id;

RETURN QUERY
SELECT *
FROM users
WHERE users.id = user_id;
END;

$$ LANGUAGE 'plpgsql';

SET client_min_messages TO WARNING;

SELECT * FROM create_user('Ray', 'rsb@gmail.com', 'Stanley');
SELECT * FROM create_user('Joe', 'jmb@gmail.com', 'Matthew');