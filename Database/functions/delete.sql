--Delete Functions

--Delete CHARACTERS
CREATE OR REPLACE FUNCTION delete_character(cid characters.id%type)
RETURNS void AS $$
BEGIN
DELETE FROM characters
WHERE characters.id = cid;
END;
$$
LANGUAGE 'plpgsql';

--Delete Users
CREATE OR REPLACE FUNCTION delete_users(uid users.id%type)
RETURNS void AS $$
BEGIN
DELETE FROM users
WHERE users.id = uid;
END;
$$
LANGUAGE 'plpgsql';




