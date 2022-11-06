import React, { useState } from "react";
import * as S from "./style"

function LoginComponent() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const onEmailHandler = (e: any) => {
        setEmail(e.target.value);
    }
    const onPasswordHandler = (e: any) => {
        setPassword(e.target.value);
    }

    return (
        <>
        <S.mainContainer>
            <S.mainContent>
                <S.signinTitle>
                    Sign In
                </S.signinTitle>
                <S.inputContatiner>
                    <S.emailInput type="email" value={email} placeholder="Email" onChange={onEmailHandler} />
                    <S.passwordInput type="password" value={password} placeholder="Password" onChange={onPasswordHandler}/>
                </S.inputContatiner>
            </S.mainContent>
        </S.mainContainer>
        </>
    )
}

export default LoginComponent;