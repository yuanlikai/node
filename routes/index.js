const express = require('express');
const router = express.Router();

const sql = require('../public/javascripts/mysql');

/* GET home page. */

router.all('/index', function (req, res, next) {
    sql.query('SELECT * FROM city WHERE ID in (' + req.body.ID + ');', function (err, rows) {

        if (rows.length < 1) {
            res.json({status: 201, Message: "未查询到数据"});
        } else {
            res.json({status: 200, message: "success", data: rows});
        }
    });

    var p = new Promise(function(resolve,reject){
        console.log('123')
        resolve()
    }).then(
        ()=> console.log('图片加载成功')
    ).catch(
        ()=> console.log('图片加载失败')
    )
});

module.exports = router;
