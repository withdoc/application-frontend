import React from 'react';
import * as styled from './styles';



function Mainpage() {
    return (
        <styled.Container>
            <styled.MainBox>
                <styled.Header>
                    <styled.SearchIcon />
                    <styled.SearchInputBox>
                        <span>Search for anything you want</span>
                    </styled.SearchInputBox>
                    <styled.SettingIcon />
                </styled.Header>
            </styled.MainBox>
        </styled.Container>
    );
}

export default Mainpage;

