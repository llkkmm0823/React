const express = require('express');
const router = express.Router();
const passport = require('passport');
const bcrypt = require('bcrypt');

const mysql = require('mysql2');
const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'adminuser',
    database : 'node_gram'
});

router.post('/join', (req, res, next)=>{
    const { email, nick, password }=req.body;
    let sql = "select * from users where email=?";
    connection.query( 
        sql, [email],
        async (err, rows)=>{
            if(rows.length>=1){
                return res.send({message:'이메일 중복입니다'});
            }else{
                sql = "insert into users(email, nick, password, provider) values(?,?,?,?)";
                const hash = await bcrypt.hash(password, 12);
                connection.query(
                    sql, [ email, nick, hash, 'local' ],
                    (err, results, fields)=>{
                        return res.send( {success:'회원가입되었습니다. 로그인하세요'} );
                    }
                );
            }
        }
    );
});


// (authError, user, info)=>{} : localStrategy 에 전달되서  로그인 성공,실패에 따른 처리를 해줄 익명함수
router.post('/login', (req, res, next)=>{
    passport.authenticate('local', (authError, user, info)=>{
        // 서버에러 났을때
        if (authError) {   
            console.error(authError);
            return next(authError);
        }

        // 로그인에 실패했을때
        if (!user) {  
            return res.send({login:'fail', msg:info.message } );
        }

        // 정상 로그인
        return req.login( user, (loginError)=>{
            if (loginError) {    
                console.error(loginError);
                return next(loginError);
            } 
            // console.log('login ok');
            console.log('로그인할때 : ', req.user);
            return res.send( { login:'ok', loginUser : req.user } );
        })

    })(req, res, next);;
});


router.get('/getLoginUser', (req, res, next)=>{
    res.send({loginUser:req.user});
})

router.post('/logout',   (req, res) => {
    req.session.destroy();
    res.send('logout');
});

router.get('/kakao',  passport.authenticate('kakao' )  );

router.get( '/kakao/callback', 
    passport.authenticate( 'kakao', { failureRedirect: '/', }  ) ,  
    (req, res) => {
        res.send( { login:'ok', loginUser : req.user } );
    }
);


module.exports = router;