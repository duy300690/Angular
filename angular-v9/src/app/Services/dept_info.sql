CREATE OR REPLACE PROCEDURE dept_info (
    dept_no INT
) IS

    v_deptno  dept.deptno%TYPE;
    v_dname   dept.dname%TYPE;
    v_loc     dept.loc%TYPE;
BEGIN
    SELECT
        deptno,
        dname,
        loc
    INTO
        v_deptno,
        v_dname,
        v_loc
    FROM
        dept
    WHERE
        deptno = dept_no;

    dbms_output.put_line('DeptNo: '
                         || v_deptno
                         || '; Dname: '
                         || v_dname
                         || '; Loc: '
                         || v_loc);

EXCEPTION
    WHEN OTHERS THEN
        raise_application_error(-20001, 'An error was encountered - '
                                        || sqlcode
                                        || ' -ERROR- '
                                        || sqlerrm);
END;