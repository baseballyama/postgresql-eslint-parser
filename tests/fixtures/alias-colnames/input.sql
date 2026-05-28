SELECT * FROM tbl AS t(col1, col2);
SELECT * FROM tbl t(col1);
SELECT * FROM generate_series(1, 10) WITH ORDINALITY AS r(range, r_idx);
SELECT * FROM (SELECT 1, 2) AS sub(col1, col2);
