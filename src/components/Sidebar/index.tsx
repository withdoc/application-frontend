import React, { useState } from 'react';
import * as styled from './style';
import { useNavigate } from 'react-router-dom';

const Sidebar: React.FC<{ onCloseClick?: () => void, onWithdrawalClick?: () => void }> = ({ onCloseClick, onWithdrawalClick }) => {
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
    };

    const navigateToPersonalInfoPage = () => {
        navigate("/personalinfopage")
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
        <>
            {isWithdrawalModal && <WithdrawalModal />}
            <styled.Modal>
                <styled.SidebarModalContainer>
                    <styled.CloseButton onClick={onCloseClick} />
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
                        <span onClick={onWithdrawalClick}>회원 탈퇴</span>
                    </styled.SideBarSupport>
                    <styled.Copyright>Copyright © 2022 DOC. All rights reserved.</styled.Copyright>
                </styled.SidebarModalContainer>
            </styled.Modal>
        </>
    )
}


export default Sidebar;