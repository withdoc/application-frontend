import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style"

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
            <S.viewContainer></S.viewContainer>
        </S.mainContainer>
    )
}

export default ViewDocumentPage;