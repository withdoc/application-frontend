import React, { useRef } from "react";
import * as S from "./style"
import { useNavigate } from 'react-router-dom';
import profile from "./img/bubbleProfile.svg";



/*const handleBubble = () => {
    if (window.scrollY > 0) {

    }
}*/
const ShowBubble = () => {

    return (
        <>
            <S.questionContainer>
                <S.profileImg src={profile}/>
                <S.speechBubble direction="left">{"왜 WITHDOC으로 관리해야 할까요? 🤔"}</S.speechBubble>
            </S.questionContainer>
            <S.answerContainer>
                <S.speechBubble direction="right">
                    {`무결성이 보장되는 서비스이기 때문에 \n 문서를 출력할 때 본인 인증 ✔️ 이외의 추가적인 공증이 \n 필요하지 않습니다.`}
                </S.speechBubble>
                <S.speechBubble direction="right">
                    {`위변조가 불가능한 블록체인 네트워크에서 관리하기 때문에 \n 나의 문서를 내가 관리할 수 있게 됩니다 📄`}
                </S.speechBubble>
                <S.speechBubble direction="right">
                    {`해외에서 실물 문서를 분실하였을 때 당황하지말고 \n withdoc으로 출력해보아요 🚀 `}
                </S.speechBubble>
            </S.answerContainer>
        </>
    )
}

function HomeComponent() {
    const navigate = useNavigate();

    const navigateToPurchase = () => {
        navigate("/startpage");
    };
    
    return (
        <>
            <S.mainContainer>
                <S.GlobalStyle />
                <S.titleContainer>
                    <S.mainTitle>
                        WITHDOC
                    </S.mainTitle>
                    <S.subTitle>{`the new \n document \n management \n system`}</S.subTitle>
                </S.titleContainer>
                <S.btnStart onClick={navigateToPurchase}>get started 🚀</S.btnStart>
                <ShowBubble/> 
            </S.mainContainer>
        </>
    )
}

export default HomeComponent;