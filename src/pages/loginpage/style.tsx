import styled from "styled-components";

export const mainContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(0deg, rgba(195, 202, 210, 0.242527), rgba(195, 202, 210, 0.242527)), linear-gradient(141.8deg, #D1D8E4 2.92%, #ACB7CD 111.13%);
`;

export const mainContent = styled.div`
    width: 94%;
    height: 85%;
    background: #FFFFFF;
    box-shadow: 0px 4px 40px #8CA4D8;
    border-radius: 30px;
`

export const signinTitle = styled.div`
    font-family: 'Poppins';
    font-weight: 700;
    font-size: 55px;
    line-height: 96px;
    text-align: center;
    color: rgba(20, 36, 59, 0.35);
    margin-top: 5%;
`

export const inputContatiner = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 60%;
    align-items: center;
    margin-top: 5%;
    
`
export const emailInput = styled.input`
    width: 45%;
    height: 11%;
    border: 1px solid #D8D8D8;
    border-radius: 10px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 36px;
    color: rgba(20, 36, 59, 0.7);

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

export const passwordInput = styled.input`
    width: 45%;
    height: 11%;
    border: 1px solid #D8D8D8;
    border-radius: 10px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 36px;
    color: rgba(20, 36, 59, 0.7);
    ::placeholder {
        color: rgba(20, 36, 59, 0.35);
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 36px;
        padding-left: 4%;
    }
    margin-top: 2%;
`