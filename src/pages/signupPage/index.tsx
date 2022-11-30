import React, { useState } from "react";
import * as S from "./style"
import axios from 'axios';

function SignUpComponent() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [birth, setBirth] = useState<string>("");
    const [address, setAddress] = useState<string>("");
    const [gender, setGender] = useState<string>("");
    const [nation, setNation] = useState<string>("");

        // new Date("2020-12-28").
        //
    
    const SignUp = () => {
        const response = axios.post(
            "http://15.164.231.10/user/signup",
            {
                "email": "string",
                "password": "string",
                "name": "string",
                "birthday": "Unknown Type: date",
                "address": "string",
                "sex": "string",
                "nation": "string"
            },
            {
                headers: {
                    'accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }
        )
        .then(function(response: any){
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error: any){
            console.log(error);
        })
    }

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
                    <S.inputTitle>Address *</S.inputTitle>
                    <S.inputBox type="address"/>
                    <S.inputTitle>Gender *</S.inputTitle>
                    <S.genderSelectBox value={gender}>
                        <option value={"female"} key={"female"}>female</option>
                        <option value={"male"} key={"male"}>male</option>
                    </S.genderSelectBox>
                    <S.inputTitle>Nation *</S.inputTitle>
                    <S.inputBox type="nation"/>
                </S.inputContainer>
                <S.btnSignUp onClick={SignUp}>Sign Up</S.btnSignUp>
            </S.mainContent>
        </S.mainContainer>
    )
}

export default SignUpComponent;
