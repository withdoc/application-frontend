import React from "react";
import * as S from "./styles"
import { useNavigate } from 'react-router-dom';



function HomeComponent() {
    const navigate = useNavigate();

    const navigateToAnotherPage = () => {
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
                <S.btnStart onClick={navigateToAnotherPage}>get started 🚀</S.btnStart>
            </S.mainContainer>
        </>
    )
}

export default HomeComponent;