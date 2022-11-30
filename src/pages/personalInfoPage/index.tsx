import React, { useState } from 'react';
import * as styled from './style';

const PersonalInfoPage = () => {
    const [isModal, setisModal] = useState(false);
    const [content, setContent] = useState(false);

    const handleClickButton = () => {
        setContent(true);
    };

    const [emailValue, setEmailValue] = useState("test1@test.com");
    

    // const SelectComponent = () => {
    //     return(
    //         <>
    //             <styled.InfoChangeInput onChange={e => setEmailValue(e.target.value)}/>
    //             <styled.SaveButton onClick={() => setContent(false)} >
    //                 <span>저장</span>
    //             </styled.SaveButton>
    //         </>
    //     )
    // }
    

    const showModal = () => {
        setisModal(true);
    };

    const PasswordChangeModal = () => {
        return (
            <styled.Modal>
                <styled.ModalContainer>
                    <styled.CloseButton onClick={() => setisModal(false)}/>
                    <styled.ChangePasswordText>비밀번호 변경</styled.ChangePasswordText>
                    <styled.PasswordInputBox>
                        <span>비밀번호</span>
                        <styled.PasswordInput placeholder='기존의 비밀번호를 입력해주세요.'></styled.PasswordInput>
                    </styled.PasswordInputBox>
                    <styled.ModalHrLine />
                    <styled.PasswordInputBox>
                        <span>새 비밀번호</span>
                        <styled.PasswordInput placeholder='새로운 비밀번호를 입력해주세요.'></styled.PasswordInput>
                    </styled.PasswordInputBox>
                    <styled.ModalHrLine />
                    <styled.PasswordInputBox>
                        <span>비밀번호 확인</span>
                        <styled.PasswordInput placeholder='입력한 비밀번호를 다시 입력해주세요.'></styled.PasswordInput>
                    </styled.PasswordInputBox>
                    <styled.ModalHrLine />
                    <styled.ChangeButton onClick={() => setisModal(false)}>변경하기</styled.ChangeButton>
                </styled.ModalContainer>
            </styled.Modal>
        )
    }

    return(
        <styled.Container>
            {isModal && <PasswordChangeModal />}
            
            <styled.MainBox>
                <styled.Wrapper>
                    <styled.ProfileBox>
                        <styled.ProfileImg />
                        <styled.ImgUploadBtn>이미지 업로드</styled.ImgUploadBtn>
                        <styled.ImgRemoveBtn>이미지 제거</styled.ImgRemoveBtn>
                    </styled.ProfileBox>
                    <styled.NicknameBox>
                        <styled.Nickname>hht.outfits</styled.Nickname>
                        <span>수정</span>
                    </styled.NicknameBox>
                </styled.Wrapper>
                <styled.EmailBox>
                    <span>이메일 주소</span>
                    {content === false &&
                        <>
                            {/* <span>user1@naver.com</span> */}
                            <span>{emailValue}</span>
                            <span onClick={handleClickButton}>수정</span>
                        </>
                    }
                    {content &&
                        <>
                            <styled.InfoChangeInput onChange={e => setEmailValue(e.target.value)} />
                            <styled.SaveButton onClick={() => setContent(false)} >
                                <span>저장</span>
                            </styled.SaveButton>
                        </>
                    }
                    
                </styled.EmailBox>
                <styled.HrLine />
                <styled.PasswordBox>
                    <span>비밀번호</span>
                    <span onClick={showModal}>변경</span>
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




