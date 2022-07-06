
--Delete Users
CREATE OR REPLACE FUNCTION delete_users(uid users.id%type)
RETURNS void AS $$
BEGIN
DELETE FROM users
WHERE users.id = uid;
END;
$$
LANGUAGE 'plpgsql';