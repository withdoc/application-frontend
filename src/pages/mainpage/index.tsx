import React, { useState, useEffect } from 'react';
import * as styled from './styles';
import { useNavigate } from 'react-router';
import axios from 'axios';

// import DocumentCard from '../../components/DocumentCard';



function Mainpage() {
    const [data, setData] = useState<{ Record: { docExpiryDate: string, docName: string, docSerialNum: string, docPublishedOrg: string } }[]>([])
    const [isSidebarModal, setisSidebarModal] = useState(false);
    const [isWithdrawalModal, setisWithdrawalModal] = useState(false);


    const showSidebarModal = () => {
        setisSidebarModal(true);
    };

    const showWithdrawalModal = () => {
        setisWithdrawalModal(true);
    };

    const navigate = useNavigate();

    const navigateToDocumentListPage = () => {
        navigate("/documentlistpage");
    }

    const navigateToDocumentUploadPage = () => {
        navigate("/documentuploadpage");
    }

    const navigateToPersonalInfoPage = () => {
        navigate("/personalinfopage");
    }



    useEffect(() => {
        let token = localStorage.getItem('login-token');
        const response = axios.get<{ Record: { docExpiryDate: string, docName: string, docSerialNum: string, docPublishedOrg: string } }[]>('http://15.164.231.10/document/all?email=admin@admin.com', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(function (response) {
                // console.log(JSON.stringify(response.data));
                function ListItem(props: any) {
                    const value = props.value;
                    return (
                        <li key={value.toString()}>
                            {value}
                        </li>
                    );
                }

                // let DocumentInfo = {
                //     docName : response.data[0].Record.docName,
                //     docExpiryDate : response.data[0].Record.docExpiryDate,
                //     docSerialNum : response.data[0].Record.docSerialNum,
                //     docPublishedOrg : response.data[0].Record.docPublishedOrg
                // }
                let numOfDocuments = response.data.length;
                // console.log(numOfDocuments);

                setData(response.data)
                let arr = [];
                for (var i = 0; i < numOfDocuments; i++) {
                    let DocumentInfo = {
                        // docName: response.data[i].Record.docName,
                        docExpiryDate: response.data[i].Record.docExpiryDate,
                        // docSerialNum: response.data[i].Record.docSerialNum,
                        // docPublishedOrg: response.data[i].Record.docPublishedOrg
                    }
                    arr[i] = DocumentInfo;
                }

                console.log(arr);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])

    const WithdrawalModal = () => {
        return (
            <styled.Modal>
                <styled.WithdrawalModalContainer>
                    <styled.WithdrawalModalCloseBtn onClick={() => setisWithdrawalModal(false)} />
                    <styled.WithdrawalModalTitle>회원 탈퇴</styled.WithdrawalModalTitle>
                    <styled.WithdrawalModalText>
                        <span>회원 탈퇴시 회원 정보, 보관중인 문서는 모두 삭제됩니다.<br />정말 탈퇴하시겠습니까?</span>
                    </styled.WithdrawalModalText>
                    <styled.WithdrawalModalButtons>
                        <styled.WithdrawalModalCancel onClick={() => setisWithdrawalModal(false)}>취소</styled.WithdrawalModalCancel>
                        <styled.WithdrawalModalWithdraw onClick={() => setisWithdrawalModal(false)}>탈퇴하기</styled.WithdrawalModalWithdraw>
                    </styled.WithdrawalModalButtons>
                </styled.WithdrawalModalContainer>
            </styled.Modal>
        )
    }

    const SidebarModal = () => {
        return (
            <styled.Modal>
                <styled.SidebarModalContainer>
                    <styled.CloseButton onClick={() => setisSidebarModal(false)} />
                    <styled.SideBarProfile>
                        <styled.SideBarProfileImg />
                        <span>Username</span>
                    </styled.SideBarProfile>
                    <styled.SideBarPersonalInfo>
                        <span>개인 정보 관리</span>
                        <span onClick={navigateToPersonalInfoPage}>회원 정보</span>
                        <span onClick={navigateToDocumentListPage}>보관중인 문서</span>
                    </styled.SideBarPersonalInfo>
                    <styled.SideBarHrLine />
                    <styled.SideBarSupport>
                        <span>지원</span>
                        <span>도움말</span>
                        <span>개인정보 약관 동의</span>
                        <span onClick={() => { showWithdrawalModal(); setisSidebarModal(false); }}>회원 탈퇴</span>
                    </styled.SideBarSupport>
                    <styled.Copyright>Copyright © 2022 DOC. All rights reserved.</styled.Copyright>
                </styled.SidebarModalContainer>
            </styled.Modal>
        )
    }

    const DocumentCard: React.FC<{ docExpiryDate: string, docName: string, docSerialNum: string, docPublishedOrg: string }> = ({ docExpiryDate, docName, docSerialNum, docPublishedOrg }) => {
        const navigate = useNavigate();
        const navigateToViewDocumentPage = () => {
            navigate("/viewdocumentpage");
        }

        return (
            <styled.Document onClick={navigateToViewDocumentPage}>
                {/* <styled.ValidIcon /> */}
                <styled.nameBox>
                    <span>Name</span>
                    <span>{docName}</span>
                </styled.nameBox>
                <styled.numberBox>
                    <span>Number</span>
                    <span>{docSerialNum}</span>
                </styled.numberBox>
                <styled.HrLine />
                <styled.Wrapper>
                    <styled.Organization>
                        <span>{docPublishedOrg}</span>
                    </styled.Organization>
                    <styled.PublishedDate>
                        <span>EXPIRY DATE</span>
                        <span>{docExpiryDate}</span>
                    </styled.PublishedDate>
                </styled.Wrapper>
            </styled.Document>
        )
    }

    return (
        <styled.Container>
            {isSidebarModal && <SidebarModal />}
            {isWithdrawalModal && <WithdrawalModal />}

            <styled.MainBox>
                <styled.Header>
                    <styled.SearchIcon />
                    <styled.SearchInputBox>
                        <span>Search for anything you want</span>
                    </styled.SearchInputBox>
                    <styled.SettingIcon onClick={showSidebarModal} />
                </styled.Header>
                <styled.PageTitle>document management system</styled.PageTitle>
                <styled.DocumentList>
                    <styled.AddDocument>
                        <styled.AddButton onClick={navigateToDocumentUploadPage} />
                    </styled.AddDocument>
                    {data.map(item => <DocumentCard docExpiryDate={item.Record.docExpiryDate} docName={item.Record.docName} docPublishedOrg={item.Record.docPublishedOrg} docSerialNum={item.Record.docExpiryDate}/>)}
                </styled.DocumentList>
            </styled.MainBox>
        </styled.Container>
    );
}

export default Mainpage;

