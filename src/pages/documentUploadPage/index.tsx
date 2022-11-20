import React, { useState } from "react";
import * as S from "./style"
import profile from "../../imgs/bubbleProfile.svg";
import fileUpload from "../../imgs/fileUpload.svg";

function DocumentUploadPage() {
    const [userName, setUserName] = useState<string>("userName");
    const [currentFolder, setCurrentFolder] = useState<string>("basic/");
    return (
        <>
        <S.mainContainer>
            <S.folderContainer>
                <S.profileImg src={profile}/>  
                <S.userName>{userName}</S.userName> 
                <S.line/>
                <S.forderName>All</S.forderName>
            </S.folderContainer>
            <S.uploadContainer>
                <S.TitleBox>
                    <S.mainTitle>{"문서 업로드 📄"}</S.mainTitle>
                    <S.currentFolderName>{currentFolder}</S.currentFolderName>
                </S.TitleBox>
                <S.uploadBox>
                    <S.fileUploadImg src={fileUpload}/>
                    <S.uploadCommnet>{`문서를 업로드 하기 위해 파일을 끌어다 놓으세요 \n 또는`}</S.uploadCommnet>
                    <S.btnUpload>{"파일 업로드"}</S.btnUpload>
                </S.uploadBox>
            </S.uploadContainer>
        </S.mainContainer>
        </>
    )
}

export default DocumentUploadPage;