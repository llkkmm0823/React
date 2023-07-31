//import logo from './logo.svg';
import './App.css'; //css파일을 단순 import해서 적용
import Test from'./Test';//.js면 생략하는거 아시져??????????????????
import Login from'./Login';
//import 해서 그 파일이 export한 내용을 변수에 저장



//import 한 Test 컴포넌트를 Test 변수에 저장하면 태그처럼 사용해서 내용 삽입 가능
function App() {
  console.log('App 컴포넌트가 render 됩니다');
  return ( 
     <div className="App">
         <h1>Hello React !!</h1>
         <Test/>
         <Login/>
    </div>
 
  );
}
//Login 컴포넌트 만들어서 Test밑에 삽입하삼
export default App;