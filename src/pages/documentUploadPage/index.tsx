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
                    <S.inputContainer>
                        <S.inputBox>
                            <S.inputTitle>{"document Name *"}</S.inputTitle>
                            <S.inputLine></S.inputLine>
                        </S.inputBox>
                        <S.inputBox>
                            <S.inputTitle>{"document Serial Number *"}</S.inputTitle>
                            <S.inputLine></S.inputLine>
                        </S.inputBox>
                        <S.inputBox>
                            <S.inputTitle>{"document Published Date *"}</S.inputTitle>
                            <S.inputLine></S.inputLine>
                        </S.inputBox>
                        <S.inputBox>
                            <S.inputTitle>{"document Expiry Date *"}</S.inputTitle>
                            <S.inputLine></S.inputLine>
                        </S.inputBox>
                        <S.inputBox>
                            <S.inputTitle>{"document Publish Org *"}</S.inputTitle>
                            <S.inputLine></S.inputLine>
                        </S.inputBox>
                        <S.inputBox>
                            <S.inputTitle>{"document Detail Serial Number *"}</S.inputTitle>
                            <S.inputLine></S.inputLine>
                        </S.inputBox>
                        <S.inputBox>
                            <S.inputTitle>{"document Type *"}</S.inputTitle>
                            <S.radioBox>
                                <S.radioCheck value="VISA" name="VISA" type="radio" /><S.radioLabel>VISA</S.radioLabel>
                                <S.radioCheck value="PASSPORT" name="PASSPORT" type="radio" /><S.radioLabel>PASSPORT</S.radioLabel>
                                <S.radioCheck value="DRIVERLICENSE" name="DRIVERLICENSE" type="radio" /><S.radioLabel>DRIVERLICENSE</S.radioLabel>
                            </S.radioBox>
                        </S.inputBox>
                    </S.inputContainer>
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