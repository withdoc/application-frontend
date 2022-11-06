import React from 'react';
import * as styled from './styles';
import { useNavigate } from 'react-router-dom';


function Startpage() {
  const navigate = useNavigate();

  const navigateToMainPage = () => {
    navigate("/mainpage");
  };

  const navigateToSignUpPage = () => {
    navigate("/signUpPage");
  }

  return (
    <styled.Container>
      <styled.MainBox>
        <styled.MainTitle>모든 문서가 안전하게 보관되는 곳👮🏻‍♂</styled.MainTitle>
        <styled.SubTitle>document management system</styled.SubTitle>
        <styled.ButtonBox>
          <styled.SigninBtn onClick={navigateToMainPage}>
            <span>로그인</span>
          </styled.SigninBtn>
          <styled.SignupBtn onClick={navigateToSignUpPage}>
            <span>회원가입</span>
          </styled.SignupBtn>
        </styled.ButtonBox>
      </styled.MainBox>
    </styled.Container>
  );
}

export default Startpage;
