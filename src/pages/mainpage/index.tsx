import React, { useState } from 'react';
import * as styled from './styles';

import DocumentCard from '../../components/DocumentCard';



function Mainpage() {
    const [isModal, setIsModal] = useState(false);


    const showModal = () => {
        setIsModal(true);
    };


    const Modal = () => {
        return (
            <styled.Modal>
                <styled.ModalContainer>
                    <styled.CloseButton onClick={() => setIsModal(false)} />
                    <styled.SideBarProfile>
                        <styled.SideBarProfileImg />
                        <span>Username</span>
                    </styled.SideBarProfile>
                    <styled.SideBarPersonalInfo>
                        <span>개인 정보 관리</span>
                        <span>회원 정보</span>
                        <span>보관중인 문서</span>
                    </styled.SideBarPersonalInfo>
                    <styled.SideBarHrLine />
                    <styled.SideBarSupport>
                        <span>지원</span>
                        <span>도움말</span>
                        <span>개인정보 약관 동의</span>
                        <span>회원 탈퇴</span>
                    </styled.SideBarSupport>
                    <styled.Copyright>Copyright © 2022 DOC. All rights reserved.</styled.Copyright>
                </styled.ModalContainer>
            </styled.Modal>
        )
    }

    return (
        <styled.Container>
            {isModal && <Modal />}

            <styled.MainBox>
                <styled.Header>
                    <styled.SearchIcon />
                    <styled.SearchInputBox>
                        <span>Search for anything you want</span>
                    </styled.SearchInputBox>
                    <styled.SettingIcon onClick={showModal} />
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

