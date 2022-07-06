CREATE OR REPLACE FUNCTION update_user(
    uid users.id%type,
    un users.username%type,
    mail users.email%type,
    pw users.password%type)

RETURNS void AS $$
BEGIN

UPDATE users
SET username = un, email = mail, password = pw
WHERE users.id = uid;

END;
$$

LANGUAGE 'plpgsql';