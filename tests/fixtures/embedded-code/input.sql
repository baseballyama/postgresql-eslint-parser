-- Dollar-quote with custom tag (plpython3u body)
CREATE FUNCTION py_demo() RETURNS text AS $body$
    return "hi from python"
$body$ LANGUAGE plpython3u;

-- Single-quoted body with embedded single-quote escape
CREATE FUNCTION sq_demo() RETURNS void AS '
    RAISE NOTICE ''hi from plpgsql'';
' LANGUAGE plpgsql;

-- C language uses two-argument AS — should NOT produce EmbeddedCode
CREATE FUNCTION c_demo() RETURNS int AS 'libname', 'symbol' LANGUAGE c;

-- Unknown / exotic language is still extracted (parser stays language-agnostic)
CREATE FUNCTION rust_demo() RETURNS int AS $$
    Ok(Some(42))
$$ LANGUAGE plrust;

-- CREATE PROCEDURE shares the CreateFunctionStmt shape
CREATE PROCEDURE proc_demo() AS $$
    plv8.elog(NOTICE, 'from procedure');
$$ LANGUAGE plv8;
