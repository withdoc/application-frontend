import React from 'react';
import * as styled from './style';

function DocumentCard() {
    return (
        <styled.Document>
            {/* <styled.ValidIcon /> */}
            <styled.nameBox>
                <span>Name</span>
                <span>휴학 증명서</span>
            </styled.nameBox>
            <styled.numberBox>
                <span>Number</span>
                <span>**** **** 002 0329</span>
            </styled.numberBox>
            <styled.HrLine />
            <styled.Wrapper>
                <styled.Organization>Kookmin Univ.</styled.Organization>
                <styled.PublishedDate>
                    <span>PUBLISHED DATE</span>
                    <span>09/20</span>
                </styled.PublishedDate>
            </styled.Wrapper>
        </styled.Document>
    )
}


export default DocumentCard;