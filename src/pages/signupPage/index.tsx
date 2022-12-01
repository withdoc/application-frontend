import React, { useRef, useState } from "react";
import * as S from "./style"
import axios from 'axios';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './calendar.css';

function SignUpComponent() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [birth, setBirth] = useState<Date>(new Date());
    const [address, setAddress] = useState<string>("");
    const [gender, setGender] = useState<string>("");
    const [nation, setNation] = useState<string>("");

    const [pwCheck, setPwCheck] = useState<boolean>(true);

        // new Date("2020-12-28").
        //

    const changeValue = (name: string) => (e: any) => {
        switch(name) {
            case "email": setEmail(e.target.value); break;
            case "password": setPassword(e.target.value); break;
            case "repeatPassword": {
                if (password !== e.target.value) setPwCheck(false); 
                if (password === e.target.value) setPwCheck(true); 
                break;
            }
            
        }
    }

    
    //const PwRepeatInput:any = useRef();
    
    const SignUpCheck = () => {
        /*if (password === repeatPassword) {
            setPwCheck("true");
            PwRepeatInput.value = password;
        }
        if (password !== repeatPassword) {
            setPwCheck("false");   // 비밀번호 맞지 않으면 
            PwRepeatInput.current.focus()   // repeat password 창으로 포커스 이동 
        }*/

        // else SignUp();   // 모두 통과하면 
    }

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
                    <S.inputTitle check={true}>Email *</S.inputTitle>
                    <S.inputBox check={true} type="email" onChange={changeValue("email")}/>
                    <S.inputTitle check={true}>Password *</S.inputTitle>
                    <S.inputBox check={true} type="password" onChange={changeValue("password")}/>
                    <S.inputTitle check={pwCheck}>Repeat Password *</S.inputTitle>
                    <S.inputBox check={pwCheck} type="password" onChange={changeValue("repeatPassword")}/>
                    <S.inputTitle check={true}>Name *</S.inputTitle>
                    <S.inputBox check={true} type="name"/>
                    <S.inputTitle check={true}>Birth *</S.inputTitle>
                    <Calendar className="react-calendar"/>
                    <S.inputTitle check={true}>Address *</S.inputTitle>
                    <S.inputBox check={true} type="address"/>
                    <S.inputTitle check={true}>Gender *</S.inputTitle>
                    <S.genderSelectBox value={gender}>
                        <option value={"female"} key={"female"}>female</option>
                        <option value={"male"} key={"male"}>male</option>
                    </S.genderSelectBox>
                    <S.inputTitle check={true}>Nation *</S.inputTitle>
                    <S.inputBox check={true} type="nation"/>
                </S.inputContainer>
                <S.btnSignUp onClick={SignUpCheck}>Sign Up</S.btnSignUp>
            </S.mainContent>
        </S.mainContainer>
    )
}

export default SignUpComponent;
