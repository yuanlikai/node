const express = require('express');
const crypto = require('crypto');
const router = express.Router();

// const sql = require('../public/javascripts/mysql');

/* GET home page. */

router.all('/index', function (req, res, next) {
	function Decrypted(data, key) {
		const decipher = crypto.createDecipher('aes-256-cbc', key);
		var decrypted = decipher.update(data, 'hex', 'utf8');
		decrypted += decipher.final('utf8');
		return decrypted
	}
	var data = '83fc779b49fe50519100ae885db8c65d';
	var key = 'InmbuvP6Z8';
	var decrypted = Decrypted(data, key)
	res.json({
		status: 200,
		data: {
			Plain: data,
			Decrypted: decrypted
		}
	});

	// sql.query('SELECT * FROM city WHERE ID in (' + req.body.ID + ');', function (err, rows) {
	//
	//     if (rows.length < 1) {
	//         res.json({status: 201, Message: "未查询到数据"});
	//     } else {
	//         res.json({status: 200, message: "success", data: rows});
	//     }
	// });
	//
	// var p = new Promise(function(resolve,reject){
	//     console.log('123')
	//     resolve()
	// }).then(
	//     ()=> console.log('图片加载成功')
	// ).catch(
	//     ()=> console.log('图片加载失败')
	// )
});

module.exports = router;
