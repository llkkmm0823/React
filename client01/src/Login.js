import React from 'react'
import './Login.css';
function Login() {
  console.log('Login 컴포넌트가 render 됩니다');
  return (
    <div className='Login'>
        <form>
            아이디 : <input type="text" /> <br/>
            비밀번호 : <input type="password" /> <br/>
            <button>로그인</button>
        </form>
      
    </div>
  )
}


export default Login