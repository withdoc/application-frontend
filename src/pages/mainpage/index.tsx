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

