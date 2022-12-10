import React, { useRef, useState } from "react";
import * as S from "./style"
import profile from "../../imgs/bubbleProfile.svg";
import fileUpload from "../../imgs/fileUpload.svg";
import axios from "axios";

function DocumentUploadPage() {
    const [userName, setUserName] = useState<string>("userName");
    
    const [docName, setDocName] = useState<string>("");
    const [docSerialNum, setSerialNum] = useState<string>("");
    const [docPublishedDate, setDocPublishedDate] = useState<Date>(new Date());
    const [docExpiryDate, setDocExpiryDate] = useState<Date>(new Date());
    const [docPublishOrg, setDocPublishOrg] = useState<string>("");
    const [docType, setDocType] = useState<string>("");
    const [docDetailSerialNum, setDocDetailSerialNum] = useState<string>("");

    const [filelist, setFileList] = useState<object>({});
    const [fileName, setFileName] = useState<string>("");

    const fd:any = new FormData();

    const changeValue = (name: string) => (e: any) => {
        switch(name) {
            case "docName": setDocName(e.target.value); break;
            case "serialNum": setSerialNum(e.target.value); break;
            case "docPublishedDate": setDocPublishedDate(e.target.value); break;
            case "docExpiryDate": setDocExpiryDate(e.target.value); break;
            case "docPublishOrg": setDocPublishOrg(e.target.value); break;
            case "docType": setDocType(e.target.value); break;
            case "docDetailSerialNum": setDocDetailSerialNum(e.target.value); break;
        }
        
    }

    const fileInput:any = useRef();
    
    const documentUpload = () => {
        fileInput.current.click();
    }
    
    const handleFileUpload = (e: any) => {
        setFileList(e.target.files);
        setFileName(e.target.files[0].name);
    }

    const documentWrite = async() => {
        console.log("formDataAppend");
        Object.values(filelist).forEach((file) => fd.append("file", file));
        /*formdata append 확인*/
        for (var pair of fd.entries()) {
            console.log(pair[0]+ ', ' + pair[1]); 
        }

        /*await axios.post('http://15.164.231.10/document/upload', fd, {
            headers: {
                'accept': 'application/json',
                "Content-Type": `multipart/form-data; `,
            }
        })
        .then((response) => {
            if(response.data){
                console.log(response.data);
        }
        })
        .catch((error) => {
            // 예외 처리
            console.log(error);
        })*/
    }

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
                            <S.inputLine onChange={changeValue("docName")}></S.inputLine>
                        </S.inputBox>
                        <S.inputBox>
                            <S.inputTitle>{"document Serial Number *"}</S.inputTitle>
                            <S.inputLine onChange={changeValue("serialNum")}></S.inputLine>
                        </S.inputBox>
                        <S.inputBox>
                            <S.inputTitle>{"document Published Date *"}</S.inputTitle>
                            <S.inputLine onChange={changeValue("docPublishedDate")}></S.inputLine>
                        </S.inputBox>
                        <S.inputBox>
                            <S.inputTitle>{"document Expiry Date *"}</S.inputTitle>
                            <S.inputLine onChange={changeValue("docExpiryDate")}></S.inputLine>
                        </S.inputBox>
                        <S.inputBox>
                            <S.inputTitle>{"document Publish Org *"}</S.inputTitle>
                            <S.inputLine onChange={changeValue("docPublishOrg")}></S.inputLine>
                        </S.inputBox>
                        <S.inputBox>
                            <S.inputTitle>{"document Detail Serial Number *"}</S.inputTitle>
                            <S.inputLine onChange={changeValue("docDetailSerialNum")}></S.inputLine>
                        </S.inputBox>
                        <S.inputBox>
                            <S.inputTitle>{"document Type *"}</S.inputTitle>
                            <S.radioBox>
                                <S.radioCheck checked={docType === "VISA"} value="VISA" type="radio" onChange={changeValue("docType")}/><S.radioLabel>VISA</S.radioLabel>
                                <S.radioCheck checked={docType === "PASSPORT"} value="PASSPORT" type="radio" onChange={changeValue("docType")}/><S.radioLabel>PASSPORT</S.radioLabel>
                                <S.radioCheck checked={docType === "DRIVERLICENSE"} value="DRIVERLICENSE" type="radio" onChange={changeValue("docType")}/><S.radioLabel>DRIVERLICENSE</S.radioLabel>
                            </S.radioBox>
                        </S.inputBox>
                    </S.inputContainer>
                </S.TitleBox>
                <S.uploadBox>
                    <S.fileUploadImg src={fileUpload}/>
                    <S.uploadCommnet>{`문서를 업로드 하기 위해 파일을 끌어다 놓으세요 \n 또는`}</S.uploadCommnet>
                    <S.btnUpload onClick={documentUpload}>{"파일 업로드"}</S.btnUpload>
                    <S.inputFile ref={fileInput} type="file" multiple={true} id="fileUpload" onChange={handleFileUpload} />
                </S.uploadBox>
                <S.uploadList>
                {fileName}
                </S.uploadList>
                <S.btnUpload onClick={documentWrite}>{"FormDataTest"}</S.btnUpload>
            </S.uploadContainer>
        </S.mainContainer>
        </>
    )
}

export default DocumentUploadPage;