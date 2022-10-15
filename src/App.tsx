import React from 'react';
// import styled from 'styled-components';
import * as styled from './styles';
import './App.css';

function App() {
  return (
    <styled.Container>
      <styled.MainBox>
        <styled.MainTitle>모든 문서가 안전하게 보관되는 곳👮🏻‍♂</styled.MainTitle>
        <styled.SubTitle>document management system</styled.SubTitle>
        <styled.ButtonBox>
          <styled.SigninBtn>
            <span>로그인</span>
          </styled.SigninBtn>
          <styled.SignupBtn>
            <span>회원가입</span>
          </styled.SignupBtn>
        </styled.ButtonBox>
      </styled.MainBox>
    </styled.Container>
  );
}

export default App;
