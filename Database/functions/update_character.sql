drop function update_character;
CREATE OR REPLACE FUNCTION update_character(
    cid characters.id%type,
    uid characters.user_id%type,
    cn characters.character_name%type,
    un characters.username%type,
    cl characters.class_level%type,
    ra characters.race%type,
    gen characters.gender%type,
    hei characters.heigth%type,
    old characters.age%type,
    lb characters.weight%type)

RETURNS void AS $$
BEGIN

UPDATE characters
SET user_id = uid, character_name = cn, username = un, class_level = cl, race = ra, gender = gen, heigth = hei, age = old, weight = lb
WHERE characters.id = cid;

END;
$$

LANGUAGE 'plpgsql';