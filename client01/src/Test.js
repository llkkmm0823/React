import React, {useState} from 'react'
//state 변수를 사용하기 위해서는 react에서 usestate 꺼내와야 사용가능
import './Test.css';
//Component 생성 방식은 지금 사용하려는 함수형 방식이 있고 예전방식인 class형 방식이 있음
//함수와 클래스의 형태로 다를 뿐 태그를 리턴한다는 면에서 둘의 방식은 같은 기능을 갖음

//state의 사용 목적 : 페이지 내에서 사용할 수 잇는 전역변수정도의 변수
//state 변수의 값이 바뀔 때 화면을 재 렌더링하지 않아도 바뀐값을 사용할 수 있는 변수

//react component안에서 태그에 class값을 부여할 때 className 이라는 속성명을 사용
function Test() {
    //state 함수가 실행되서 state변수가 변경되면 자연스럽게 그 변수를 소유한 component가 재 rendering됩니다
    console.log('Test 컴포넌트 에서 render 됩니다');
    //현재 위치에서 useState라는 함수를 이용하여 state변수를 만듬
    const [temp,setTemp] = useState(0);
    //1.첫번째 인자 : 사용할 변수 이름
    //2.두번째 인자 : temp변수값을 변경할 수 있는 함수
    //temp=10;동작이 가능하지만 setTemp(10)라는 함수를 사용해야 현재페이지에 변경된 값이 바로 적용됨
    //3. 함수 전달인수 : 변수의 초기값 및 type

   
  return (
    <div>
        <h1 className="Test">Test Component입니다</h1>
        <h2>
            temp 변수값 {temp} &nbsp;
            <button onClick={()=>{setTemp(temp+1)}}>즈응가</button>
        </h2>
      
    </div>
  )
}
//state 사용 규칙
//1.값을 변경하기 위해서는 반드시 setState(setTemp)로 지정한 함수를 사용
//2. setState함수를 html 태그의 onClick 같은 속성에서 사용하려면 반드시 function(){},()=>{}로 감싸서 사용






//스크립트에서 사용하던 변수값들이 태그안에서 사용될 때 {} 묶어서 사용




export default Test
//현재 파일에서 export할 내용이(컴포넌트 또는 다른 내용 등)두 개 이상이라면 중괄호로 묶어 이름을 나열
//그럼 그들이 export됨
//default 는 export될 내용이 하나일 때 사용