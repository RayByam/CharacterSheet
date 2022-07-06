
--Characters
CREATE OR REPLACE FUNCTION create_character(
    user_id characters.user_id%type,
    character_name characters.character_name%type,
    username characters.username%type,
    class_level characters.class_level%type,
    race characters.race%type,
    gender characters.gender%type,
    heigth characters.heigth%type,
    age characters.age%type,
    weight characters.weight%type
) RETURNS SETOF characters AS $$

DECLARE
character_id characters.id%type;

-- Do the variables for these
BEGIN
Insert INTO characters (user_id, character_name, username, class_level, race, gender, heigth, age, weight)
VALUES (user_id, character_name, username, class_level, race, gender, heigth, age, weight)
RETURNING id INTO character_id;

RETURN QUERY
SELECT *
FROM characters
WHERE characters.id = character_id;
END;

$$ LANGUAGE 'plpgsql';

SET client_min_messages TO WARNING;

-- give values to these creates for all the variables





