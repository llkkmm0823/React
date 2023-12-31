import React,{useState, useEffect} from 'react';
import '../Style/head.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Heading() {
    const navigate = useNavigate();

    const [ email, setEmail] = useState('');
    const [ password, setPassword] = useState('');
    const [ loginUser, setLoginUser] = useState({});

    /*
    useEffect(()=>{
        axios.get('/api/auth/getLoginUser')
        .then((result)=>{
            setLoginUser( result.data.loginUser );
        });
    },[]);
    */

    const onLoginLocal = ()=>{
        axios.post('/api/auth/login', {email, password} )
        .then((result)=>{
            if( result.data.login === 'fail'){
                return alert(result.data.msg);
            }else{
                setLoginUser( result.data.loginUser );
            }   
        })
        .catch((err)=>{console.error(err)});
    }

    const onLoginKakao = ()=>{
        axios.get('/api/auth/kakao')
        .then((result)=>{
            setLoginUser( result.data.loginUser );
        })
        .catch((err)=>{ console.error(err);})
    }

    const onLogout = ()=>{
        axios.post('api/auth/logout')
        .then((result)=>{ })
        .catch((err)=>{})
        setLoginUser({});
    }
    
    return (
        <>
            <div className="container">
                <div className="profile-wrap">
                    <div className="profile">
                        {
                            (loginUser.id)?(
                                <>
                                    <div className="user-name">안녕하세요 {loginUser.nick}님</div>
                                    <div className="half"><div>팔로워</div>
                                        <div className="count follower-count">0</div> 
                                    </div>
                                    <div className="half"><div>필로잉</div>
                                        <div className="count following-count">0</div> 
                                    </div>
                                    <button className="btn">내 프로필</button>
                                    <button className="btn" onClick={
                                        ()=>{
                                            onLogout();
                                        }
                                    }>로그아웃</button>
                                </>
                            ):(
                                <>
                                    <div className="input-group">
                                        <label id="email">이메일</label>
                                        <input type="text" onChange={
                                            (e)=>{ setEmail( e.currentTarget.value ); }
                                        }/>
                                    </div>
                                    <div className="input-group">
                                        <label for="password">비밀번호</label>
                                        <input type="password"  onChange={
                                            (e)=>{ setPassword( e.currentTarget.value ); }
                                        }/>
                                    </div>
                                    <button className="btn" id="btn1" onClick={
                                        ()=>{
                                            navigate('/join');
                                        }
                                    }>회원가입</button>
                                    <button className="btn" id="btn2"  onClick={
                                        ()=>{
                                            onLoginLocal();
                                        }
                                    }>로그인</button>
                                    <button className="btn" id="btn3"  onClick={
                                        ()=>{
                                            onLoginKakao();
                                        }
                                    }>카카오톡</button>
                                </>
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Heading
