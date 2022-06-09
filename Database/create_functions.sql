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

CREATE OR REPLACE FUNCTION create_character(
    user_id characters.user_id%type,
    character_name characters.character_name%type,
    class characters.class%type,
    level characters.level%type
) RETURNS SETOF characters AS $$

DECLARE
character_id characters.id%type;

BEGIN
Insert INTO characters (user_id, character_name, class, level)
VALUES (user_id, character_name, class, level)
RETURNING id INTO character_id;

RETURN QUERY
SELECT *
FROM characters
WHERE characters.id = character_id;
END;

$$ LANGUAGE 'plpgsql';

SET client_min_messages TO WARNING;

SELECT * FROM create_character(1, 'Bob', 'Ninja', '1');
SELECT * FROM create_character(1, 'Doris', 'Boop', '-1');
SELECT * FROM create_character(2, 'Steve', 'Fighter', '4');