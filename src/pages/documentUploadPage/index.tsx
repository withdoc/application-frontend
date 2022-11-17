import React from "react";
import * as S from "./style"
import profile from "../../imgs/bubbleProfile.svg";

function DocumentUploadPage() {
    return (
        <>
        <S.mainContainer>
            <S.folderContainer>
            <S.profileImg src={profile}/>   
            </S.folderContainer>
        </S.mainContainer>
        </>
    )
}

export default DocumentUploadPage;