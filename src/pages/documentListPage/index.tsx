import React, { useState } from 'react';
import * as styled from './style';
import { useNavigate } from 'react-router';

import Sidebar from '../../components/Sidebar';

const DocumentListPage = () => {
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

    const navigateToPersonalInfoPage = () => {
        navigate("/personalinfopage");
    }


    const WithdrawalModal = () => {
        return (
            <styled.Modal onClick={() => setisWithdrawalModal(false)}>
                <styled.WithdrawalModalContainer onClick={(e) => { console.log(1); e.stopPropagation() }}>
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


    return (
        <styled.Container>
            {isSidebarModal && <Sidebar onCloseClick={() => { setisSidebarModal(false) }} onWithdrawalClick={() => {
                setisWithdrawalModal(true)
                setisSidebarModal(false)
            }} />}
            {isWithdrawalModal && <WithdrawalModal />}

            <styled.MainBox>
                <styled.Header>
                    <styled.SearchIcon />
                    <styled.SearchInputBox>
                        <span>Search for anything you want</span>
                    </styled.SearchInputBox>
                    <styled.SettingIcon onClick={showSidebarModal} />
                </styled.Header>
                <styled.DocumentListTitle>보관중인 문서</styled.DocumentListTitle>
                <styled.DocumentMonth>2022.10</styled.DocumentMonth>
                <styled.DocumentBox>
                    <div id='checkbox'></div>
                    <span>휴학 증명서</span>
                    <span>2022.10.06</span>
                    <span>Kookmin Univ.</span>
                </styled.DocumentBox>
                <styled.DocumentMonth>2022.09</styled.DocumentMonth>
                <styled.DocumentBox>
                    <div id='checkbox'></div>
                    <span>휴학 증명서</span>
                    <span>2022.10.06</span>
                    <span>Kookmin Univ.</span>
                </styled.DocumentBox>
                <styled.DocumentBox>
                    <div id='checkbox'></div>
                    <span>휴학 증명서</span>
                    <span>2022.10.06</span>
                    <span>Kookmin Univ.</span>
                </styled.DocumentBox>
                <styled.DocumentBox>
                    <div id='checkbox'></div>
                    <span>휴학 증명서</span>
                    <span>2022.10.06</span>
                    <span>Kookmin Univ.</span>
                </styled.DocumentBox>
                <styled.DocumentBox>
                    <div id='checkbox'></div>
                    <span>휴학 증명서</span>
                    <span>2022.10.06</span>
                    <span>Kookmin Univ.</span>
                </styled.DocumentBox>
                <styled.DocumentBox>
                    <div id='checkbox'></div>
                    <span>휴학 증명서</span>
                    <span>2022.10.06</span>
                    <span>Kookmin Univ.</span>
                </styled.DocumentBox>
                <styled.DocumentBox>
                    <div id='checkbox'></div>
                    <span>휴학 증명서</span>
                    <span>2022.10.06</span>
                    <span>Kookmin Univ.</span>
                </styled.DocumentBox>

            </styled.MainBox>
        </styled.Container>
    )
}

export default DocumentListPage;