CREATE FUNCTION anon_body() RETURNS void AS $$
BEGIN
  SELECT 1;
END;
$$ LANGUAGE plpgsql;

CREATE FUNCTION tagged_body() RETURNS void AS $func$
BEGIN
  SELECT 'hello $$ world';
END;
$func$ LANGUAGE plpgsql;
