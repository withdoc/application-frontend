import styled from "styled-components";

export const mainContainer = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(0deg, rgba(195, 202, 210, 0.242527), rgba(195, 202, 210, 0.242527)), linear-gradient(141.8deg, #D1D8E4 2.92%, #ACB7CD 111.13%);
`;

export const mainContent = styled.div`
    width: 94%;
    height: fit-content;
    background: #FFFFFF;
    box-shadow: 0px 4px 40px #8CA4D8;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 5%;
    margin-bottom: 5%;
`

export const signUpTitle = styled.div`
    font-family: 'Poppins-Bold';
    font-weight: 700;
    font-size: 55px;
    line-height: 96px;
    text-align: center;
    color: rgba(20, 36, 59, 0.35);
    margin-top: 8%;
`

export const inputContainer = styled.div`
    width: 45%;
    display: flex;
    flex-direction: column;
`

export const inputTitle = styled.div<{check: boolean}>`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    color: ${(props) =>
    props.check === true ? "rgba(20, 36, 59, 0.35)" :  "rgba(237, 53, 53, 0.5)"};
    margin-top: 5%;
    margin-left: 2%;
`

export const inputBox = styled.input<{check: boolean}>`
    width: 100%;
    height: 45px;
    border: ${(props) =>
    props.check === true ? "1px solid #D8D8D8" : "1px solid #e04040"};
    border-radius: 10px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 36px;
    color: rgba(20, 36, 59, 0.7);
    margin-top: 2%;
`

export const birthInputContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: fit-content;
`
export const birthInputBox = styled.input`
    width: 37%;
    height: 45px;
    border: 1px solid #D8D8D8;
    border-radius: 10px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 36px;
    color: rgba(20, 36, 59, 0.7);
    margin-top: 2%;
    ::placeholder {
        color: rgba(20, 36, 59, 0.35);
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 36px;
        padding-left: 4%;
    }
`

export const btnSignUp = styled.button`
    width: 45%;
    height: 55px;
    background: rgba(16, 33, 65, 0.6);
    backdrop-filter: blur(11.5318px);
    border: none;
    border-radius: 100px;
    margin-top: 9%;
    margin-bottom: 15%;
    cursor: pointer;

    font-family: 'Poppins';
    font-weight: 700;
    font-size: 21px;
    line-height: 26px;
    text-align: center;
    color: rgba(255, 255, 255, 0.7);
    text-shadow: 0px 5px 10px rgba(73, 90, 117, 0.222373);
`;

export const genderSelectBox = styled.select`
    width: 100%;
    height: 55px;
    border: 1px solid #D8D8D8;
    border-radius: 10px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 36px;
    color: rgba(20, 36, 59, 0.5);
    margin-top: 2%;
    padding-left: 2%;
`