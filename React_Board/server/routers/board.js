const express = require('express');
const router = express.Router();
const mysql = require('mysql2');

const multer = require('multer');  // npm i 로 설치
const path = require('path');
const fs = require('fs');

const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'adminuser',
    database : 'scott'
});


try {
    fs.readdirSync('public/uploads');
} catch (error) {
    console.error('uploads 폴더가 없어 uploads 폴더를 생성합니다.');
    fs.mkdirSync('public/uploads');
}




const uploadObj = multer({
    storage: multer.diskStorage({
        destination(req, file, done) {
            done(null, 'public/uploads/');
        },
        filename(req, file, done) {
            const ext = path.extname(file.originalname);
            done(null, path.basename(file.originalname, ext) + Date.now() + ext);
        },
    }),
    limits: { fileSize: 5 * 1024 * 1024 },
});


router.get('/getBoardList', (req, res)=>{
    const sql = "select * from boards order by id desc";
    connection.query(sql, (error, rows)=>{
        if (error) {
            console.error(error);
            next(error);
        }else{
            return res.send( rows );
            //console.log(rows);
        }
    });

});

router.get('/getBoard/:id', (req, res)=>{
    console.log(req.params.id);
    const sql = "select * from boards where id=?";
    connection.query(sql, [req.params.id],(error, rows)=>{
        if (error) {
            console.error(error);
            next(error);
        }else{
            return res.send( rows );
            //console.log(rows[0]);
        }
    });
});


router.post('/fileupload',  uploadObj.single('image'), (req,res,next)=>{
    console.log(req.file.filename);
    res.json(
        {
            filename:`/uploads/${req.file.filename}`, 
            realfilename: `/uploads/${req.file.originalname}`
        }
    );
});

const uploadObj2 = multer();
router.post('/writeboard', uploadObj2.none() ,  (req,res,next)=>{
    const { userid, subject, content, filename, realfilename } = req.body;
    const sql = "insert into boards(writer, subject, content, filename, realfilename) values(?,?,?,?,?)";
    connection.query(
        sql,
        [ userid, subject, content, filename, realfilename ],
        (error, results, fields)=>{
            if(error){
                console.error(error);
                next(error);
            }else{
                return res.send('ok');
            }
        }
    );
});


router.post('/updateboard', uploadObj2.none() ,  (req,res,next)=>{
    const { id, subject, content, filename, realfilename } = req.body;
    const sql = "update boards set subject=?, content=?, filename=?, realfilename=? where id=?";
    connection.query(
        sql,
        [ subject, content, filename, realfilename, id ],
        (err, result) => { 
            if(err){
                console.error(err);
                next(err);
            }else{
                return res.send('ok');
            }
        }
    );
});


router.delete('/deleteBoard/:id', (req, res)=>{
    const sql = "delete from boards where id=?";
    connection.query(
        sql, 
        [req.params.id], 
        (err, result) => {
            res.send('ok');
        }
    )
});

router.get('/getReplyList/:id', (req, res, next)=>{
    console.log('param:',req.params.id);
    const sql = 'select * from replys where boardnum=? order by id desc';
    connection.query(
        sql,
        [req.params.id],
        (error, rows)=>{
            if (error) {
                console.error(error);
                next(error);
            }else{
                return res.send(rows);
            }
        }
    );
});



router.post('/addReply', (req,res,next)=>{
    const { writer, content, boardnum } = req.body;
    const sql = "insert into replys(writer, content, boardnum) values(?,?,?)";
    connection.query(
        sql,
        [ writer, content, boardnum ],
        (error, results, fields)=>{
            if(error){
                console.error(error);
                next(error);
            }else{
                return res.send('ok');
            }
        }
    );
});



router.delete('/deleteReply/:id', (req, res)=>{
    const sql = "delete from replys where id=?";
    connection.query(
        sql, 
        [req.params.id], 
        (err, result) => {
            res.send('ok');
        }
    )
});

module.exports = router;