module.exports =
    {
        mysql: {
            host: '127.0.0.1',
            user: 'root',
            password: '123456',
            database:'ilovemath', // 前面建的user表位于这个数据库中
            port: 3306
        }
    };

function query(sql,callback){
    connection.getConnection(function(err,connection){
        connection.query(sql,function(err,rows){
            callback(err,rows);
            connection.release();
        })
    })
}

exports.query = query;