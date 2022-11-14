import React, { useState } from 'react';
import * as styled from './styles';
import { useNavigate } from 'react-router';

import DocumentCard from '../../components/DocumentCard';



function Mainpage() {
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

    const WithdrawalModal = () => {
        return(
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
                        <span>회원 정보</span>
                        <span onClick={navigateToDocumentListPage}>보관중인 문서</span>
                    </styled.SideBarPersonalInfo>
                    <styled.SideBarHrLine />
                    <styled.SideBarSupport>
                        <span>지원</span>
                        <span>도움말</span>
                        <span>개인정보 약관 동의</span>
                        <span onClick={() => {showWithdrawalModal(); setisSidebarModal(false);}}>회원 탈퇴</span>
                    </styled.SideBarSupport>
                    <styled.Copyright>Copyright © 2022 DOC. All rights reserved.</styled.Copyright>
                </styled.SidebarModalContainer>
            </styled.Modal>
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
                        <styled.AddButton />
                    </styled.AddDocument>
                    <DocumentCard />
                    <DocumentCard />
                    <DocumentCard />
                    <DocumentCard />
                    <DocumentCard />
                </styled.DocumentList>
            </styled.MainBox>
        </styled.Container>
    );
}

export default Mainpage;

