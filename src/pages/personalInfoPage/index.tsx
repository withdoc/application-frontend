import React, { useState } from 'react';
import * as styled from './style';

const PersonalInfoPage = () => {
    return(
        <styled.Container>
            <styled.MainBox>
                <styled.Wrapper>
                    <styled.ProfileBox>
                        <styled.ProfileImg />
                        <styled.ImgUploadBtn>이미지 업로드</styled.ImgUploadBtn>
                        <styled.ImgRemoveBtn>이미지 제거</styled.ImgRemoveBtn>
                    </styled.ProfileBox>
                    <styled.NicknameBox></styled.NicknameBox>
                </styled.Wrapper>
                <styled.EmailBox>
                    <span>이메일 주소</span>
                    <span>user1@naver.com</span>
                    <span>수정</span>
                </styled.EmailBox>
                <styled.HrLine />
                <styled.PasswordBox>
                    <span>비밀번호</span>
                    <span>변경</span>
                </styled.PasswordBox>
                <styled.HrLine />
                <styled.PhoneNumberBox>
                    <span>휴대폰 번호</span>
                    <span>010-1234-5678</span>
                    <span>수정</span>
                </styled.PhoneNumberBox>
                <styled.HrLine />
                <styled.BirthBox>
                    <span>생년월일</span>
                    <span>2001.08.09</span>
                    <span>수정</span>
                </styled.BirthBox>
            </styled.MainBox>
        </styled.Container>
    )
}


export default PersonalInfoPage;