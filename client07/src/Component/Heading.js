// 1. Heading에는 메인 메뉴를 구성합니다.(home, join, result)
// 2. 이전 프로젝트처름 메인메뉴를 클릭하면 해당 페이지로 이동하게합니다
// 3. Join.js 에 회원 가입폼을 만들되, join.css 를 만들어서 적용합니다.(SpringBoard  양식을 따릅니다)
// 4. css 파일들은  css 폴더에 넣어주세요
// 5. Join.js 에서  회원가입버튼을 클릭하면 입력 한정보고 공유된 probs 의 리스트에 저장되고
// 6. result로 이동하면 회원가입 상항을 출력해주세요
// 7. 회원가입 필드 : 아이디, 비번, 이름, 이메일
import React from 'react'
import { Link } from "react-router-dom";

function Heading() {
    return (
        <div style={{
                display:"flex", 
                flexDirection:"column", 
                alignItems:"center"}}
        >
            <Link to="/">home</Link>
            <Link to="/join">Join</Link>
            <Link to="/result">Result</Link>
        </div>
    )
}
export default Heading
 