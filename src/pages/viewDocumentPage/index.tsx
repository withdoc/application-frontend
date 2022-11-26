import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style"
import example from "../../imgs/documentExample.png";
import plus from "../../imgs/plus.svg";
import minus from "../../imgs/minus.svg";

function ViewDocumentPage() {
    const [documentTitle, setDocumentTitle] = useState<string>("휴학증명서.pdf");
    const navigate = useNavigate();
    
    
    return (
        <S.mainContainer>
            <S.header>
                <S.btnBack onClick={() => navigate(-1)}></S.btnBack>
                <S.documentTitle>{documentTitle}</S.documentTitle>
                <S.btnBox>
                    <S.btnPrint>프린트</S.btnPrint>
                    <S.btnDownload>다운로드</S.btnDownload>
                </S.btnBox>
            </S.header>
            <S.viewContainer>
                <S.documentBox src={example}/>
                <S.viewBtnBox>
                        <S.btnMinus src={minus}/>
                        <S.btnPlus src={plus} />
                </S.viewBtnBox>
            </S.viewContainer>
        </S.mainContainer>
    )
}

export default ViewDocumentPage;