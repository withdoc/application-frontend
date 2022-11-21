import React, { useState } from 'react';
import * as styled from './style';

import Sidebar from '../Sidebar';

const Header = () => {
    const [isSidebarModal, setisSidebarModal] = useState(false);
    const showSidebarModal = () => {
        setisSidebarModal(true);
    };

    // const SidebarModal = () => {
    //     return (
    //         <styled.Modal>
    //             <styled.SidebarModalContainer>
    //                 <styled.CloseButton onClick={() => setisSidebarModal(false)} />
    //                 <styled.SideBarProfile>
    //                     <styled.SideBarProfileImg />
    //                     <span>Username</span>
    //                 </styled.SideBarProfile>
    //                 <styled.SideBarPersonalInfo>
    //                     <span>개인 정보 관리</span>
    //                     <span>회원 정보</span>
    //                     <span onClick={navigateToDocumentListPage}>보관중인 문서</span>
    //                 </styled.SideBarPersonalInfo>
    //                 <styled.SideBarHrLine />
    //                 <styled.SideBarSupport>
    //                     <span>지원</span>
    //                     <span>도움말</span>
    //                     <span>개인정보 약관 동의</span>
    //                     <span onClick={() => {showWithdrawalModal(); setisSidebarModal(false);}}>회원 탈퇴</span>
    //                 </styled.SideBarSupport>
    //                 <styled.Copyright>Copyright © 2022 DOC. All rights reserved.</styled.Copyright>
    //             </styled.SidebarModalContainer>
    //         </styled.Modal>
    //     )
    // }

    return (
        <styled.Header>
            {isSidebarModal && <Sidebar />}
            {/* <Sidebar /> */}

            <styled.SearchIcon />
            <styled.SearchInputBox>
                <span>Search for anything you want</span>
            </styled.SearchInputBox>
            <styled.SettingIcon onClick={showSidebarModal} />
        </styled.Header>
    )
}

export default Header;