
--Delete CHARACTERS
CREATE OR REPLACE FUNCTION delete_character(cid characters.id%type)
RETURNS void AS $$
BEGIN
DELETE FROM characters
WHERE characters.id = cid;
END;
$$
LANGUAGE 'plpgsql';
