
--Characters
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




