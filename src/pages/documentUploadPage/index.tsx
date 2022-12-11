import React, { useRef, useState } from "react";
import * as S from "./style"
import profile from "../../imgs/bubbleProfile.svg";
import fileUpload from "../../imgs/fileUpload.svg";
import axios from "axios";

function DocumentUploadPage() {
    const [docName, setDocName] = useState<string>("");
    const [docSerialNum, setSerialNum] = useState<string>("");
    const [docPublishedDate, setDocPublishedDate] = useState<string>("");
    const [docExpiryDate, setDocExpiryDate] = useState<string>("");
    const [docPublishOrg, setDocPublishOrg] = useState<string>("");
    const [docType, setDocType] = useState<string>("VISA");
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

    /* btnFileUpload click -> documentUpload() -> handleFileUpload() */
    const fileInput:any = useRef();

    const documentUpload = () => {
        fileInput.current.click();
    }
    
    const handleFileUpload = (e: any) => {
        if (e.target.files) {
            setFileList(e.target.files);
            setFileName(e.target.files[0].name);
        }
    }

    const documentCreate = (fileHash: string) => {
        console.log("documentCreate");

        var token = localStorage.getItem("login-token");
        console.log("token", token);
        const response = axios.post(
            "http://15.164.231.10/document",
            {
                "docName": docName,
                "docSerialNum": docSerialNum,
                "docPublishedDate": docPublishedDate,
                "docExpiryDate": docExpiryDate,
                "docPublishOrg": docPublishOrg,
                "docType": docType,
                "docDetailSerialNum": docDetailSerialNum,
                "fileId": fileHash
            },
            {
                headers: {
                    'accept': 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            }
        )
        .then(function(response: any){
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error: any){
            console.log(error);
        })
    }

    const nameInput:any = useRef();
    const SNumInput:any = useRef();
    const publishDateInput:any = useRef();
    const expiryDateInput:any = useRef();
    const publishOrgInput:any = useRef();
    const detailSNumInput:any = useRef();

    /* upload 🚀 button click */
    const FormDataPost = () => {
        console.log("formDataAppend");
        // focus 이동  
        if (docName === "") nameInput.current.focus();
        else if (docSerialNum === "") SNumInput.current.focus();
        else if (docPublishedDate === "") publishDateInput.current.focus();
        else if (docExpiryDate === "") expiryDateInput.current.focus();
        else if (docPublishOrg === "") publishOrgInput.current.focus();
        else if (docDetailSerialNum === "") detailSNumInput.current.focus();
        else {
            Object.values(filelist).forEach((file) => fd.append("file", file));
        
            axios.post('http://15.164.231.10/upload', fd, {
                headers: {
                    'accept': 'application/json',
                    "Content-Type": `multipart/form-data; `,
                }
            })
            .then((response) => {
                if(response.data){
                    console.log(response.data);
                    documentCreate(response.data["hash"]);
                }
            })
            .catch((error) => { console.log(error);})
        }
    }

    return (
        <>
        <S.mainContainer>
            <S.folderContainer>
                <S.profileImg src={profile}/>  
                <S.userName>{"userName"}</S.userName> 
                <S.line/>
                <S.forderName>All</S.forderName>
            </S.folderContainer>
            <S.uploadContainer>
                <S.TitleBox>
                    <S.mainTitle>{"문서 업로드 📄"}</S.mainTitle>
                    <S.inputContainer>
                        <S.inputBox>
                            <S.inputTitle>{"document Name "}</S.inputTitle>
                            <S.inputLine ref={nameInput} onChange={changeValue("docName")}></S.inputLine>
                        </S.inputBox>
                        <S.inputBox>
                            <S.inputTitle>{"document Serial Number "}</S.inputTitle>
                            <S.inputLine ref={SNumInput} onChange={changeValue("serialNum")}></S.inputLine>
                        </S.inputBox>
                        <S.inputBox>
                            <S.inputTitle>{"document Published Date (YY/MM/DD)"}</S.inputTitle>
                            <S.inputLine ref={publishDateInput} onChange={changeValue("docPublishedDate")}></S.inputLine>
                        </S.inputBox>
                        <S.inputBox>
                            <S.inputTitle>{"document Expiry Date (YY/MM/DD)"}</S.inputTitle>
                            <S.inputLine ref={expiryDateInput} onChange={changeValue("docExpiryDate")}></S.inputLine>
                        </S.inputBox>
                        <S.inputBox>
                            <S.inputTitle>{"document Publish Org "}</S.inputTitle>
                            <S.inputLine ref={publishOrgInput} onChange={changeValue("docPublishOrg")}></S.inputLine>
                        </S.inputBox>
                        <S.inputBox>
                            <S.inputTitle>{"document Detail Serial Number"}</S.inputTitle>
                            <S.inputLine ref={detailSNumInput} onChange={changeValue("docDetailSerialNum")}></S.inputLine>
                        </S.inputBox>
                        <S.inputBox>
                            <S.inputTitle>{"document Type *"}</S.inputTitle>
                            <S.radioBox>
                                <S.radioCheck checked={docType === "VISA"} defaultChecked={true} value="VISA" type="radio" onChange={changeValue("docType")}/><S.radioLabel>VISA</S.radioLabel>
                                <S.radioCheck checked={docType === "PASSPORT"} value="PASSPORT" type="radio" onChange={changeValue("docType")}/><S.radioLabel>PASSPORT</S.radioLabel>
                                <S.radioCheck checked={docType === "DRIVERLICENSE"} value="DRIVERLICENSE" type="radio" onChange={changeValue("docType")}/><S.radioLabel>DRIVERLICENSE</S.radioLabel>
                            </S.radioBox>
                        </S.inputBox>
                    </S.inputContainer>
                </S.TitleBox>
                <S.uploadBox>
                    <S.fileUploadImg src={fileUpload}/>
                    <S.uploadCommnet>{`문서를 업로드 하기 위해 파일을 끌어다 놓으세요 \n 또는`}</S.uploadCommnet>
                    <S.btnFileUpload onClick={documentUpload}>{"파일 업로드"}</S.btnFileUpload>
                    <S.inputFile ref={fileInput} type="file" multiple={true} id="fileUpload" onChange={handleFileUpload} />
                </S.uploadBox>
                <S.fileListContainer>
                    <S.uploadNameBox>
                        <S.uploadName>{fileName}</S.uploadName>
                    </S.uploadNameBox>
                    {fileName ? <S.btnFilePost onClick={FormDataPost}>{"upload 🚀"}</S.btnFilePost> : null}
                </S.fileListContainer>
            </S.uploadContainer>
        </S.mainContainer>
        </>
    )
}

export default DocumentUploadPage;