const express = require('express');
const router = express.Router();
const mysql = require('mysql2');
const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'adminuser',
    database : 'scott'
});

router.post('/login', (req,res,next)=>{
    //console.log(req.body.userid, req.body.pwd);
    //res.send('ok');
    const { userid, pwd } = req.body;
    const sql = "select * from members where userid=?";
    connection.query(sql, [userid], (error, rows)=>{
        if (error) {
            console.error(error);
            next(error);
        }else{
            // console.log('검색결과 : ' , rows);
            if(rows.length==1) {
                //console.log('아이디가 존재합니다');
                if( rows[0].pwd == pwd ){
                    req.session.loginUser = rows[0];
                    return res.json( {loginUser:req.session.loginUser, login:'ok'} );
                }else{
                    return res.json( {login:'fail', message:'비밀번호가 맞지 않습니다'});
                }
            }else {
                //console.log('아이디가 없습니다');
                return res.json( {login:'fail', message:'아이디가 없습니다'} );
            }
        }
    });
});

router.get('/loginok', (req,res,next)=>{
    if( req.session.loginUser ){
        return res.json({login:'ok'});
    }else{
        return res.json({login:'fail'});
    }
});

router.get('/getLoginUser', (req, res, next)=>{
    const userid = req.session.loginUser.userid;
    sql = 'select * from members where userid=?';
    connection.query(sql, [userid], (error, rows)=>{
        req.session.loginUser = rows[0];
    });
    res.json( {loginUser:req.session.loginUser} );
});


router.get('/logout', (req, res, next)=>{
    req.session.destroy(function(){ 
        req.session;
    });
    res.end();
});


router.post('/join', (req, res, next)=>{
    const {userid, pwd, name, phone, email } = req.body;
    const sql = "insert into members(userid, pwd, name, phone, email) values(?,?,?,?,?)";
    connection.query(
        sql, 
        [userid, pwd, name, phone, email] ,
        (error, results, fields)=>{
            if(error){
                console.error(error);
                next(error);
            }else{
                return res.json( {success:'ok'} );
            }
        }
    );
});


router.post('/updateMember', (req, res, next)=>{
    const {userid, pwd, name, phone, email} = req.body;
    let sql = "update members set pwd=?, name=?, phone=?, email=? where userid=?";
    connection.query(
        sql,
        [pwd, name, phone, email, userid],
        (err, result) => { 
            if(err){
            }else{
            }
        }
    );  // 회원정보 수정
    sql = 'select * from members where userid=?'
    connection.query(sql, [userid], (error, rows)=>{
        req.session.loginUser = rows[0];
    });  // 세션 수정
    res.send('ok');
});

module.exports = router;