var UserSQL = {
    insert:'INSERT INTO rank(username,grade,level) VALUES(?,?,?)',

    getUserById:'SELECT * FROM rank order by grade LIMIT 10 ',
};
module.exports = UserSQL;

