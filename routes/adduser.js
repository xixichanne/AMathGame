var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var dbConfig = require('../db/DBConfig');
var userSQL = require('../db/mysql');

var pool = mysql.createPool( dbConfig.mysql );


router.get('/', function (req, res, next) {
    console.dir(req.query)
    var name = req.query.username;
    var grade = Number(req.query.grade);
    var level = req.query.level;
    pool.on('connection', function (connection) {
        console.log("pool on");
        connection.query('SET SESSION auto_increment_increment=1')

    });
    pool.getConnection(function (err, connection) {
        connection.query(userSQL.insert, [name, grade, level], function (err, result) {
            if (err) {
                console.log("RANK Error: " + err.message);
                return;
            }

            console.log("successful");

            connection.release();
            res.redirect('/rank');
        });
    });
})
    router.route('/').post(function (req,res) {
        console.dir(req.body)
    });

module.exports=router;
