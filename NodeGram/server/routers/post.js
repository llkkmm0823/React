const express = require('express');
const router = express.Router();
const mysql = require('mysql2');
const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'adminuser',
    database : 'node_gram'
});

router.get('/getPostList', (req, res, next)=>{
    const sql = "select * from posts order by id desc";
    connection.query( 
        sql, 
        (err, rows)=>{
            res.send(rows);
        }
    );
});

module.exports = router;