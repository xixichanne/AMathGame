
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var dbConfig = require('../db/DBConfig');
var userSQL = require('../db/mysql');

// 使用DBConfig.js的配置信息创建一个MySQL连接池
var pool = mysql.createPool( dbConfig.mysql );
// 响应一个JSON数据

var items=[];


pool.on('connection',function (connection) {
  console.log("pool on");
  connection.query('SET num auto_increment_increment=1')

});

/* GET users listing. */
router.get('/', function(req, res, next) {
    console.log(111);
    



pool.getConnection(function (err,connection) {
  connection.query(userSQL.getUserById,function(err,result){
    if(err){

      console.log("RANK Error: "+ err.message);
      return;
    }
    
    console.log(result[1]);
    res.render('rank',{data1:result[0],data2:result[1],data3:result[2],data4:result[3],data5:result[4],data6:result[5],data7:result[6],data8:result[7],data9:result[8],data10:result[9]});
    connection.release();
  });


});
});


module.exports=router;