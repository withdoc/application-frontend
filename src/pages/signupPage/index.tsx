import React, { useState } from "react";
import * as S from "./style"

function SignUpComponent() {
    return (
        <S.mainContainer>
            <S.mainContent>
                <S.signUpTitle>
                    Sign Up
                </S.signUpTitle>
                <S.inputContainer>
                    <S.inputTitle>Email *</S.inputTitle>
                    <S.inputBox type="email"/>
                    <S.inputTitle>Password *</S.inputTitle>
                    <S.inputBox type="password"/>
                    <S.inputTitle>Repeat Password *</S.inputTitle>
                    <S.inputBox type="password"/>
                    <S.inputTitle>Name *</S.inputTitle>
                    <S.inputBox type="name"/>
                    <S.inputTitle>Birth *</S.inputTitle>
                    {/* todo: select type으로 변경*/}
                    <S.birthInputContainer>
                        <S.birthInputBox type="year" placeholder="Year"/>
                        <S.birthInputBox type="day" placeholder="Month" style={{marginLeft:'3%', marginRight: '3%'}}/>
                        <S.birthInputBox type="day" placeholder="Day"/>
                    </S.birthInputContainer>
                    <S.inputTitle>Phone Number *</S.inputTitle>
                    <S.inputBox type="number"/>
                    <S.inputTitle>Recovery Email *</S.inputTitle>
                    <S.inputBox type="email"/>
                </S.inputContainer>
                <S.btnSignUp>Sign Up</S.btnSignUp>
            </S.mainContent>
        </S.mainContainer>
    )
}

export default SignUpComponent;
