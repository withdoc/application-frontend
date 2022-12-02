import React, { useRef, useState } from "react";
import * as S from "./style"
import axios from 'axios';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './calendar.css';

function SignUpComponent() {
    // parameter state
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [birth, setBirth] = useState<Date>(new Date());
    const [address, setAddress] = useState<string>("");
    const [gender, setGender] = useState<string>("female");
    const [nation, setNation] = useState<string>("");

    // check state
    const [emailCheck, setEmailCheck] = useState<boolean>(true);
    const [pwCheck, setPwCheck] = useState<boolean>(true);
    const [isSame, setIsSame] = useState<boolean>(true);
    const [nameCheck, setNameCheck] = useState<boolean>(true);
    const [addressCheck, setAddressCheck] = useState<boolean>(true);
    const [nationCheck, setNationCheck] = useState<boolean>(true);

    const changeValue = (name: string) => (e: any) => {
        switch(name) {
            case "email": setEmail(e.target.value); break;
            case "password": setPassword(e.target.value); break;
            case "repeatPassword": {
                password !== e.target.value ? setIsSame(false) : setIsSame(true); 
                break;
            }
            case "name": setName(e.target.value); break;
            //case "birth": setBirth(moment(e.target.value).format("YYYY년 MM월 DD일")); break;
            case "address": setAddress(e.target.value); break;
            case "gender": setGender(e.target.value); break;
            case "nation": setNation(e.target.value); break;
        }
    }

    const EmailInput:any = useRef();
    const PasswordInput:any = useRef();
    const NameInput:any = useRef();
    const AddressInput:any = useRef();
    const NationInput:any = useRef();
    
    // focus 이동 
    const moveFocus =  () => {
        if (!emailCheck) EmailInput.current.focus();
        else if (!pwCheck) PasswordInput.current.focus();
        else if (!nameCheck) NameInput.current.focus();
        else if (!addressCheck) AddressInput.current.focus();
        else if (!nationCheck) NationInput.current.focus();
    }

    // sign up 버튼 눌렀을 때  
    const SignUpCheck = async() => {
        email === "" ? setEmailCheck(false) : setEmailCheck(true);
        password === "" ? setPwCheck(false) : setPwCheck(true);
        name === "" ? setNameCheck(false) : setNameCheck(true);
        address === "" ? setAddressCheck(false) : setAddressCheck(true);
        nation === "" ? setNationCheck(false) : setNationCheck(true);

        moveFocus();   // todo: 동기처리 필요 
        // else await SignUp();   // 모두 통과하면 
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
                    <S.inputTitle check={emailCheck} >Email *</S.inputTitle>
                    <S.inputBox check={emailCheck} ref={EmailInput} type="email" onChange={changeValue("email")}/>

                    <S.inputTitle check={pwCheck}>Password *</S.inputTitle>
                    <S.inputBox check={pwCheck} ref={PasswordInput} type="password" onChange={changeValue("password")}/>

                    <S.inputTitle check={isSame}>Repeat Password *</S.inputTitle>
                    <S.inputBox check={isSame} type="password" onChange={changeValue("repeatPassword")}/>

                    <S.inputTitle check={nameCheck}>Name *</S.inputTitle>
                    <S.inputBox check={nameCheck} ref={NameInput} type="name" onChange={changeValue("name")}/>

                    <S.inputTitle check={true}>Birth *</S.inputTitle>
                    <Calendar className="react-calendar" value={birth} />

                    <S.inputTitle check={addressCheck}>Address *</S.inputTitle>
                    <S.inputBox check={addressCheck} ref={AddressInput} type="address" onChange={changeValue("address")}/>

                    <S.inputTitle check={true}>Gender *</S.inputTitle>
                    <S.genderSelectBox onChange={changeValue("gender")} >
                        <option value={"female"} key={"female"}>female</option>
                        <option value={"male"} key={"male"}>male</option>
                    </S.genderSelectBox>

                    <S.inputTitle check={nationCheck}>Nation *</S.inputTitle>
                    <S.inputBox check={nationCheck} ref={NationInput} type="nation" onChange={changeValue("nation")}/>
                </S.inputContainer>
                <S.btnSignUp onClick={SignUpCheck}>Sign Up</S.btnSignUp>
            </S.mainContent>
        </S.mainContainer>
    )
}

export default SignUpComponent;