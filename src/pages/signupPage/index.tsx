import React, { useRef, useState } from "react";
import * as S from "./style"
import axios from 'axios';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './calendar.css';
import dayjs from 'dayjs';

function SignUpComponent() {
    // parameter state
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [repeatPw, setrepeatPw] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [birth, setBirth] = useState<Date>(new Date());
    const [address, setAddress] = useState<string>("");
    const [gender, setGender] = useState<string>("female");
    const [nation, setNation] = useState<string>("");

    // check state
    const [emailCheck, setEmailCheck] = useState<boolean>(true);
    const [pwCheck, setPwCheck] = useState<boolean>(true);
    const [repeatCheck, setRepeatCheck] = useState<boolean>(true);
    const [nameCheck, setNameCheck] = useState<boolean>(true);
    const [addressCheck, setAddressCheck] = useState<boolean>(true);
    const [nationCheck, setNationCheck] = useState<boolean>(true);

    const changeValue = (name: string) => (e: any) => {
        switch(name) {
            case "email": setEmail(e.target.value); break;
            case "password": setPassword(e.target.value); break;
            case "repeatPassword": {
                setrepeatPw(e.target.value);
                setRepeatCheck(password === e.target.value);
                break;
            }
            case "name": setName(e.target.value); break;
            case "address": setAddress(e.target.value); break;
            case "gender": setGender(e.target.value); break;
            case "nation": setNation(e.target.value); break;
        }
    }

    const EmailInput:any = useRef();
    const PasswordInput:any = useRef();
    const RepeatPasswordInput:any = useRef();
    const NameInput:any = useRef();
    const AddressInput:any = useRef();
    const NationInput:any = useRef();

    // sign up 버튼 눌렀을 때  
    const SignUpCheck = () => {
        setEmailCheck(!(email === ""));
        setPwCheck(!(password === ""));
        setRepeatCheck(!(repeatPw === ""));
        setNameCheck(!(name === ""));
        setAddressCheck(!(address === ""));
        setNationCheck(!(nation === ""));

        // focus 이동  
        if (email === "") EmailInput.current.focus();
        else if (password === "") PasswordInput.current.focus();
        else if (!repeatCheck || repeatPw === "") RepeatPasswordInput.current.focus();
        else if (name === "") NameInput.current.focus();
        else if (address === "") AddressInput.current.focus();
        else if (nation === "") NationInput.current.focus();
        else SignUp();
    }

    const SignUp = () => {
        const response = axios.post(
            "http://15.164.231.10/user/signup",
            {
                "email": email,
                "password": password,
                "name": name,
                "birthday": dayjs(birth).format("YY/MM/DD"),
                "address": address,
                "sex": gender,
                "nation": nation
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
                    <S.inputTitle check={repeatCheck}>Repeat Password *</S.inputTitle>
                    <S.inputBox check={repeatCheck} ref={RepeatPasswordInput} type="password" onChange={changeValue("repeatPassword")}/>
                    <S.inputTitle check={nameCheck}>Name *</S.inputTitle>
                    <S.inputBox check={nameCheck} ref={NameInput} type="name" onChange={changeValue("name")}/>
                    <S.inputTitle check={true}>Birth *</S.inputTitle>
                    <Calendar className="react-calendar" value={birth} onChange={setBirth} />
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