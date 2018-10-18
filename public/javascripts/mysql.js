
const mysql = require('mysql')
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '1091372693',
    database : 'world'
});

connection.connect();

function query(sql,callback){
    connection.query(sql, function (err, rows) {
        callback(err,rows)
    })
}

// connection.end();

exports.query=query;



