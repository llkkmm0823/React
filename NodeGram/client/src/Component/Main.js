import React ,{useState, useEffect} from 'react';
import '../Style/head.css';
import '../Style/main.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Main() {
    const navigate = useNavigate();

    const [postList, setPostList] = useState();

    useEffect(()=>{
        axios.get('/api/post/getPostList')
        .then((result)=>{
            setPostList([...result.data]);
            console.log('post' ,postList);
            // 서버에 게시물을 조회하는 /api/post/getPostList 라우터를 완성하세요
            // postList 로 twit태그가 게시물만큼 표시도도록 목록을 완성하세요
        })
        .catch((err)=>{});
    }, []);

    return (
        <div className="timeline">
            <div className="twits">
                <div id="hashtag-form">
                    <input type="text" placeholder="태그 검색" />
                    <button className="btn">검색</button>
                </div>
            </div>

            <div id="write-form" >
                <div id="post-form">
                    <div className="input-group">
                        <textarea id="twit" name="content" maxlength="140"></textarea>
                    </div>
                    <div className="img-preview">
                        <img id="img-preview" src="" style={{display:"none"}} width="250"/>
                        <input id="img-url" type="hidden" />
                    </div>
                    <div>
                        <label id="img-label" for="img">사진 업로드</label>
                        <input id="img" type="file" accept="image/*" />
                            <button class="btn">포스팅</button>
                    </div>
                </div>
            </div>

            <div className="twits">
            {
                postList.map((post, idx)=>{
                    return (
                        <>
                            <div className="twit" key={idx} >
                                <div className="twit-author" style={{fontWeight:"bold",fontFamily:"Verdana"}}>{post.id} &nbsp;-&nbsp;</div>
                                <div class="twit-img">
                                    <img src={`http://localhost:5000${post.img}`} width="500" />
                                </div>
                                <div className="twit-content" style={{fontWeight:"bold",fontFamily:"Verdana"}} ><pre>{post.content}</pre></div>
                            </div>
                        </>
                    );
                })
            }
            </div>


        </div>
    )
}

export default Main
